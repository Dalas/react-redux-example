/**
 * Created by yura on 14.12.16.
 */
import { SELECT_MENU_TAB, SELECT_INNER_MENU_TAB, SELECT_LAST_MENU_TAB } from './actionTypes';


export function selectMenuTab ( index ) {
    return {
        type: SELECT_MENU_TAB,
        index: index
    }
}

export function selectInnerMenuTab ( index ) {
    return {
        type: SELECT_INNER_MENU_TAB,
        index: index
    }
}

export function selectLastMenuTab ( index ) {
    return {
        type: SELECT_LAST_MENU_TAB,
        index: index
    }
}