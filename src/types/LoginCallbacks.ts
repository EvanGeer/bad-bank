import { FirebaseUser } from "./User";

export interface LoginCallbacks {
  onLogIn: (user: FirebaseUser | null) => void;
  onLogOut?: () => void;
}
