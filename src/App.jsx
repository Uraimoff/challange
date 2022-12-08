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
  return (
    <>
      {token === null && email === null  ? (
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      ) : token !== null && email !== "qwerty1@com.uz" ? (
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
      )
      : email !== null && email === "qwerty1@com.uz" ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={"/admin"} />} />
            <Route path="*" element={<Navigate to={"/admin"} />} />
          <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      ) : <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="*" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
      }
    </>
  );
}

export default App;
