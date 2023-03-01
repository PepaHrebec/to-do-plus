import { getAuth } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 15px auto;
`;

function FormComp({ user }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const checkEmpty = () => {
    return taskName !== "" && taskDate !== "";
  };

  const checkLate = () => {
    return new Date(taskDate).getTime() >= new Date().getTime();
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log({ taskName, taskDate, taskValue });
    if (!!getAuth().currentUser && checkEmpty() && checkLate()) {
      submitDoc();
    } else {
      console.log("Can't submit");
    }
  };

  const submitDoc = async () => {
    try {
      await addDoc(collection(getFirestore(), `${user.uid}`), {
        name: taskName,
        date: taskDate,
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  };

  return (
    <StyledForm action="">
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
      <button onClick={submitForm}>Submit</button>
    </StyledForm>
  );
}

export { FormComp };
