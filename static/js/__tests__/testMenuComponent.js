/**
 * Created by yura on 15.12.16.
 */

import React from 'react';
import { Link } from 'react-router';
import { render } from 'enzyme';
import MenuComponent from '../src/components/menuComponent';


describe('<Menu /> component', () => {
    it('Should render self correctly', () => {
        let urlsData = {
            menuTabs: [
                "Tab 1",
                "Tab 2",
                "Tab 3",
            ],
            selectedMenuTab: 1,
            className: "test",
            defaultPath: "1/1/{0}"
        };

        const menu = render(
            <MenuComponent { ...urlsData } />
        );

        expect(menu.find('ul').hasClass(urlsData.className)).toEqual(true);
    });

    it('Should render correct count of tabs', () => {
        let urlsData = {
            menuTabs: [
                "Tab 1",
                "Tab 2",
                "Tab 3",
                "Tab 4",
            ],
            selectedMenuTab: 1,
            className: "test",
            defaultPath: "1/1/{0}"
        };

        const menu = render(
            <MenuComponent { ...urlsData } />
        );

        expect(menu.find('.menu-tab').length).toEqual(4);
    });

    it('Should add `selected` class to correct tab', () => {
        let urlsData = {
            menuTabs: [
                "Tab 1",
                "Tab 2",
                "Tab 3",
                "Tab 4",
            ],
            selectedMenuTab: 1,
            className: "test",
            defaultPath: "1/1/{0}"
        };

        const menu = render(
            <MenuComponent { ...urlsData } />
        );

        expect(menu.find('li.selected').text()).toEqual("Tab 2");
    });
});