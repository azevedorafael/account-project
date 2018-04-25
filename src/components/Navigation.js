import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () =>
    <ul>
        <li><Link to={routes.USER}>User</Link></li>
        <li><Link to={routes.ADDRESS}>Address</Link></li>
        <li><Link to={routes.ORDERS}>Orders</Link></li>
        <li><Link to={routes.WISHES}>Wishes</Link></li>
    </ul>

export default Navigation;