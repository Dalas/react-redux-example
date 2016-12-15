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
                className="main-menu"
                defaultPath={ "{0}/0/0" }
            />
            <div className="container">
                <Menu
                    menuTabs={ state.innerMenuTabs }
                    selectedMenuTab={ state.selectedInnerMenuTab }
                    className="nav-tabs-menu"
                    defaultPath={ state.selectedMenuTab + "/{0}/0"}
                />
                <Menu
                    menuTabs={ state.lastMenuTabs }
                    selectedMenuTab={ state.selectedLastMenuTab }
                    className="simple-menu"
                    defaultPath={ state.selectedMenuTab + "/" + state.selectedInnerMenuTab + "/{0}" }
                />
            </div>
        </div>
    )
}
