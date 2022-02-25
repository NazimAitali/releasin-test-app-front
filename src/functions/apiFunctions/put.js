/**API FUNCTIONS */
/****************UPDATE*****************/
import { endpoint } from "../apiFunctions/get";
import { getProduct } from "../apiFunctions/get";
import { reset } from "../globalFunction";

export const updateProductById = async (
  id,
  axios,
  name,
  setData,
  setUi,
  dataModel,
  dataAttribute,
  datAttributeValue
) => {
  try {
    const response = await axios.put(`${endpoint}product/update/${id}`, name);
    if (!response || response.status !== 200) return console.log("error 404");
    getProduct(axios, setData);
    reset(setUi, setData, dataModel, dataAttribute, datAttributeValue);
  } catch (err) {
    console.log(err);
  }
};
