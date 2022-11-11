import { insertPlace } from "./index";

export const savePlace =  async (title, imageUri) => {
    const dbResult = await insertPlace(title, imageUri);
    console.log(dbResult);
  }


  export default savePlace;
