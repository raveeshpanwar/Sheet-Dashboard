import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
  const [Data, SetData] = useState({});
  function inputHandler(e) {
    const { value, name } = e.target;
    SetData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(Data);
    axios
      .post(
        "https://sheet.best/api/sheets/1e1c6fe4-04a7-4846-a86d-e114399b2361",
        Data
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="outer">
      <form>
        <div className="inner">
          <label>ID</label>
          <input type="number" onChange={inputHandler} name="id"></input>
        </div>
        <div className="inner">
          <label>Avatar Name</label>
          <input type="text" onChange={inputHandler} name="avatar"></input>
        </div>
        <div className="inner">
          <label>Performance Score</label>
          <input type="number" onChange={inputHandler} name="score"></input>
        </div>
        <div>
          <button className="inner_button" onClick={submit} type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
