import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../constants/routes.js';
import '../App.css';
import Navigation from './Navigation';
import UserContainer from './UserContainer';
import AddUser from './AddUser';
import Address from './Address';
import Orders from './Orders';
import Wishes from './Wishes';


const users = [
  {
    id: 1,
    name: 'User1',
    lastName: 'LastName',
    email: 'user1@email.com',
    cpf: '30289049902',
    password: 'pass1234'
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

    //     });
    // });

  }

  onAdd(id, name, lastName, email, cpf, password) {
    const users = this.getUsers();

    users.push({
      id,
      name,
      lastName,
      email,
      cpf,
      password
    });

    this.setState({ users });
  }

  onEditSubmit(id, name, lastName, email, cpf, password) {
    let users = this.getUsers();

    users = users.map(user => {
      if (user.id === id) {
        user.id = id;
        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.cpf = cpf;
        user.password = password;
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
        <BrowserRouter>
          <div>
            <Navigation />
            <hr />

            <Switch>
              <Route
                exact path={routes.ADDUSER}
                component={() =>
                  <AddUser
                    onAdd={this.onAdd}
                  />}
              />
              <Route
                exact path={routes.USER}
                component={() =>
                  <UserContainer
                    users={this.state.users}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                  />}
              />
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
      </div>
    )
  }
}

export default App;
