/**API FUNCTIONS */
/****************DELETE*****************/

import { getProduct, endpoint } from "./get.js";
import { reset } from "../globalFunction";

export const deleteProduct = async (axios, id, setData) => {
  try {
    const response = await axios.delete(`${endpoint}product/delete/${id}`);
    if (!response || response.error) return console.log("error 404");
    getProduct(axios, setData);
  } catch (err) {
    console.log("error 500");
  }
};

export const deleteIfCancel = async (
  axios,
  idAttVal,
  idAtt,
  idAssiAtt,
  idType,
  setUi,
  setData,
  dataModel,
  dataAttribute,
  datAttributeValue
) => {
  try {
    reset(setUi, setData, dataModel, dataAttribute, datAttributeValue);
    setData((prevState) => ({
      ...prevState,
      status: false,
    }));
    const response = await axios.delete(
      `${endpoint}attributesValue/delete/${idAttVal}`
    );
    if (!response || response.error) return console.log("error 404");
    deleteAttributes(axios, idAtt, idAssiAtt, idType);
  } catch (err) {
    console.log("error 500");
  }
};
const deleteAttributes = async (axios, idAtt, idAssiAtt, idType) => {
  try {
    const response = await axios.delete(
      `${endpoint}attributes/delete/${idAtt}`
    );
    deleteAssignedAttributes(axios, idAssiAtt, idType);
    if (!response || response.error) return console.log("error 404");
  } catch (err) {
    console.log("error 500");
  }
};

const deleteAssignedAttributes = async (axios, idAssiAtt, idType) => {
  try {
    const response = await axios.delete(
      `${endpoint}assignedAttributes/delete/${idAssiAtt}`
    );
    if (!response || response.error) return console.log("error 404");
    deleteProductType(axios, idType);
  } catch (err) {
    console.log("error 500");
  }
};

const deleteProductType = async (axios, idType) => {
  try {
    const response = await axios.delete(
      `${endpoint}productType/delete/${idType}`
    );
    if (!response || response.error) return console.log("error 404");
  } catch (err) {
    console.log("error 500");
  }
};
