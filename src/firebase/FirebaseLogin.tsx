import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "./auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginCallbacks } from "../types/LoginCallbacks";
import { db } from "./firestoreSetup";
import { useFirestore } from "./useFirestore";

function FirebaseLogin(callbacks : LoginCallbacks) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);

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
    if(callbacks.onLogOut) callbacks.onLogOut();
  }

  return (
    <div className="login">
      <div className="login__container">
        {/* <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button> */}
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <button className="logout" onClick={signOut}>
          Log Out
        </button>
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        {/* <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
      </div>
    </div>
  );
}
export default FirebaseLogin;