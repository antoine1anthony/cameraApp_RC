import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {sp500Success, sp500Error} from '../actions/sp500';
import sp500Types from '../types/sp500';
import * as api from '../../services/api/sp500';

function* getSP500Data(){
    try {
        const spData = yield call(api.sp500Request)
        yield put(sp500Success(spData))
    } catch (error) {
        console.log(error)
        yield put(sp500Error(error))
    }
}

function* watchSP500Request(){
    yield takeLatest(sp500Types.SP_500_REQUEST, getSP500Data);
}

export default SP500Sagas = [
    fork(watchSP500Request)
]