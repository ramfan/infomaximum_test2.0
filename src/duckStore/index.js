/* eslint-disable indent */
const actionTypes = {
    SHOW_POPUP: 'SHOW_POPUP',
    GET_REGISTER_FORM: 'GET_REGISTER_FORM',
    GET_AUTHORIZATION_FORM: 'GET_AUTHORIZATION_FORM',
};

export const actionCreators = {
    showPopup: (flag) => {
        return {
            type: actionTypes.SHOW_POPUP,
            payload: {flag}
        };
    },
    getRegister: (flagRegister) => {
        return {
            type: actionTypes.GET_REGISTER_FORM,
            payload: {flagRegister}
        };
    }
};

const initialState = {
    showPopup : false,
    getRegisterForm: false
};

export const duckReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case actionTypes.SHOW_POPUP: {
            return {
                ...state,
                showPopup: payload.flag
            };
        }
        case actionTypes.GET_REGISTER_FORM: {
            return {
                ...state,
                getRegisterForm: payload.flagRegister
            };
        }
    default: {
        return state;
    }
    }
};