import imgRecTypes from '../types/imgRec';

const initialState = [];

export default imgRecReducer = (state = initialState, action) => {
    switch(action.type){
        case imgRecTypes.IMG_REC_REQUEST:{
            const {payload} = action;
            const {imageData} = payload;
            return {
                ...state,
                imageData
            }
        }
        case imgRecTypes.IMG_REC_SUCCESS:{
            const {payload} = action;
            return {
                ...state,
                identifedAs: payload
            }
        }
        case imgRecTypes.IMG_REC_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}