import React, { PropTypes } from "react";
import UserInfo from "./UserInfo";

const UserContainer = ({ users, onDelete, onEditSubmit, className }) => (
    <div className={className} >
    {console.log(users)}
        {users.map(user => (
            <UserInfo
                key={user.id}
                {...user}
                onDelete={onDelete}
                onEditSubmit={onEditSubmit}
            />
        ))}
    </div >
)

UserContainer.defaultProps = {
    className: ''
}

export default UserContainer;