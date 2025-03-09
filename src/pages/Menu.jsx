import React from "react"
import { MenuList } from "../assets/data/Data";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import { useState } from "react";

const MenuCard = ({ name, image, price }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
  
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = image;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className="relative p-4 border rounded-lg shadow-lg bg-white max-w-sm w-full sm:max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 mb-2">Price : {price}</p>
        <div
          className={`relative cursor-pointer overflow-hidden rounded-lg ${
            isFullScreen
              ? "fixed inset-0 bg-black flex justify-center items-center"
              : ""
          }`}
          onClick={toggleFullScreen}
        >
          <img
            src={image}
            alt={name}
            className={`w-full h-64 sm:h-80 transition-transform duration-300 rounded-lg ${
              isFullScreen ? "w-screen h-screen object-contain" : ""
            }`}
          />
          {isFullScreen && (
            <button
              className="absolute top-4 right-4 text-white bg-black p-2 rounded-full"
              onClick={toggleFullScreen}
            >
              ✕
            </button>
          )}
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          ⬇ Download
        </button>
      </div>
    );
  };

const Menu = () => {
  return (
    <Layout>
      <Box className="flex flex-wrap gap-4 justify-center">
        {MenuList.map((menu, index) => (
          <MenuCard
          key={menu.name}
          image={menu.image}
          price={menu.Price}
          name={menu.name}
      
          />
        ))}
      </Box>
      </Layout>
  );
};

export default Menu;
