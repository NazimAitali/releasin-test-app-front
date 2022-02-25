import React from "react";
import axios from "axios";
import { MdAddCircleOutline, MdOutlineCancel } from "react-icons/md";
import { addProduct } from "../../../functions/apiFunctions/post";
import { deleteIfCancel } from "../../../functions/apiFunctions/delete";
import { reset } from "../../../functions/globalFunction";

const CreateProduct = ({ setData, setUi, ui, data }) => {
  return (
    <>
      {ui.productAttributeValue ? (
        <div className="items">
          <div className="item Add-btn">
            <button
              className="Add-btn-content Btn-add-panel"
              onClick={() => {
                addProduct(
                  axios,
                  setData,
                  data.model.product,
                  data.idType,
                  data.idAssiAtt
                );
                reset(
                  setUi,
                  setData,
                  data.model,
                  data.model.attribute,
                  data.model.attributeValue
                );
              }}
            >
              <MdAddCircleOutline />
              <p>Create</p>
            </button>
            <button
              className="Add-btn-content Btn-add-panel Cancel"
              onClick={() =>
                data.status
                  ? reset(
                      setUi,
                      setData,
                      data.model,
                      data.model.attribute,
                      data.model.attributeValue
                    )
                  : deleteIfCancel(
                      axios,
                      data.idAttVal,
                      data.idAtt,
                      data.idAssiAtt,
                      data.idType,
                      setUi,
                      setData,
                      data.model,
                      data.model.attribute,
                      data.model.attributeValue
                    )
              }
            >
              <MdOutlineCancel />
              <p>Cancel</p>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CreateProduct;
