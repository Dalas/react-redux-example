// @flow

import React from "react";
import MenuItem from './menuTabComponent';


type CompProps = {
    menuTabs: Array<string>;
    selectedMenuTab: string;
    className: string;
    defaultPath: string;
}

const MenuComponent  = ({ menuTabs, selectedMenuTab, className, defaultPath }: CompProps) => {
    return (
        <ul className={ className }>
            { menuTabs.map( (value: string, index: number) =>
                <MenuItem
                    key={ index }
                    value={ value }
                    isSelected={ selectedMenuTab == index }
                    path={ defaultPath.replace("{0}", index.toString() ) }
                />
            )}
        </ul>
    )
};

export default MenuComponent;