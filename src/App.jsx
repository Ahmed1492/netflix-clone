import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Player from "./pages/Player";

export default function App() {
  return (
    <div className="">
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
