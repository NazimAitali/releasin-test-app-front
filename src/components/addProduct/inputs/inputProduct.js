import React from "react";
import { toModel, next } from "../../../functions/globalFunction";
import { updateProductById } from "../../../functions/apiFunctions/put";
import axios from "axios";
const InputProduct = ({ setData, setUi, data, ui }) => {
  return (
    <>
      <div className="items">
        <p>Add product :</p>
        <div className="item">
          <input
            onChange={(e) =>
              toModel(
                "name",
                "product",
                e.target.value,
                setData,
                data.model,
                setData
              )
            }
            placeholder="Product Name"
          />
        </div>
      </div>
      {data.model.product.name ? (
        <div className="items">
          <div className="item Add-btn Next-btn">
            <button
              className="Add-btn-content"
              onClick={() => {
                ui.modifyPanel
                  ? updateProductById(
                      data.ProductToshow._id,
                      axios,
                      data.model.product,
                      setData,
                      setUi,
                      data.model,
                      data.model.attribute,
                      data.model.attributeValue
                    )
                  : next(setUi, "product", true);
              }}
            >
              {ui.modifyPanel ? <p>Modify</p> : <p>Add</p>}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InputProduct;
