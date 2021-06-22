import * as t from './types';

export const signInRequest = (): any => {
    return {
        type: t.SIGNIN_REQUEST,
    };
};
export const signInRequestSuccess = (data: string): any => {
    return {
        type: t.SIGNIN_REQUEST_SUCCESS,
        payload: data,
    };
};
export const signInRequestFailure = (error: string): any => {
    return {
        type: t.SIGNIN_REQUEST_FAILURE,
        payload: error,
    };
};

export const Signin = () => {
    return async (dispatch: (arg0: { type: string }) => void): Promise<any> => {
        try {
            dispatch(signInRequest());
            //some Api call here to login
            const data = '//some Api call here';
            dispatch(signInRequestSuccess(data));
        } catch (error) {
            const errMsg = error.message;
            dispatch(signInRequestFailure(errMsg));
        }
    };
};
