import React from "react";
import axios from "axios";
import { addPanel, reset } from "../../functions/globalFunction";
import { deleteIfCancel } from "../../functions/apiFunctions/delete";
import "./style.scss";
import InputProduct from "./inputs/inputProduct";
import InputProducType from "./inputs/inputProducType";
import InputAttribute from "./inputs/inputAttribute";
import InputProductValue from "./inputs/inputProductValue";
import CreateProduct from "./inputs/createProduct";

const AddProduct = ({ setUi, ui, data, setData }) => {
  return (
    <div className="Add-panel">
      <div
        className="Overlay"
        onClick={() => {
          addPanel(setUi, ui.addProduct);
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
              );
        }}
      ></div>
      <div className="Add">
        <h2>Add Product Panel</h2>
        <div className="Add-container">
          <InputProduct setData={setData} setUi={setUi} data={data} ui={ui} />
          <InputProducType
            setUi={setUi}
            setData={setData}
            data={data}
            ui={ui}
          />
          <InputAttribute setData={setData} setUi={setUi} ui={ui} data={data} />
          <InputProductValue
            setData={setData}
            setUi={setUi}
            ui={ui}
            data={data}
          />
          {data.idAttVal && data.idAtt && data.idAssiAtt && data.idType ? (
            <CreateProduct
              setData={setData}
              setUi={setUi}
              ui={ui}
              data={data}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
