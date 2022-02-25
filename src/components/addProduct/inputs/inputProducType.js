import React from "react";
import { toModel, next } from "../../../functions/globalFunction";
const InputProducType = ({ setUi, setData, data, ui }) => {
  return (
    <>
      {ui.product ? (
        <>
          <div className="items">
            <p>Add product type :</p>
            <div className="item">
              <input
                onChange={(e) =>
                  toModel(
                    "name",
                    "producType",
                    e.target.value,
                    setData,
                    data.model
                  )
                }
                placeholder="Product Type"
              />
            </div>
          </div>

          {data.model.producType.name ? (
            <div className="items">
              <div className="item Add-btn Next-btn">
                <button
                  className="Add-btn-content"
                  onClick={() => next(setUi, "producType", true)}
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

export default InputProducType;
