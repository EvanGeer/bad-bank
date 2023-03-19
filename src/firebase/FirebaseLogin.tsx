import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "./auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginCallbacks } from "../types/LoginCallbacks";
import { db } from "./firestoreSetup";
import { useFirestore } from "./useFirestore";
import PrimaryButton from "../components/PrimayButton";
import { Col, Container } from "react-bootstrap";
import User from "../types/User";

function FirebaseLogin({
  newUser = false,
  // onLogIn,
  onLogOut = undefined,
}: {
  newUser?: boolean;
  // onLogIn: (use: User) => void | undefined;
  onLogOut: undefined | (() => void);
}) {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);
  const [isNewUser, setIsNewUser] = useState(newUser);

  //   const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      // navigate("/dashboard");
      console.log(`Logged in ${user.uid}`);
      // callbacks.onLogIn({
      //   name: user?.displayName ?? "",
      //   id: user?.uid ?? "",
      //   profileImage: user?.photoURL ?? "",
      //   accounts:
      // });
    }
  }, [user, loading]);

  function signOut() {
    auth.signOut();
    if (onLogOut) onLogOut();
  }

  const toggleRegister = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <Container className="container-fluid d-flex flex-wrap flex-column">
      {user ? (
        <div className="container d-flex flex-wrap">
          <PrimaryButton text="Log Out" action={signOut} />
        </div>
      ) : (
        <>
          {isNewUser ? (
            <input
              type="text"
              className="login__textBox rounded-3 p-1 m-1"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Name"
            />
          ) : null}
          <input
            type="text"
            className="login__textBox rounded-3 p-1 m-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox rounded-3 p-1 m-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {isNewUser ? (
            <PrimaryButton
              text="Register"
              action={() =>
                registerWithEmailAndPassword(userName, email, password)
              }
            />
          ) : (
            <PrimaryButton
              text="Login"
              action={() => logInWithEmailAndPassword(email, password)}
            />
          )}
          <PrimaryButton text="Login with Google" action={signInWithGoogle} />
          {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
          {isNewUser ? (
            <div className="ps-2">
              Already have an account?
              <div
                onClick={() => toggleRegister()}
                className="link-primary pe-1"
              >
                Login now.
              </div>{" "}
            </div>
          ) : (
            <div className="ps-2">
              Don't have an account?
              <div
                onClick={() => toggleRegister()}
                className="link-primary pe-1"
              >
                Register now.
              </div>{" "}
            </div>
          )}
        </>
      )}
    </Container>
  );
}
export default FirebaseLogin;
