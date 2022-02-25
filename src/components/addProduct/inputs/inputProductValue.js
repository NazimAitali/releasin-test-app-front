import React from "react";
import axios from "axios";
import { toModelSub, next } from "../../../functions/globalFunction";
import { addAttributeValue } from "../../../functions/apiFunctions/post";
const InputProductValue = ({ setData, setUi, ui, data }) => {
  return (
    <>
      {ui.productAttribute ? (
        <>
          <div className="items">
            <p>Add product attribute value:</p>
            <div className="item">
              <input
                onChange={(e) =>
                  toModelSub(
                    "name",
                    "attributeValue",
                    e.target.value,
                    setData,
                    data.model,
                    data.model.attributeValue
                  )
                }
                placeholder="Attribute value Name"
              />
            </div>

            <div className="Select-attribute-value">
              <p>Select value :</p>
              <div
                onChange={(e) =>
                  toModelSub(
                    "boolean",
                    "attributeValue",
                    e.target.value,
                    setData,
                    data.model,
                    data.model.attributeValue
                  )
                }
              >
                <input type="radio" value={true} name="gender" />
                <input type="radio" value={false} name="gender" />
              </div>
            </div>

            <div className="item">
              <input
                onChange={(e) =>
                  toModelSub(
                    "date",
                    "attributeValue",
                    e.target.value,
                    setData,
                    data.model,
                    data.model.attributeValue
                  )
                }
                placeholder="Attribute date"
              />
            </div>
          </div>

          {data.model.attributeValue.name &&
          data.model.attributeValue.boolean &&
          data.model.attributeValue.date ? (
            <div className="items">
              <div className="item Add-btn Next-btn">
                <button
                  className="Add-btn-content"
                  onClick={() => {
                    next(setUi, "productAttributeValue", true);
                    addAttributeValue(
                      axios,
                      setData,
                      data.model.attributeValue,
                      data.model.attribute,
                      data.model.producType
                    );
                  }}
                >
                  <p>Add</p>
                </button>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default InputProductValue;
