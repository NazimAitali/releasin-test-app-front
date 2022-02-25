import React from "react";
import axios from "axios";
import {
  widthDetect,
  byProduct,
  confirmDelete,
  availabilityTestforTable,
  controlPanel,
} from "../../functions/globalFunction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { MdDeleteOutline, MdOutlineOpenInNew } from "react-icons/md";
import Nodata from "../../assets/noData.png";
import "./style.scss";
const Table = ({ data, setData, setUi, displayProduct }) => {
  const tr = widthDetect(window.screen.width);

  return (
    <div className="list-table">
      <table className="center column table-container">
        <thead className="center t-head">
          <tr className="center tr-column">
            {tr.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className=" tbody center column ">
          {!data.json || data.json.length === 0 ? (
            <div className="No-data">
              <img src={Nodata} alt="" />
            </div>
          ) : (
            data.json.map((product, i) => (
              <tr className=" tr-row" key={i}>
                <td
                  className="selectable"
                  onClick={() => {
                    byProduct(setData, product);
                    controlPanel(setUi, "displayProduct", displayProduct);
                  }}
                >
                  {availabilityTestforTable(product, product.name)}
                  <MdOutlineOpenInNew />
                </td>
                <td
                  className="selectable"
                  onClick={() => console.log("change productype")}
                >
                  {availabilityTestforTable(
                    product.productType,
                    product.productType.name
                  )}
                </td>
                <td>
                  {availabilityTestforTable(product, product.createdAt).slice(
                    0,
                    10
                  )}
                </td>
                {window.screen.width >= 600 ? (
                  <td>
                    {availabilityTestforTable(
                      product.productType.attributes[0],
                      product.productType.attributes[0].name
                    )}
                  </td>
                ) : null}

                {window.screen.width >= 960 ? (
                  <td>
                    {availabilityTestforTable(
                      product.assignedAttributes,
                      product.assignedAttributes[0].attributeValue.name
                    )}
                  </td>
                ) : null}
                <td className="Delete-confirmation">
                  <MdDeleteOutline
                    onClick={() => {
                      confirmDelete(
                        confirmAlert,
                        product,
                        axios,
                        setUi,
                        setData,
                        data
                      );
                    }}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
