import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import FirebaseLogin from "../firebase/FirebaseLogin";
import { useFirestore } from "../firebase/useFirestore";
import { FirebaseUser } from "../types/User";

export default function Login() {
  const { user, setUser }  = useFirestore();
  const [show, setShow] = useState(false);
  // const [user, setUser] = useState<FirebaseUser | null>(null);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const UserImage = () => {
    return (
      <div
        className="link-primary"
        onClick={toggleShow}
        style={{ cursor: "pointer" }}
      >
        {user ? (
          <img
            src={user.photoURL ?? ""}
            className="rounded-circle"
            style={{ width: "50px" }}
          />
        ) : (
          "Login"
        )}
      </div>
    );
  };

  return (
    <>
      <UserImage />
      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        scroll={false}
        backDrop={true}
        className="size-sm bg-dark text-light"
        bg="dark"
      >
        <Offcanvas.Header closeButton className="fluid">
          <UserImage />
          <Offcanvas.Title className="me-auto p-2">{user?.displayName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FirebaseLogin onLogIn={(u) => console.log(u)} onLogOut={() => setUser(null)} />
          {/* <HashRouter> */}
          {/* <Link to={"Personal"}>Personal Info</Link> */}
          <br />
          {/* </HashRouter> */}
          {/* <br /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
