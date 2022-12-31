import { END_LOGIN_GOOGLE, END_LOGIN_MAIL, END_SIGNUP_GOOGLE, END_SIGNUP_MAIL, START_LOGIN_GOOGLE, START_LOGIN_MAIL, START_SIGNUP_GOOGLE, START_SIGNUP_MAIL } from "../ActionType/actionType";

export const initialState = {
    LoginGoogle: false,
    LoginMail: false,

    SignUpMail: false,
    SignUpGoogle: false,

    loadingAuthUser: false,
};
export const loadingReducer = (state, action) => {
    switch (action.type) {
        //Login Loading :
        case START_LOGIN_GOOGLE:
            return {
                ...state,
                LoginGoogle: true,
            }
        case END_LOGIN_GOOGLE:
            return {
                ...state,
                LoginGoogle: false,
            }

        case START_LOGIN_MAIL:
            return {
                ...state,
                LoginMail: true,
            }
        case END_LOGIN_MAIL:
            return {
                ...state,
                LoginMail: false
            }

        //signUp :
        case END_SIGNUP_GOOGLE:
            return {
                ...state,
                SignUpGoogle: false,
            }
        case START_SIGNUP_GOOGLE:
            return {
                ...state,
                SignUpGoogle: true
            }
        case END_SIGNUP_MAIL:
            return {
                ...state,
                SignUpMail: false,
            }
        case START_SIGNUP_MAIL:
            return {
                ...state,
                SignUpMail: true
            }
        default:
            return state;
    }
}