import imgRecTypes from '../types/imgRec';

export const imgRecRequest = (imageData) => ({
    type : imgRecTypes.IMG_REC_REQUEST,
    payload: imageData
});

export const imgRecSuccess = (identifedAs) => ({
    type : imgRecTypes.IMG_REC_SUCCESS,
    payload: identifedAs
});

export const imgRecError = ({error}) => ({
    type : imgRecTypes.IMG_REC_ERROR,
    payload: {error}
});