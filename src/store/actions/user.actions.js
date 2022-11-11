import { userTypes } from "../types";


const { SET_NEW_USER, GET_USER } = userTypes;

import  User  from "../../model/user";



export const setNewUser = (nombre,imagen) => ({
    type: SET_NEW_USER,
    payload: {nombre,imagen},

});


export const getUser = () => ({
    type: GET_USER,
});


