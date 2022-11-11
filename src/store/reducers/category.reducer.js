import { categoryTypes } from "../types";

const { SELECT_CATEGORY, GET_CATEGORY ,GET_CATEGORIE} = categoryTypes;

const initialState = {
  categories: null,
  selected: null,
  categorie: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };

    case GET_CATEGORY:
      return {
        ...state,
        categories: action.categories,
      };
    case GET_CATEGORIE:
      return {
        ...state,
        categorie: action.cerrajeros,
      }

    default:
      return state;
  }
};

export default categoryReducer;
