import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {Alert} from 'react-native';
import Clarifai from 'clarifai';
import {imgRecSuccess, imgRecError} from '../actions/imgRec';
import imgRecTypes from '../types/imgRec';
import * as api from '../../services/api/clarifai';


function* getImgRec({payload}){
    try {
        clarifaiApi = (imageData) => {
            // Identify the image
            return api.clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {base64: imageData})
                   .then((response) => {
                        const identifiedImage = response.outputs[0].data.concepts[0].name;
                        return identifiedImage;
                    })
                   .catch(err => console.log(err))
        }
        displayAnswer = (identifiedImage) => {
            // Show an alert with the answer on
            Alert.alert(`${identifiedImage}`)
        }
        const imgGuess = yield call(clarifaiApi, payload);
        yield call(displayAnswer, imgGuess)
        yield put(imgRecSuccess(imgGuess))
    } catch (error) {
        console.log(error)
        yield put(imgRecError(error))
    }
}

function* watchImgRecRequest(){
	yield takeLatest(imgRecTypes.IMG_REC_REQUEST, getImgRec);
}

export default ImgRecSagas = [
    fork(watchImgRecRequest)
]