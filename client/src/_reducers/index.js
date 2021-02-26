import user from '../_slices/user_slice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user
})

export default rootReducer;