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

        this.props.onEditSubmit(this.idInput.value, this.nameInput.value, this.emailInput.value, this.addressInput.value, this.props.id);
        this.setState({isEditing:false});
    }

    onDelete() {
        const { onDelete, id } = this.props;
        onDelete(id);
    }

    render() {
        const { id, name, email, address } = this.props;

        return (
            <div>
                {
                    this.state.isEditing ?
                        (
                            <form onSubmit={this.onEditSubmit}>
                                <h3>Editing User</h3>
                                <input
                                    placeholder='Id'
                                    ref={idInput => this.idInput = idInput}
                                    defaultValue={id}
                                />
                                <input
                                    placeholder='Name'
                                    ref={nameInput => this.nameInput = nameInput}
                                    defaultValue={name}
                                />
                                <input
                                    placeholder='Email'
                                    ref={emailInput => this.emailInput = emailInput}
                                    defaultValue={email}
                                />
                                <input
                                    placeholder='Address'
                                    ref={addressInput => this.addressInput = addressInput}
                                    defaultValue={address}
                                />
                                <button>Save</button>
                            </form>
                        )
                        :
                        (
                            <div>
                                <span> {name}</span> {' | '}
                                <span>{email}</span> {' | '}
                                <span>{address}</span> {' | '}
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
