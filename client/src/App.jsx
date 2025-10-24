import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { logo } from "./assets";

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter bg-[#6469FF] font-medium text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#F9FAFE] min-h-[calc(100vh-73px)] ">
          <Outlet/>
      </main>
    </>
    
  );
};

export default App;
