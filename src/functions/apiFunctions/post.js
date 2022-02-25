/**API FUNCTIONS */
/****************POST*****************/

import { getProduct, endpoint } from "./get.js";
/************Create Product**********/
export const addAttributeValue = async (
  axios,
  setData,
  attibuteValModel,
  attributeModel,
  producTypeModel
) => {
  try {
    const response = await axios.post(
      `${endpoint}attributeValue`,
      attibuteValModel
    );
    if (!response || response.status !== 201) return console.log("error 404");
    addAttribute(
      axios,
      setData,
      response.data.result._id,
      attributeModel,
      producTypeModel
    );
    AddAssignedAttributes(axios, setData, response.data.result._id);
    setData((prevState) => ({
      ...prevState,
      idAttVal: response.data.result._id,
    }));
  } catch (err) {
    console.log("error 500");
  }
};
const addAttribute = async (
  axios,
  setData,
  id,
  attributeModel,
  producTypeModel
) => {
  try {
    const response = await axios.post(
      `${endpoint}attributes/${id}`,
      attributeModel
    );
    if (!response || response.status !== 201) return console.log("error 404");
    addProducType(axios, setData, response.data.result._id, producTypeModel);
    setData((prevState) => ({
      ...prevState,
      idAtt: response.data.result._id,
    }));
  } catch (err) {
    console.log("error 500");
  }
};
const AddAssignedAttributes = async (axios, setData, id) => {
  try {
    const response = await axios.post(`${endpoint}assigned/${id}`);
    if (!response || response.status !== 201) return console.log("error 404");
    setData((prevState) => ({
      ...prevState,
      idAssiAtt: response.data.result._id,
    }));
  } catch (err) {
    console.log("error 500");
  }
};
const addProducType = async (axios, setData, id, producTypeModel) => {
  try {
    const response = await axios.post(
      `${endpoint}productType/${id}`,
      producTypeModel
    );
    if (!response || response.status !== 201) return console.log("error 404");
    setData((prevState) => ({
      ...prevState,
      idType: response.data.result._id,
    }));
  } catch (err) {
    console.log("error 500");
  }
};
export const addProduct = async (axios, setData, data, idType, idAssiAtt) => {
  try {
    const response = await axios.post(
      `${endpoint}product/${idType}/${idAssiAtt}`,
      data
    );
    if (!response || response.status !== 201) return console.log("error 404");
    setData((prevState) => ({
      ...prevState,
      status: true,
    }));
    getProduct(axios, setData);
  } catch (err) {
    console.log("error 500");
  }
};
