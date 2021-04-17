import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Counter from "./Label/Counter";
import SettingsPage from "./SettingsPage/SettingsPage";

function App() {


  //   useEffect(() => {
  //     localStorage.setItem("countValue", JSON.stringify(count));
  //   }, [count]);

  return (
    <div className="App">
      <SettingsPage />
      <Counter />
    </div>
  );
}

export default App;
