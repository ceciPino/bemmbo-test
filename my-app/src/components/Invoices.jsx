import React from "react";
import "../App.css";
import { pendingDocs } from "../dummydatos";

export const Invoices = () => {

  return (
    <>
      <div className="invoice-container">
        {pendingDocs.map((data, key) => {
          if ( data.type === "received") {

          return (
            <div key={key}>
              {data.id +
                " , " +
                data.amount +
                " , " +
                data.type}
            </div>
          );
          }


        })}
      </div>
    </>
  );

};