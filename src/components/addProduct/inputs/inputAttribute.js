import React from "react";
import { next, toModelSub } from "../../../functions/globalFunction";
const InputAttribute = ({ setData, ui, setUi, data }) => {
  return (
    <>
      {ui.producType ? (
        <>
          <div className="items">
            <p>Add product attribute :</p>
            <div className="item">
              <input
                placeholder="Attribute Name"
                onChange={(e) =>
                  toModelSub(
                    "name",
                    "attribute",
                    e.target.value,
                    setData,
                    data.model,
                    data.model.attribute
                  )
                }
              />
            </div>
            <div className="item">
              <input
                onChange={(e) =>
                  toModelSub(
                    "type",
                    "attribute",
                    e.target.value,
                    setData,
                    data.model,
                    data.model.attribute
                  )
                }
                placeholder="Attribute type"
              />
            </div>
          </div>
          {data.model.attribute.name && data.model.attribute.type ? (
            <div className="items">
              <div className="item Add-btn Next-btn">
                <button
                  className="Add-btn-content"
                  onClick={() => next(setUi, "productAttribute", true)}
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

export default InputAttribute;
