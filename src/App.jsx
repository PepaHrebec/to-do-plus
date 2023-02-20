import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { FormComp } from "./components/Form";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import { app, auth, db } from "./firebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";

const MainWrap = styled.div`
  height: 100vh;
`;

function App() {
  const [user, setUser] = useState({
    set: !!getAuth().currentUser,
    name: "",
    pic: "",
    uid: "",
  });
  const [todos, setTodos] = useState([]);

  const signIn = async () => {
    try {
      var provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const usr = await signInWithPopup(auth, provider);
      setUser({
        set: true,
        name: usr.user.displayName,
        pic: usr.user.photoURL,
        uid: usr.user.uid,
      });
      watchDatabase(usr.user.uid);
    } catch (err) {
      console.log(err);
    }
  };

  const watchDatabase = (path) => {
    const colQuery = query(collection(db, `${path}`));
    const unsub = onSnapshot(colQuery, (document) => {
      const dataArr = [];
      document.forEach((doc) => {
        console.log(doc.data());
        dataArr.push(doc.data());
      });
      setTodos([...dataArr]);
    });
  };

  const signOutFoo = async () => {
    await signOut(auth);
    setUser({
      set: !!getAuth().currentUser,
      name: "",
      pic: "",
      uid: "",
    });
  };

  useEffect(() => {
    console.log(user);
    console.log(todos);
  }, [user, todos]);

  return (
    <MainWrap>
      <Header user={user} signin={signIn} signout={signOutFoo} />
      <FormComp user={user} />
    </MainWrap>
  );
}

export default App;
