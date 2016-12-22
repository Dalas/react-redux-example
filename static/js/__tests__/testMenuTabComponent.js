/**
 * Created by yura on 22.12.16.
 */

import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import MenuTabComponent from '../src/components/menuTabComponent';


describe('<MenuTab /> component', () => {
    it('Should render self correctly', () => {
        let urlData = {
            value: "Test URL",
            path: "1/1/1"
        };

        const menuTab = shallow(
            <MenuTabComponent value={ urlData.value } isSelected={ true } path={ urlData.path } />
        );

        expect(menuTab.contains(<Link to={ urlData.path }>{ urlData.value }</Link>)).toEqual(true);
        expect(menuTab.find('.menu-tab').hasClass('selected')).toEqual(true);
    });
});