import { createContext, useContext } from "react";
import User from "../types/User";

const UserContext = createContext<User | null>(null);

export default UserContext;