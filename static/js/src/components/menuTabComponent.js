/**
 * Created by yura on 14.12.16.
 */

import React, { PropTypes } from 'react';

const MenuTabComponent = ({ value, isSelected, onClick }) => {
    return (
        <li className={ isSelected ? "menu-tab selected" : "menu-tab" } onClick={ onClick } >
            { value }
        </li>
    )
};

export default MenuTabComponent;