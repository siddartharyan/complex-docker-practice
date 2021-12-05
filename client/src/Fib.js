import React, { useState, useEffect } from "react";
import axios from "axios";

function Fib() {
  const [values, setValues] = useState({
    seenIndexes: [],
    values: {},
    index: "",
  });

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  async function fetchValues() {
    const data = await axios.get("/api/values/current");
    setValues({ ...values, values: data.data });
  }

  async function fetchIndexes() {
    const indexes = await axios.get("/api/values/all");
    setValues({ ...values, seenIndexes: indexes.data });
  }

  function handleChange(evnt) {
    setValues({ ...values, index: evnt.target.value });
  }

  function renderValues() {
    let entries = [];
    for (let key in values.values) {
      entries.push(
        <div key={key}>
          For index {key} calculated value is {values.values[key]}
        </div>
      );
    }
    return entries;
  }

  async function handleClick(evnt) {
    evnt.preventDefault();
    await axios.post("/api/values", {
      index: values.index,
    });
    setValues({ ...values, index: "" });
  }

  return (
    <>
      <div>
        <p>Enter the index:</p>
        <br />
        <input
          value={values.index}
          onChange={handleChange}
          placeholder="enter the index"
        />
        <button onClick={handleClick}>Submit</button>
        <h3>Indexes I have seen:</h3>
        {values.indexes.map((el) => el).join(" ,")}
        <h3>Calculated Values:</h3>
        {renderValues().map((el) => el)}
      </div>
    </>
  );
}

export default Fib;
