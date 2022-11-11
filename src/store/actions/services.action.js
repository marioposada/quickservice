import { servicesTypes } from "../types";

const { GET_SERVICES,GET_ACTIVE_SERVICES } = servicesTypes;



export const getServices = () => ({
    type: GET_SERVICES,
    payload: 'user1',
});


export const getActiveServices = () => ({
    type: GET_ACTIVE_SERVICES,
    payload: 'user1',
});


