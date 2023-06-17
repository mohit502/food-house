import { createContext } from "react";
// we can create context multiple times
// context is like useState for whole application
const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummyemail.com",
  },
});

export default UserContext;
