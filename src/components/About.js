import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

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
    // console.log("parent - contructor");
  }

  componentDidMount() {
    // console.log("parent- componentDidMount");
  }

  render() {
    // console.log("parent - render");

    return (
      <div>
        <h1>About Food House 🥘</h1>
        <p>Food House is an Food Ordering Application 💻</p>
        <ProfileFunctionalComponent name={"First Child"} />
      </div>
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
