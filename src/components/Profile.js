import { useState, useEffect } from "react";
const ProfileFunctionalComponent = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);

    return () => {
      clearInterval(timer)
      console.log("uesEffect return")
    }
  }, []);

  return (
    <div>
      <h1>Profile Component</h1>
      <h2> {props.name}</h2>
      <h2> {count}</h2>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        bttn
      </button>
    </div>
  );
};

export default ProfileFunctionalComponent;
