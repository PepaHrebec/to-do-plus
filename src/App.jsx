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
import { auth, db } from "./firebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Display } from "./components/Display";

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
        dataArr.push({ ...doc.data(), id: doc.id });
      });
      dataArr.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
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
    setTodos([]);
  };

  // useEffect(() => {}, [user, todos]);

  return (
    <MainWrap>
      <Header user={user} signin={signIn} signout={signOutFoo} />
      <FormComp user={user} />
      <Display todoArr={todos} />
    </MainWrap>
  );
}

export default App;
