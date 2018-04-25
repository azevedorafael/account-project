import React, { Component } from 'react';
import FormGroup from './FormGroup';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        const { id, name, lastName, email, cpf, password } = this.props;


        this.state = ({
            isEditing: false,
            id: id,
            name: name,
            lastName: lastName,
            email: email,
            cpf: cpf,
            password: password
        });

        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onEdit() {
        this.setState({ isEditing: true });
    }

    onEditSubmit(e) {
        e.preventDefault();
        this.props.onEditSubmit(this.state.id, this.state.name, this.state.lastName, this.state.email, this.state.cpf, this.state.password);
        this.setState({ isEditing: false });
    }

    onDelete() {
        const { onDelete, id } = this.props;
        onDelete(id);
    }

    render() {
        const { name, lastName, email, cpf, password } = this.props;

        return (
            <div className='row justify-content-center'>
                {
                    this.state.isEditing ?
                        (
                            <form onSubmit={this.onEditSubmit}>
                                <h3>Editing User</h3>
                                <FormGroup
                                    id={name}
                                    name={name}
                                    value={this.state.name}
                                    type='text'
                                    required='required'
                                    maxLength={100}
                                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                                />
                                <FormGroup
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                    id={lastName}
                                    name={lastName}
                                    type='text'
                                    required='required'
                                    maxLength={100}
                                    onChange={(e) => { this.setState({ lastName: e.target.value }) }}
                                />
                                <FormGroup
                                    placeholder='Email'
                                    value={this.state.email}
                                    id={email}
                                    name={email}
                                    type='text'
                                    required='required'
                                    maxLength={20}
                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                />
                                <FormGroup
                                    placeholder='CPF'
                                    value={this.state.cpf}
                                    id={cpf}
                                    name={cpf}
                                    type='text'
                                    required='required'
                                    maxLength={20}
                                    onChange={(e) => { this.setState({ cpf: e.target.value }) }}
                                />
                                <FormGroup
                                    placeholder='Password'
                                    value={this.state.password}
                                    id={password}
                                    name={password}
                                    type='text'
                                    required='required'
                                    maxLength={8}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                />
                                <button>Save</button>
                            </form>
                        )
                        :
                        (
                            <div>
                                <form >
                                    <h3>User Profile</h3>
                                    <span> {name}</span> {' | '}
                                    <span> {lastName}</span> {' | '}
                                    <span>{email}</span> {' | '}
                                    <span>{cpf}</span> {' | '}
                                    <span>{password}</span> {'  '}
                                    <div>
                                        <button
                                            onClick={this.onEdit}
                                        >Edit</button> {'  '}
                                        <button
                                            onClick={this.onDelete}
                                        >Delete</button>
                                    </div>
                                </form>
                            </div>
                        )
                }

            </div>
        );
    }
}

export default UserInfo;
