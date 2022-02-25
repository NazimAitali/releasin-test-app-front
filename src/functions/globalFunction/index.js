import { deleteProduct, deleteIfCancel } from "../apiFunctions/delete";
export const widthDetect = (width) => {
  return width >= 960
    ? ["Name", "Type", "Date", "Attribute", "Ref", "Action"]
    : width >= 600 && width < 960
    ? ["Name", "Type", "Date", "Attribute", "Action"]
    : ["Name", "Type", "Date", "Action"];
};
export const addPanel = (setUi, addProduct) => {
  setUi((prevState) => ({
    ...prevState,
    addProduct: addProduct ? false : true,
  }));
};

export const controlPanel = (setUi, key, affect) => {
  setUi((prevState) => ({
    ...prevState,
    [`${key}`]: affect ? false : true,
  }));
};
export const controlPanelForced = (setUi, key) => {
  setUi((prevState) => ({
    ...prevState,
    [`${key}`]: false,
  }));
};
export const byProduct = (setData, product) => {
  setData((prevState) => ({
    ...prevState,
    ProductToshow: product,
  }));
};
export const next = (setUi, key, value) => {
  setUi((prevState) => ({
    ...prevState,
    [`${key}`]: value,
  }));
};
/**STORE DATA FUNCTIONS */
export const toModel = (key, select, value, setData, data) => {
  setData((prevState) => ({
    ...prevState,
    model: {
      ...data,
      [`${select}`]: { [`${key}`]: value },
    },
  }));
};
export const toModelSub = (key, select, value, setData, data, attribute) => {
  setData((prevState) => ({
    ...prevState,
    model: {
      ...data,
      [`${select}`]: { ...attribute, [`${key}`]: value },
    },
  }));
};
export const availabilityTestforTable = (obj, suObj) => {
  return !obj || !suObj ? <div>! unavailable</div> : suObj;
};
export const availabilityTestforAdd = (data) => {
  return data.idAttVal &&
    data.idAtt &&
    data.idAssiAtt &&
    data.idType &&
    data.model.attributeValue &&
    data.model.attributeValue.name &&
    data.model.attributeValue.boolean &&
    data.model.attributeValue.date &&
    data.model.attribut.name &&
    data.model.attribut.type &&
    data.model.producType.name
    ? true
    : false;
};
export const confirmDelete = (
  confirmAlert,
  product,
  axios,
  setUi,
  setData,
  data
) => {
  confirmAlert({
    title: "Confirm to delete",
    message: `Are you sure to do delete ${product.name} .`,
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          deleteProduct(axios, product._id, setData);
          deleteIfCancel(
            axios,
            product.assignedAttributes[0].attributeValue._id,
            product.productType.attributes[0]._id,
            product.assignedAttributes[0]._id,
            product.productType._id,
            setUi,
            setData,
            data.model,
            data.model.attribute,
            data.model.attributeValue
          );
        },
      },
      {
        label: "No",
      },
    ],
  });
};

export const reset = (
  setUi,
  setData,
  dataModel,
  dataAttribute,
  datAttributeValue
) => {
  setUi((prevState) => ({
    ...prevState,
    addProduct: false,
    product: false,
    producType: false,
    productAttribute: false,
    productAttributeValue: false,
    modifyPanel: false,
  }));
  setData((prevState) => ({
    ...prevState,
    model: {
      ...dataModel,
      product: { name: null },
      producType: { name: null },
      attribute: { ...dataAttribute, name: null, type: null },
      attributeValue: {
        ...datAttributeValue,
        name: null,
        boolean: null,
        date: null,
      },
    },
    status: false,
    idType: null,
    idAtt: null,
    producType: null,
    idAttVal: null,
    idAssiAtt: null,
  }));
};
