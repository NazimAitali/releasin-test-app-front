import React from "react";
import InputProduct from "../addProduct/inputs/inputProduct";
import "./style.scss";
const ModifyProduct = ({ data, setData, setUi, ui }) => {
  return (
    <div className="Modify-panel">
      <InputProduct setData={setData} setUi={setUi} data={data} ui={ui} />
    </div>
  );
};

export default ModifyProduct;
