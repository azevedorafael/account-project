import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../constants/routes.js';
import '../App.css';
import Navigation from './Navigation';
import UserInfo from './UserInfo';
import AddUser from './AddUser';
import Address from './Address';
import Orders from './Orders';
import Wishes from './Wishes';

const users = [
  {
    id: 1,
    name: 'User1',
    email: 'user1@email.com',
    address: 'Rua Um , 30',
  },
];

localStorage.setItem('users', JSON.stringify(users));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem('users'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.getUsers();

    this.setState({ users });
  }

  getUsers() {
    // check if there is any user in localStorage
    return this.state.users;

    //   fetch('./db.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       id: data.id,
    //       name: data.name,
    //       email: data.email,
    //       address: data.address,

    //     });
    // });

  }

  onAdd(id, name, email, address) {
    const users = this.getUsers();

    users.push({
      id,
      name,
      email,
      address
    });

    this.setState({ users });
  }

  onEditSubmit(id, name, email, address, originId) {
    let users = this.getUsers();

    users = users.map(user => {
      if (user.id == originId) {
        user.id = id;
        user.name = name;
        user.email = email;
        user.address = address;
      }
      return user;
    });

    this.setState({ users });
  }

  onDelete(id) {
    const users = this.getUsers();

    const filteredUsers = users.filter(user => {
      return user.id !== id;
    });

    this.setState({ users: filteredUsers });
  }

  render() {
    return (
      <div className="App">
        <h1>Users Manager</h1>


        <BrowserRouter>
          <div>
            <Navigation />
            <hr />

            <Switch>
              <Route
                exact path={routes.ADDRESS}
                component={() => <Address />}
              />
              <Route
                exact path={routes.ORDERS}
                component={() => <Orders />}
              />
              <Route
                exact path={routes.WISHES}
                component={() => <Wishes />}
              />
            </Switch>
          </div>
        </BrowserRouter>

        <AddUser
          onAdd={this.onAdd}
        />

        {
          this.state.users.map(user => {
            return (
              <UserInfo
                key={user.id}
                {...user}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
