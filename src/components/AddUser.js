import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.idInput.value, this.nameInput.value, this.emailInput.value, this.addressInput.value);

        this.idInput.value = '';
        this.nameInput.value = '';
        this.emailInput.value = '';
        this.addressInput.value = '';
    }

    render() {
        const { id, name, email, address } = this.props;

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
                    placeholder='Email'
                    ref={emailInput => this.emailInput = emailInput}
                />
                <input
                    placeholder='Address'
                    ref={addressInput => this.addressInput = addressInput}
                />
                <button>Add</button>

                <hr />
            </form>
        );
    }
}

export default AddUser;
