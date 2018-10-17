/* eslint-disable indent */
const actionTypes = {
    SHOW_POPUP: 'SHOW_POPUP',
    GET_REGISTER_FORM: 'GET_REGISTER_FORM',
    GET_AUTHORIZATION_FORM: 'GET_AUTHORIZATION_FORM',
    CREATE_EVENT: ' CREATE_EVENT',
};

export const actionCreators = {
    showPopup: flag => ({
            type: actionTypes.SHOW_POPUP,
            payload: { flag },
        }),
    getRegister: flagRegister => ({
            type: actionTypes.GET_REGISTER_FORM,
            payload: { flagRegister },
        }),
    getCreateEvent: flag => ({
        type: actionTypes.CREATE_EVENT,
        payload: flag,
    }),
};

const initialState = {
    showPopup: false,
    getRegisterForm: false,
    createEvent: false,
};

export const duckReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SHOW_POPUP: {
            return {
                ...state,
                showPopup: payload.flag,
            };
        }
        case actionTypes.GET_REGISTER_FORM: {
            return {
                ...state,
                getRegisterForm: payload.flagRegister,
            };
        }
        case actionTypes.CREATE_EVENT: {
            return {
                ...state,
                createEvent: payload,
            };
        }
    default: {
        return state;
    }
    }
};