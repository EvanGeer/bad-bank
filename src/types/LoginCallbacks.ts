import User, { FirebaseUser } from "./User";

export interface LoginCallbacks {
  onLogIn: (user: User | null) => void;
  onLogOut?: () => void;
}
