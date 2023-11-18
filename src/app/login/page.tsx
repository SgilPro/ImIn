"use client";

import { signInWithPopup, signOut } from "firebase/auth";
import { useContext } from "react";
import { auth, googleAuthProvider } from "@/lib/firebase";
import { UserContext } from "@/lib/userContext";
// import FirestoreCollection from "@/api/firestoreEvent";

const SignInButton = () => {
  const signInWithGoolge = async () => {
    googleAuthProvider.addScope("profile");
    googleAuthProvider.addScope("email");
    const result = await signInWithPopup(auth, googleAuthProvider);
  };

  return <div onClick={() => signInWithGoolge()}>Google</div>;
};

const SignOutButton = () => {
  return <div onClick={async () => signOut(auth)}>Google sign out</div>;
};

const UsernameForm = ({ name, photoURL }: { name: string; photoURL: string | null }) => {
  return (
    <div>
      {name}
      {photoURL && <img src={photoURL} alt="User Avatar" />}
    </div>
  );
};

const Login = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { user, userName } = userInfo;

  return (
    <div>
      {user && userName && <UsernameForm name={userName} photoURL={user.photoURL} />}
      {user ? <SignOutButton /> : <SignInButton />}
      {/* <FirestoreCollection /> */}
    </div>
  );
};

export default Login;
