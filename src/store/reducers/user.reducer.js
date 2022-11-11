import { userTypes } from "../types";
import { insertPlace } from "../../db";
import User from "../../model/user";

const { SET_NEW_USER, GET_USER } = userTypes;

const initialState = {
  users: [],
  user_selected: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_USER:
      const { nombre, imagen } = action.payload;
      let user = {};

      // insertamos los campos nombre y direccion de la foto en la base de datos  
      insertPlace(nombre, imagen)
        .then((result) => {
          user = new User(result.insertId, nombre, imagen);
        })
        .catch((err) => {
          console.log("error de  la  promesa", err);
        });

      // retornamos el estado con el nuevo usuario
      return {
        ...state,
        users: [
          ...state.users,
          { id: user.id, nombre: user.nombre, imagen: user.imagen },
        ],
      };
    case GET_USER:
      return {
        ...state,
        user_selected: state.users[0],
      };
    default:
      return state;
  }
};

export default userReducer;
