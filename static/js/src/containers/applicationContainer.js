// @flow

import { connect } from 'react-redux';
import { selectMenuTab, selectInnerMenuTab, selectLastMenuTab } from '../actions/selectActions';
import App from '../components/application';


function getCurrentMenuTabs (state: Object): Object {
    return Object.assign({}, state, {
        innerMenuTabs: state.innerMenuTabs[ state.selectedMenuTab ],
        lastMenuTabs: state.lastMenuTabs[ state.selectedMenuTab ][ state.selectedInnerMenuTab ]
    })
}

const mapStateToProps = (state: Object, ownProps: Object): Object => {
    state = Object.assign({}, state, ownProps.routeParams);

    return getCurrentMenuTabs( state );
};

const mapDispatchToProps = (dispatch: Function): Object => {
    return {
        selectMenuTab: (index: number) => {
            dispatch(selectMenuTab(index))
        },
        selectInnerMenuTab: (index: number) => {
            dispatch(selectInnerMenuTab(index))
        },
        selectLastMenuTab: (index: number) => {
            dispatch(selectLastMenuTab(index))
        }
    }
};

const ApplicationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( App );

export default ApplicationContainer;