/**
 * Created by yura on 13.12.16.
 */

import ReactDOM from 'react-dom';
import ApplicationContainer from './containers/applicationContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
    <Provider store={ store } >
        <Router history={ hashHistory }>
            <Route path="(:selectedMenuTab)/(:selectedInnerMenuTab)/(:selectedLastMenuTab)" component={ ApplicationContainer } />
            <Route path="/" component={ ApplicationContainer } />
        </Router>
    </Provider>,
    document.getElementById('app')
);