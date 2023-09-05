import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import Logo from "../assets/img/logo2.jpg";
import Love from "../assets/img/love.png";
const About2 = () => {
  return (
    <div>
      <h1>About Food House 🥘</h1>
      <p>Food House is an Food Ordering Application 💻</p>
      {/* <Outlet /> */}
      <ProfileFunctionalComponent name={"Mohit"} />
      {/* <Profile name={"MohitClass"} /> */}
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

//FD9C0D

  render() {
    return (
      <main className="flex justify-around pt-10">
        <div className="flex-col items-center">
          <div className="flex justify-center items-start">
            <img src={Logo} alt="" className="h-20 mx-4 my-2" />
            <h1 className="font-lobster text-8xl text-logo-color">Food House</h1>
          </div>
          <div className=" flex items-center justify-center pt-10">
            <h4 className="font-lobsterTwo text-logo-color-lite text-5xl  ">
              Food Made with
            </h4>
            <img
              src={Love}
              alt="love"
              className=" ml-2 w-[70px] "
            />
          </div>
        </div>
        <div>
          <img
            src="https://www.pngmart.com/files/22/McDonalds-PNG-Image.png"
            alt="about-page-pic"
          />
        </div>
      </main>
    );
  }
}

export default About;

/* Order of console

parent- constructor
parent- render
child - constructor
child - render
child - componentDidMount
parent - componentDidMount
*/

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
