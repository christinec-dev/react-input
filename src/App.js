import React, { useState } from "react";
import FormInput from "./components/FormInput.js";

export default function App() {
  const data = [
    {
      id: "1",
      name: "Option One"
    },
    {
      id: "2",
      name: "Option Two"
    },
    {
      id: "3",
      name: "Option Three"
    }
  ];

  function handleChange(event) {
    console.log(event.target.value);
  }
  function onSelectChange(event) {
    console.log(event.target.value);
  }
  function onToggleChange(event) {
    console.log(event.target.checked);
  }

  return (
    <div className="App">

        <h2 className="pa-color-highlight">This is a reusable form input</h2>
        <FormInput type={"text"} onChange={handleChange} placeholder={"First Name"} />
        <FormInput type={"email"} onChange={handleChange} placeholder={"Email Address"}/>
    </div>
  );
}