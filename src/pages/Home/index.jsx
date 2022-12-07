import React from "react";
import Timer from "../../components/Timer";
import "./index.scss";
const Home = () => {
  return (
    <div className="home-container ">
      <h3>Question end time !</h3>
      <Timer />
      <div className="home-title GlobaWrapper">
        <h1>some information</h1>
      </div>
    </div>
  );
};

export default Home;
