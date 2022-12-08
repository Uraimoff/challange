import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import DailyRate from "./pages/DailyRate";
import AllRate from "./pages/AllRate";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";

function App() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const emaill = email.includes("qwerty1@com.uz") ? email.includes("qwerty1@com.uz") : false;
  console.log(emaill, "bu email");
  return (
    <>
      {token === null && emaill === null ? (
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      ) : token !== null && emaill === null ? (
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
      ) : token !== null && emaill && emaill !== null ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={"/admin"} />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/all" element={<AllRate />} />
            <Route path="/daily" element={<DailyRate />} />
            <Route path="/quest" element={<Question />} /> */}
          </Routes>
        </Layout>
      ) : null}
    </>
  );
}

export default App;
