/**
 * Created by yura on 13.12.16.
 */

import React from "react";
import MenuItem from './menuTabComponent';


const MenuComponent  = ({ menuTabs, selectedMenuTab, className, defaultPath }) => {
    return (
        <ul className={ className }>
            { menuTabs.map( (value, index) =>
                <MenuItem
                    key={ index }
                    value={ value }
                    isSelected={ selectedMenuTab == index }
                    path={ defaultPath.replace("{0}", index) }
                />
            )}
        </ul>
    )
};

export default MenuComponent;