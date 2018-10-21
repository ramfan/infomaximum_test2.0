/* eslint-disable indent,no-return-assign */
const actionTypes = {
    SHOW_POPUP: 'SHOW_POPUP',
    GET_REGISTER_FORM: 'GET_REGISTER_FORM',
    GET_AUTHORIZATION_FORM: 'GET_AUTHORIZATION_FORM',
    CREATE_EVENT: ' CREATE_EVENT',
    ADD_PARTICIPANT_FIELD: 'ADD_PARTICIPANT_FIELD',
    ADD_SOCIAL_FIELD: 'ADD_SOCIAL_FIELD',
    ADD_MENTOR_FIELD: 'ADD_MENTOR_FIELD',
    AS_CREATOR: 'AS_CREATOR',
    AS_PARTICIPANT: 'AS_PARTICIPANT',
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
    addParticipant: () => ({ type: actionTypes.ADD_PARTICIPANT_FIELD }),
    asCreator: flag => ({
        type: actionTypes.AS_CREATOR,
        payload: flag,
    }),
    addSocial: () => ({ type: actionTypes.ADD_SOCIAL_FIELD }),
    addMentor: () => ({ type: actionTypes.ADD_MENTOR_FIELD }),
};

let cuntFieldsParticipants = 1;
let cuntFieldsSocial = 1;
let cuntFieldsMentor = 1;
const initialState = {
    showPopup: false,
    getRegisterForm: false,
    createEvent: false,
    countParticipants: cuntFieldsParticipants,
    countSocials: cuntFieldsSocial,
    countMentors: cuntFieldsMentor,
    isCreator: false,
    isReady: false,
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
        case actionTypes.ADD_PARTICIPANT_FIELD: {
            return {
                ...state,
                countParticipants: cuntFieldsParticipants += 1,
            };
        }
        case actionTypes.ADD_SOCIAL_FIELD: {
            return {
                ...state,
                countSocials: cuntFieldsSocial += 1,
            };
        }
        case actionTypes.ADD_MENTOR_FIELD: {
            return {
                ...state,
                countMentors: cuntFieldsMentor += 1,
            };
        }
        case actionTypes.AS_CREATOR: {
            return {
                ...state,
                isCreator: payload,
                isReady: true,
            };
        }
    default: {
        return state;
    }
    }
};