import React from "react";
import "../App.css";
import { pendingDocs } from "../dummydatos";

export const Invoices = () => {
  return (
    <>
      <div className="stock-container">
        {pendingDocs.map((data, key) => {
          return (
            <div key={key}>
              {data.id +
                " , " +
                data.amount +
                " , " +
                data.type}
            </div>
          );
        })}
      </div>
    </>
  );
};