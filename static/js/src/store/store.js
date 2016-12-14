/**
 * Created by yura on 14.12.16.
 */

import { createStore } from 'redux';
import reducer from '../reducers/topLevelReducer';

export default createStore(reducer);