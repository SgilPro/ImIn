"use client";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../lib/firebase";

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

const UsernameForm = () => {
  return <></>;
};

const Login = () => {
  const user = null;
  const username = null;

  return (
    <div>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Login;
