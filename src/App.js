import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title =
      "Coinbase – Buy & Sell Bitcoin, Ethereum, and more with trust";
  }, []);
  return <Homepage />;
}

export default App;
