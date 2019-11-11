import sp500Types from '../types/sp500';

export const sp500Request = () => ({
    type : sp500Types.SP_500_REQUEST
});

export const sp500Success = (spData) => ({
    type : sp500Types.SP_500_SUCCESS,
    payload: spData
});

export const sp500Error = ({error}) => ({
    type : sp500Types.SP_500_ERROR,
    payload: {error}
});