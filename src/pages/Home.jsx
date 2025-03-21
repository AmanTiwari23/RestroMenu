
import React from "react";
import Layout from "../components/Layout";
import "../index.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Animated Background */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b ">
        
        {/* Stars Overlay */}
        <div className="absolute  opacity-30 pointer-events-none"></div>

        {/* Content Box */}
        <div className="relative z-10 text-center p-6 bg-white rounded-lg ">
          <div className="flex items-center justify-center">
            <img
              className="h-40 w-auto rounded-md border-4 border-yellow-500 shadow-lg transform transition duration-500 hover:scale-110 animate-floating"
              src={logo}
              alt="logo"
            />
          </div>
          <h1 className="text-4xl font-bold mt-4 text-gray-800">
            YumYum Food Website
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            We offer all varieties of foods 😋
          </p>
          <Link to={"/menu"}>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Check our Menu
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;


