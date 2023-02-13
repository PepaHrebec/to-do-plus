import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { FormComp } from "./components/Form";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebaseConfig";

const MainWrap = styled.div`
  height: 100vh;
`;

function App() {
  const [user, setUser] = useState({
    set: false,
    name: "",
    pic: "",
    uid: "",
  });

  const signIn = async () => {
    try {
      var provider = new GoogleAuthProvider();
      const usr = await signInWithPopup(getAuth(app), provider);
      setUser({
        set: true,
        name: usr.user.displayName,
        pic: usr.user.photoURL,
        uid: usr.user.uid,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signOutFoo = async () => {
    await signOut(getAuth());
    setUser({
      set: false,
      name: "",
      pic: "",
      uid: "",
    });
  };

  // useEffect(() => {
  //   console.log(user);
  //   console.log(getAuth().currentUser);
  // }, [user]);

  return (
    <MainWrap>
      <Header user={user} signin={signIn} signout={signOutFoo} />
      <FormComp />
    </MainWrap>
  );
}

export default App;
