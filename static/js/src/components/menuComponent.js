/**
 * Created by yura on 13.12.16.
 */

import React from "react";
import MenuItem from './menuTabComponent';


const MenuComponent  = ({ menuTabs, selectedMenuTab, selectMenuTab }) => {
    return (
        <ul className="menu">
            { menuTabs.map( (value, index) =>
                <MenuItem key={ index } value={ value } isSelected={ selectedMenuTab == index } onClick={ (  ) => selectMenuTab( index ) } />
            )}
        </ul>
    )
};

export default MenuComponent;