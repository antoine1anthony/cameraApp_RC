import sp500Types from '../types/sp500';

const initialState = [];

export default sp500Reducer = (state = initialState, action) => {
    switch(action.type){
        case sp500Types.SP_500_SUCCESS:{
            const {payload} = action;
            return{
                ...state,
               currentData: payload
            }
        }
        case sp500Types.SP_500_ERROR:{
            const {payload} = action;
            return {
                ...state,
                error: payload.error
            }
        }
        default:{
            return state;
        }
    }
}