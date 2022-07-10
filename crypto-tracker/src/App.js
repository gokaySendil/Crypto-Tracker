import React, { useEffect } from "react";
import Axios from "axios";
import "./App.css";
import List from "./components/List";
import { useState } from "react";

function App() {
  const API_KEY = "85eca489f80586021465ea4dc5c20bd2";
  const API_URL = "http://api.coinlayer.com/live?access_key=" + API_KEY;
  const [formatedData, setFormatedData] = useState("");
  const getData = async () => {
    var array = [];
    await Axios.get(API_URL).then((res) => {
      var data = res.data.rates;
      Object.keys(data).map((key) => {
        array.push({ key: key, data: data[key] });
      });
    });
    setFormatedData(array);
    console.log(formatedData);
  };
  return (
    <div className="App">
      <div>
        <h1>Crypto Tracker App</h1>
        <h1> (USD Rates)</h1>
        <List getData={getData} list={formatedData}></List>
      </div>
    </div>
  );
}

export default App;
