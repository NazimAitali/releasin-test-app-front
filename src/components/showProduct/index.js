import React from "react";
import {
  controlPanel,
  controlPanelForced,
} from "../../functions/globalFunction";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./style.scss";
import ModifyProduct from "../modifyProduct";

const ShowProduct = ({ setUi, data, setData, ui }) => {
  return (
    <div className="Add-panel">
      <div
        className="Overlay"
        onClick={() => {
          controlPanel(setUi, "displayProduct", ui.displayProduct);
          controlPanelForced(setUi, "modifyPanel");
        }}
      ></div>
      <div className="Add">
        <div className="Product-display">
          <div className="Product-detail">
            <div className="Product-type Border">
              <div className="Product-name Item-product">
                Product name :{data.ProductToshow.name}{" "}
                <HiOutlinePencilAlt
                  className="Modif-btn"
                  onClick={() =>
                    controlPanel(setUi, "modifyPanel", ui.modifyPanel)
                  }
                />
                {ui.modifyPanel ? (
                  <ModifyProduct
                    data={data}
                    setData={setData}
                    ui={ui}
                    setUi={setUi}
                  />
                ) : null}
              </div>
              <div className="Product-type-name Item-product">
                Product Type : {data.ProductToshow.productType.name}
              </div>
              <div className="Product-type-attr-name Item-product">
                Attribute Name :{" "}
                {data.ProductToshow.productType.attributes[0].name}
              </div>
              <div className="Product-type-attr-type Item-product">
                Attribute Type :{" "}
                {data.ProductToshow.productType.attributes[0].type}
              </div>
            </div>
            <div className="Assigned-attributes">
              <div className="Product-type-attrVal-Boolean Item-product">
                Attribute Value :{" "}
                {data.ProductToshow.assignedAttributes[0].attributeValue.boolean.toString()}
              </div>
              <div className="Product-type-attrVal-name Item-product">
                Attribute Value Name :{" "}
                {data.ProductToshow.assignedAttributes[0].attributeValue.name}
              </div>
              <div className="Product-type-attrVall-date Item-product">
                Attribute Value Date :{" "}
                {data.ProductToshow.assignedAttributes[0].attributeValue.date}
              </div>
              <div className="Product-type-creation Item-product">
                Attribute Value Creation :{" "}
                {data.ProductToshow.productType.createdAt.slice(0, 10)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
