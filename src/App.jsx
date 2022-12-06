import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import DailyRate from "./pages/DailyRate";
import AllRate from "./pages/AllRate";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Layout from "./components/Layout";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token === null ? (
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/all" element={<AllRate />} />
            <Route path="/daily" element={<DailyRate />} />
            <Route path="/quest" element={<Question />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
