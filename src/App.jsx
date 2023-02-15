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
import { app, auth } from "./firebaseConfig";

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
    } catch (err) {
      console.log(err);
    }
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
  }, [user]);

  return (
    <MainWrap>
      <Header user={user} signin={signIn} signout={signOutFoo} />
      <FormComp user={user} />
    </MainWrap>
  );
}

export default App;
