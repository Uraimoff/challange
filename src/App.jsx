import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import DailyRate from "./pages/DailyRate";
import AllRate from "./pages/AllRate";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="*" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/all" element={<AllRate />} />
      <Route path="/daily" element={<DailyRate />} />
      <Route path="/quest" element={<Question />} />
    </Routes>
  );
}

export default App;
