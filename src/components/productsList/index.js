import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import { controlPanel } from "../../functions/globalFunction";
import { getProduct } from "../../functions/apiFunctions/get";
import Table from "../table";
import AddProduct from "../addProduct";
import { MdOutlinePostAdd } from "react-icons/md";
import ShowProduct from "../showProduct";

const List = () => {
  const [data, setData] = useState({
    json: [],
    model: {
      product: {
        name: null,
      },
      producType: {
        name: null,
      },
      attribute: {
        name: null,
        type: null,
      },
      attributeValue: {
        name: null,
        boolean: null,
        date: null,
      },
    },
    idType: null,
    idAtt: null,
    idAttVal: null,
    idAssiAtt: null,
    status: false,
    ProductToshow: null,
  });
  const [ui, setUi] = useState({
    addProduct: false,
    product: false,
    producType: false,
    productAttribute: false,
    productAttributeValue: false,
    displayProduct: false,
    modifyPanel: false,
  });
  useEffect(() => {
    getProduct(axios, setData);
  }, []);

  return (
    <div className="List">
      <div className="Add-btn">
        <button
          className="Add-btn-content"
          onClick={() => controlPanel(setUi, "addProduct", ui.addProduct)}
        >
          <MdOutlinePostAdd />
          <p>Add Product</p>
        </button>
      </div>
      <Table
        data={data}
        setData={setData}
        setUi={setUi}
        displayProduct={ui.displayProduct}
      />
      {ui.addProduct ? (
        <AddProduct setUi={setUi} ui={ui} data={data} setData={setData} />
      ) : null}
      {ui.displayProduct ? (
        <ShowProduct ui={ui} data={data} setData={setData} setUi={setUi} />
      ) : null}
    </div>
  );
};

export default List;
