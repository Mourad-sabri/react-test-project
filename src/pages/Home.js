import React from "react";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="main flex justify-center align-center">
      <ReactTyped
        className="typed-text"
        loop
        typeSpeed={50}
        backSpeed={20}
        strings={["this is react demo project", "start by login to see posts"]}
      />
    </div>
  );
};

export default Home;
