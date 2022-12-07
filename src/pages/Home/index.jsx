import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import "./index.scss";
const Home = () => {
  const token = localStorage.getItem('token')
  console.log(token, "bu token");
  const navigate = useNavigate()
  return (
    <div className="home-container ">
      <h3>Question end time !</h3>
      <Timer />
      <div className="home-title GlobaWrapper">
        <h1>some information</h1>
    {
      token ? 
      <div style={{display: "none"}} className="authlog">
          <button onClick={()=>navigate('/register')}>Register</button>
          or
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
: 
      <div className="authlog">
          <button onClick={()=>navigate('/register')}>Register</button>
          or
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
        }
      </div>
    </div>
  );
};

export default Home;
