import {combineReducers} from 'redux';
import imgRecReducer from './imgRec';
import sp500Reducer from './sp500';

export default combineReducers({
	imgRec: imgRecReducer,
	sp: sp500Reducer
});