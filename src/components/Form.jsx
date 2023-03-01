import { getAuth } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 15px auto;
  background-color: white;
  padding: 20px;
  border: solid black 2px;
  border-radius: 20px;
`;

const FormWrap = styled.div`
  padding: 5px;
  display: flex;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 70%;
  padding: 4px;
  border-radius: 8px;
`;

const SbmtButton = styled.button`
  width: 8rem;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #f7ede2;
  border-radius: 8px;
  padding: 4px;
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
      <FormWrap>
        <label htmlFor="nameInp">Task:</label>
        <StyledInput
          type="text"
          id="nameInp"
          name="nameInp"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
      </FormWrap>
      <FormWrap>
        <label htmlFor="dateInp">When:</label>
        <StyledInput
          type="date"
          id="dateInp"
          name="dateInp"
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />
      </FormWrap>
      <SbmtButton onClick={submitForm}>Submit</SbmtButton>
    </StyledForm>
  );
}

export { FormComp };
