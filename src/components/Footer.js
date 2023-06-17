import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return <div data-testid="footer">This site is developed by {user.name}</div>;
};

export default Footer;
