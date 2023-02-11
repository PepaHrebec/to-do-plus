import { useEffect, useState } from "react";
import styled from "styled-components";
import { app, db } from "./firebaseConfig";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(app);
    console.log(db);
  }, []);

  return <></>;
}

export default App;
