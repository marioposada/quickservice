import { servicesTypes } from "../types";
import { services } from "../../constants/data/services";

const { GET_SERVICES, GET_ACTIVE_SERVICES } = servicesTypes;

const initialState = {
  services: services,
  selected: null,
  active: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_SERVICES:
      return {
        ...state,
        selected: state.services.find(
          (service) => service.user_Id === action.payload
        ) ? true : false,
      };

      case GET_SERVICES:
        return {
          ...state,
          active: state.services.filter(
            (service) => service.user_Id === action.payload
          ),
        };
        

    default:
      return state;
  }
};

export default servicesReducer;
