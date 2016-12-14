/**
 * Created by yura on 14.12.16.
 */

import { connect } from 'react-redux';
import { selectMenuTab, selectInnerMenuTab, selectLastMenuTab } from '../actions/selectActions';
import App from '../components/application';


function getCurrentMenuTabs (state) {
    return Object.assign({}, state, {
        innerMenuTabs: state.innerMenuTabs[ state.selectedMenuTab ],
        lastMenuTabs: state.lastMenuTabs[ state.selectedMenuTab ][ state.selectedInnerMenuTab ]
    })
}

const mapStateToProps = (state) => {
    return getCurrentMenuTabs( state );
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMenuTab: (index) => {
            dispatch(selectMenuTab(index))
        },
        selectInnerMenuTab: (index) => {
            dispatch(selectInnerMenuTab(index))
        },
        selectLastMenuTab: (index) => {
            dispatch(selectLastMenuTab(index))
        }
    }
};

const ApplicationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( App );

export default ApplicationContainer;