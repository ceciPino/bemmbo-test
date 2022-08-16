import React from "react";
import "./App.css";
import { Invoices } from "./components/Invoices";
import { pendingDocs } from "./dummydatos";

function App() {
  return (
    <div className="App">
      <Invoices />
    </div>
  );
}

export default App;
