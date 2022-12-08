import React from "react";
import Tables from "../../components/Table";
import Timer from "../../components/Timer";
import "./style.scss";

const Admin = () => {
  return (
    <>
      <div className="allRw">
        <div className="wrapper GlobaWrapper">
          <div className="paddingTop"></div>
          <div className="panel">
            <div className="timewr">
              <h2 className="time">
                <h3 style={{ color: "black" }}>Question end time !</h3>
                <Timer color={"black"} />
              </h2>
            </div>
            <div className="paddingTop">
              <Tables/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
