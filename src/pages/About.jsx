import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": {
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
          }

        }}
      >
        <Typography variant="h4">Welcome to YumYum Food</Typography>
        <p>
          Welcome to our page, your go-to destination for delicious and hygienic
          homemade-style food! We take pride in serving authentic Indian
          cuisine, prepared with love and expertise by our highly skilled chefs.
          At Cook Menu, we believe that food is not just about taste—it’s about
          quality, hygiene, and a delightful experience. Our expert cooks use
          fresh ingredients, traditional recipes, and modern techniques to bring
          you meals that feel just like home. Whether you crave the rich flavors
          of North India or the aromatic spices of South India, we have
          something special for every food lover. We ensure that every dish is
          made with utmost cleanliness and care, maintaining the highest hygiene
          standards. From quick bites to wholesome meals, our menu is designed
          to satisfy your cravings while keeping your health in mind. Join us
          for a flavorful journey and experience the best of Indian cuisine,
          made with passion and perfection. Cook Menu – where taste meets trust!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
