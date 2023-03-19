import { useEffect, useState } from "react";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "./auth";
import { useAuthState } from "react-firebase-hooks/auth";
import PrimaryButton from "../components/PrimayButton";
import { Container } from "react-bootstrap";
import googleLogo from "../googleLogo.webp"

function FirebaseLogin({
  newUser = false,
  // onLogIn,
  onLogOut = undefined,
}: {
  newUser?: boolean;
  // onLogIn: (use: User) => void | undefined;
  onLogOut: undefined | (() => void);
}) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [isNewUser, setIsNewUser] = useState(newUser);

  const [isInValid, setIsInValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

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

  // validation
  useEffect(() => {
    const newValidationMessage =
      !userName && isNewUser
        ? "A valid name is required"
        : !email.match(".+@.+..+")
        ? "A valid email is required"
        : password.length < 8
        ? "Password must be at least 8 characters"
        : "";

    setValidationMessage(newValidationMessage);
    setIsInValid(newValidationMessage !== "");
  }, [userName, email, password, isNewUser]);

  const submitOnEnterKey = (e: any) => {
    // console.log(e);
    if (e.which !== 13) return;
    console.log("enter key");
    handleSubmit();
  };

  const handleSubmit = () => {
    if (isInValid) return;

    isNewUser
      ? registerWithEmailAndPassword(userName, email, password)
      : logInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");
    setUserName("");
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
            onKeyDown={submitOnEnterKey}
          />
          <small className="ms-2 text-warning">
            {isInValid ? validationMessage : ""}
          </small>
          <PrimaryButton
            text={isNewUser ? "Register" : "Login"}
            action={handleSubmit}
            disabled={isInValid}
          />
          <PrimaryButton
            text={<div className="d-flex align-items-center justify-content-between">
            <img src={googleLogo} style={{height:"30px"}} className=" float-start bg-light rounded-circle p-1"/>
             {`${isNewUser ? "Register" : "Login"} with Google`}
             <div></div>
             </div>}
            action={signInWithGoogle}
          />
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
