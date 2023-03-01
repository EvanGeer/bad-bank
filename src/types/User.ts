import Account from "./Account";

interface User {
    id:string;
    name:string;
    profileImage:string;
    accounts:Account[]
}
export default User;
