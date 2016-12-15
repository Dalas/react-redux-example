// @flow

import { createStore } from 'redux';
import reducer from '../reducers/topLevelReducer';

export default createStore(reducer);