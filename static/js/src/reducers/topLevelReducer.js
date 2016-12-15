// @flow

import { SELECT_MENU_TAB, SELECT_INNER_MENU_TAB, SELECT_LAST_MENU_TAB } from '../actions/actionTypes';


const initialState = {
    menuTabs: [
        'Menu Tab 1',
        'Menu Tab 2',
        'Menu Tab 3'
    ],
    innerMenuTabs: [
        [
            'Inner Menu 1 Tab 1',
            'Inner Menu 1 Tab 2',
            'Inner Menu 1 Tab 3'
        ],
        [
            'Inner Menu 2 Tab 1',
            'Inner Menu 2 Tab 2',
            'Inner Menu 2 Tab 3'
        ],
        [
            'Inner Menu 3 Tab 1',
            'Inner Menu 3 Tab 2',
            'Inner Menu 3 Tab 3'
        ]
    ],
    lastMenuTabs: [
        [
            [
                'Last Menu 1 Tab 1',
                'Last Menu 1 Tab 2',
                'Last Menu 1 Tab 3'
            ],
            [
                'Last Menu 2 Tab 1',
                'Last Menu 2 Tab 2',
                'Last Menu 2 Tab 3'
            ],
            [
                'Last Menu 3 Tab 1',
                'Last Menu 3 Tab 2',
                'Last Menu 3 Tab 3'
            ]
        ],
        [
            [
                'Last Menu 4 Tab 1',
                'Last Menu 4 Tab 2',
                'Last Menu 4 Tab 3'
            ],
            [
                'Last Menu 5 Tab 1',
                'Last Menu 5 Tab 2',
                'Last Menu 5 Tab 3'
            ],
            [
                'Last Menu 6 Tab 1',
                'Last Menu 6 Tab 2',
                'Last Menu 6 Tab 3'
            ]
        ],
        [
            [
                'Last Menu 7 Tab 1',
                'Last Menu 7 Tab 2',
                'Last Menu 7 Tab 3'
            ],
            [
                'Last Menu 8 Tab 1',
                'Last Menu 8 Tab 2',
                'Last Menu 8 Tab 3'
            ],
            [
                'Last Menu 9 Tab 1',
                'Last Menu 9 Tab 2',
                'Last Menu 9 Tab 3'
            ]
        ]
    ],
    selectedMenuTab: '0',
    selectedInnerMenuTab: '0',
    selectedLastMenuTab: '0'
};

export default function menuReducer (state: Object = initialState, action: Object): Object {
    switch (action.type) {
        case SELECT_MENU_TAB:
            return Object.assign({}, state, {selectedMenuTab: action.index});

        case SELECT_INNER_MENU_TAB:
            return Object.assign({}, state, {selectedInnerMenuTab: action.index});

        case SELECT_LAST_MENU_TAB:
            return Object.assign({}, state, {selectedLastMenuTab: action.index});

        default:
            return Object.assign({}, state);
    }
}