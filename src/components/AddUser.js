import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.idInput.value, this.nameInput.value, this.lastNameInput.value, this.emailInput.value, this.cpfInput.value, this.passwordInput.value);

        this.idInput.value = '';
        this.nameInput.value = '';
        this.lastNameInput.value = '';
        this.emailInput.value = '';
        this.cpfInput.value = '';
        this.passwordInput.value = '';
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <h3>Create New User</h3>
                <input
                    placeholder='Id'
                    ref={idInput => this.idInput = idInput}
                />
                <input
                    placeholder='Name'
                    ref={nameInput => this.nameInput = nameInput}
                />
                <input
                    placeholder='Last Name'
                    ref={lastNameInput => this.lastNameInput = lastNameInput}
                />
                <input
                    placeholder='Email'
                    ref={emailInput => this.emailInput = emailInput}
                />
                <input
                    placeholder='CPF'
                    ref={cpfInput => this.cpfInput = cpfInput}
                />
                <input
                    placeholder='Password'
                    ref={passwordInput => this.passwordInput = passwordInput}
                />
                <button>Add</button>

                <hr />
            </form>
        );
    }
}

export default AddUser;
