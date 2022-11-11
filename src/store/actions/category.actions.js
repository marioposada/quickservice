import { categoryTypes } from "../types";

const { SELECT_CATEGORY, GET_CATEGORY, GET_CATEGORIE } = categoryTypes;
import { tecnicos } from "../../constants/data/tecnicos";
import { cerrajeros } from "../../constants/data/cerrajeros";

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});

export const getCategories = () => {
  return {
    type: GET_CATEGORY,
    categories: tecnicos,
  };
};

export const getCategorie = () => {
  return {
    type: GET_CATEGORIE,
    cerrajeros: cerrajeros,
  };
};
