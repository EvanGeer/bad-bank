import { Card, Container } from "react-bootstrap";
import FirebaseLogin from "../firebase/FirebaseLogin";
import User from "../types/User";
import { FireReactBankBrand } from "./FireReactBankBrand";

export function CreateAccount() {
  return (
    <Container className="">
      <Card bg="dark" className="shadow pb-2">
        <Card.Header className="bg-secondary bg-opacity-25 pb-0 mb-2"><FireReactBankBrand/> </Card.Header>
        <FirebaseLogin newUser={true} onLogOut={() => console.log("log-out")} />
      </Card>
    </Container>
  );
}
