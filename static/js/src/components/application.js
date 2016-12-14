/**
 * Created by yura on 14.12.16.
 */

import React from 'react';
import Menu from './menuComponent';

export default (state) => {
    return (
        <div>
            <Menu
                menuTabs={ state.menuTabs }
                selectedMenuTab={ state.selectedMenuTab }
                selectMenuTab={ state.selectMenuTab }
                className="main-menu"
            />
            <div className="container">
                <Menu
                    menuTabs={ state.innerMenuTabs }
                    selectedMenuTab={ state.selectedInnerMenuTab }
                    selectMenuTab={ state.selectInnerMenuTab }
                    className="nav-tabs-menu"
                />
                <Menu
                    menuTabs={ state.lastMenuTabs }
                    selectedMenuTab={ state.selectedLastMenuTab }
                    selectMenuTab={ state.selectLastMenuTab }
                    className="simple-menu"
                />
            </div>
        </div>
    )
}
