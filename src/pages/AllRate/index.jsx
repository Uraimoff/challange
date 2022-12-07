import React from "react";
import Tables from "../../components/Table";
import Timer from "../../components/Timer";
import "./style.scss";

const AllRate = () => {
  return (
    <>
      <div className="allRw">
        <div className="wrapper GlobaWrapper">
          <div className="timewr">
            {/* <div>Challangegacha</div> */}
            <h2 className="time">
              <h3>Question end time !</h3>
              <Timer color={"white"} />
            </h2>
            {/* <div>vaqt qoldi</div> */}
          </div>
          <div className="table">
            <h3>All users score</h3>
            <Tables />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRate;
