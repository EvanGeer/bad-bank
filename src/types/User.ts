import Account from "./Account";

export interface FirebaseUser {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  }

interface User {
    id:string;
    name:string;
    profileImage:string;
    accounts:Account[]
}
export default User;
