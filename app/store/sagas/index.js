import ImgRecSagas from './imgRecSagas';
import SP500Sagas from './sp500Sagas';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...ImgRecSagas,
        ...SP500Sagas
    ]);
}