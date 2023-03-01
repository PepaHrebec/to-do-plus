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
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { Display } from "./components/Display";

const MainWrap = styled.div`
  min-height: 100svh;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
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

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, `${user.uid}`, id));
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {}, [user, todos]);

  return (
    <MainWrap>
      <Header user={user} signin={signIn} signout={signOutFoo} />
      {user.set && <FormComp user={user} />}
      <Display todoArr={todos} deleteTodo={deleteTodo} />
    </MainWrap>
  );
}

export default App;
