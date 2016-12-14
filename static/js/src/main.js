/**
 * Created by yura on 13.12.16.
 */

import ReactDOM from 'react-dom';
import ApplicationContainer from './containers/applicationContainer';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
    <Provider store={ store } >
        <ApplicationContainer />
    </Provider>,
    document.getElementById('app')
);