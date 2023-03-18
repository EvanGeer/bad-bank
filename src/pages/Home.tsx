import { Card, Container } from "react-bootstrap";
import logo from "../logo.svg";
import "../App.css";

export function Home() {
  return (
    <Container>
      <Card bg="dark" className="shadow d-flex text-center text-muted">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-primary align-self-center">
          Welcome to React Fire Bank
        </h1>
        React Back is powered by React and Firebase Firestore.
      </Card>
    </Container>
  );
}
