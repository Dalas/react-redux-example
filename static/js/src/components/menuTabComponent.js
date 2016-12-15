/**
 * Created by yura on 14.12.16.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const MenuTabComponent = ({ value, isSelected, path }) => {
    return (
        <li className={ isSelected ? "menu-tab selected" : "menu-tab" } >
            <Link to={ path } >{ value }</Link>
        </li>
    )
};

export default MenuTabComponent;