import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate("/");
      } else {
        console.log("logged out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div className="">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route
          path="*"
          element={
            <div className="text-2xl my-[3rem] mx-[2rem]">Not Found page</div>
          }
        />
      </Routes>
    </div>
  );
}
