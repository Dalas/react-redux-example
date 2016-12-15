// @flow

import { SELECT_MENU_TAB, SELECT_INNER_MENU_TAB, SELECT_LAST_MENU_TAB } from './actionTypes';


export function selectMenuTab ( index: number ): Object {
    return {
        type: SELECT_MENU_TAB,
        index: index
    }
}

export function selectInnerMenuTab ( index: number ): Object {
    return {
        type: SELECT_INNER_MENU_TAB,
        index: index
    }
}

export function selectLastMenuTab ( index: number ): Object {
    return {
        type: SELECT_LAST_MENU_TAB,
        index: index
    }
}