import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return <div data-testid="footer">Developed By <a className="bg-blue-100 hover:bg-blue-500"  href="https://www.linkedin.com/in/mohit-bhatt-079202208/ " target="-blank">{user.name} </a></div>;
};

export default Footer;
