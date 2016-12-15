// @flow

import React, { PropTypes } from 'react';
import { Link } from 'react-router';


type CompProps = {
    value?: string;
    isSelected?: boolean;
    path: string;
}

const MenuTabComponent = ({ value, isSelected, path }: CompProps) => {
    return (
        <li className={ isSelected ? "menu-tab selected" : "menu-tab" } >
            <Link to={ path } >{ value }</Link>
        </li>
    )
};

export default MenuTabComponent;