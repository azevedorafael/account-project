import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = ({ isEditing: false });

        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onEdit() {
        this.setState({ isEditing: true });
    }

    onEditSubmit(e) {
        e.preventDefault();
        this.props.onEditSubmit(this.props.id, this.nameInput.value, this.lastNameInput.value, this.emailInput.value, this.cpfInput.value, this.passwordInput.value);
        this.setState({ isEditing: false });
    }

    onDelete() {
        const { onDelete, id } = this.props;
        onDelete(id);
    }

    render() {
        const { name, lastName, email, cpf, password } = this.props;

        return (
            <div>
                {
                    this.state.isEditing ?
                        (
                            <form onSubmit={this.onEditSubmit}>
                                <h3>Editing User</h3>
                                <input
                                    placeholder='Name'
                                    ref={nameInput => this.nameInput = nameInput}
                                    defaultValue={name}
                                />
                                <input
                                    placeholder='Last Name'
                                    ref={lastNameInput => this.lastNameInput = lastNameInput}
                                    defaultValue={lastName}
                                />
                                <input
                                    placeholder='Email'
                                    ref={emailInput => this.emailInput = emailInput}
                                    defaultValue={email}
                                />
                                <input
                                    placeholder='CPF'
                                    ref={cpfInput => this.cpfInput = cpfInput}
                                    defaultValue={cpf}
                                />
                                <input
                                    placeholder='Password'
                                    ref={passwordInput => this.passwordInput = passwordInput}
                                    defaultValue={password}
                                />
                                <button>Save</button>
                            </form>
                        )
                        :
                        (
                            <div>
                                <span> {name}</span> {' | '}
                                <span> {lastName}</span> {' | '}
                                <span>{email}</span> {' | '}
                                <span>{cpf}</span> {' | '}
                                <span>{password}</span> {' | '}
                                <button
                                    onClick={this.onEdit}
                                >Edit</button> {' | '}
                                <button
                                    onClick={this.onDelete}
                                >Delete</button>
                            </div>
                        )
                }

            </div>
        );
    }
}

export default UserInfo;
