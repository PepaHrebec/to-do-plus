import { useState } from "react";
import styled from "styled-components";

function FormComp() {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskValue, setTaskValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ taskName, taskDate, taskValue });
  };

  return (
    <>
      <form action="">
        <label htmlFor="nameInp">Task:</label>
        <input
          type="text"
          id="nameInp"
          name="nameInp"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <label htmlFor="dateInp">When:</label>
        <input
          type="date"
          id="dateInp"
          name="dateInp"
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />
        <label htmlFor="valueInp">What:</label>
        <input
          type="text"
          id="valueInp"
          name="valueInp"
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
        />
        <button onClick={submitForm}>Submit</button>
      </form>
    </>
  );
}

export { FormComp };
