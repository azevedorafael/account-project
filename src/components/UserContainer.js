import React from "react";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const UserContainer = ({ users, onDelete, onEditSubmit, className, onChange }) => (
    <div className={className} >
        {(users.length > 0) ?
            users.map(user => (
                <UserInfo
                    key={user.id}
                    {...user}
                    onDelete={onDelete}
                    onEditSubmit={onEditSubmit}
                    onChange={onChange}
                />
            ))
            :
            <Link to={routes.ADDUSER}>Add New User</Link>
        }
    </div>
)

UserContainer.defaultProps = {
    className: ''
}

export default UserContainer;