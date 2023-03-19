import { Container } from "react-bootstrap";
import FirebaseLogin from "../firebase/FirebaseLogin";
import User from "../types/User";


export function CreateAccount() {
    return (
        <Container className="p-5 m-5">

        <FirebaseLogin newUser={true} onLogOut={() => console.log("log-out")}/>
        </Container>
    )
}