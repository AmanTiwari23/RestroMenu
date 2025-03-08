import React from "react"
import { MenuList } from "../assets/data/Data";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import MenuCard from "./Menucard";
const Menu = () => {
  return (
    <Layout>
      <Box className="flex flex-wrap gap-4 justify-center">
        {MenuList.map((menu, index) => (
          <MenuCard
            key={menu.name}
            name={menu.name}
            image={menu.image}
            price={menu.Price}
          />
        ))}
      </Box>
      </Layout>
  );
};

export default Menu;
