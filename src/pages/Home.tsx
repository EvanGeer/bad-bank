import { Card, Container } from "react-bootstrap";
import logo from "../logo.svg";
import logoGradient from "../logoGradient.svg";
import fb from "../firebaseLogo.png";
import "../App.css";

export function Home() {
  return (
    <Container>
      <Card
        bg="dark"
        className="shadow d-flex flex-wrap text-center text-muted mb-4 pb-1 pt-3"
      >
        {/* <img src={logoGradient} className="App-logo opacity-75" alt="logo" /> */}
        <div className="d-flex align-self-center">
          <h2 className="text-muted">Welcome to:</h2>
          </div>
        <div className="d-flex align-self-center">
          <h1 className="text-primary align-self-center text-warning ps-2">
            f
            <img src={fb} style={{ height: "30px" }} />
            <u>re</u>
          </h1>
          <h1 className="text-primary align-self-center">
            <img src={logo} style={{ height: "45px", margin: "-12px" }} />
            ct
          </h1>
          <h1 className="text-light align-self-center">Bank</h1>
        </div>
        <p>
          <small>
            fi<u>re</u>actBank is powered by React and Firebase Firestore
          </small>
        </p>
      </Card>
    </Container>
  );
}
