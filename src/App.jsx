import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import  navbar  from "./utils/navbar";
import Home from "./pages/Home";
import Question from "./pages/Question";
import DailyRate from "./pages/DailyRate";
import AllRate from "./pages/AllRate";

function App() {
  return (
    // <div>Hello</div>
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="*" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/auth" element={<Registration />} /> 
      <Route path="/all" element={<AllRate />} /> 
      <Route path="/daily" element={<DailyRate />} /> 
      <Route path="/quest" element={<Question />} /> 
    </Routes>
  );
}

export default App;
