import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);  //super(props) helps us use props inside the constructor, if we dont wanna use props in constructor then we should not pass that in super(props)
    // super needs to be mandatory called in constructor to use "this"
    //Create state

    this.state = {
      userInfo: {
        login: "xyzId",
        name: "name",
        location: "dummy location",
        avatar_url: "dummy url",
        bio: "bio",
      },
    };
    // console.log("child - Constructor" + this.props.name);
  }
  async componentDidMount() {
    //it will be called after first render only

    const data = await fetch("https://api.github.com/users/mohit502");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    // will run after every render
    // console.log("comonent did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("componenet will unmount");
  }

  render() {
    // console.log("child - render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name : {this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Location :{this.state.userInfo.location}</h2>
        <h2>Login : {this.state.userInfo.login}</h2>
        <h3>Bio : {this.state.userInfo.bio}</h3>
      </div>
    );
  }
}

export default Profile;

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
