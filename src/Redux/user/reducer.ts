import * as t from './types';

const initialState = {
    loading: false,
    data: [],
    login: false,
    error: '',
};

const userReducer = (state = initialState, action: { type: string; payload: string }): any => {
    switch (action.type) {
        case t.SIGNIN_REQUEST:
            return {
                loading: true,
                data: [],
                error: action.payload,
            };
        case t.SIGNIN_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
                login: true,
            };
        case t.SIGNIN_REQUEST_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
