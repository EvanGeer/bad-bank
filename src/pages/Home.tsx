import { Card, Container } from "react-bootstrap";
import logoGradient from "../logoGradient.svg";
import "../App.css";
import { FireReactBankBrand } from "./FireReactBankBrand";

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
        <FireReactBankBrand/>
        <p>
          <small>
            fi<u>re</u>actBank is powered by React and Firebase Firestore
          </small>
        </p>
      </Card>
    </Container>
  );
}


