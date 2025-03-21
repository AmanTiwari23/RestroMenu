import { Box, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <Box
        className=" bg-[#232427] text-white"
        sx={{ textAlign: "center", p: 1 }}
      >
        <Box
          sx={{
            textAlign: "center",
            justifyContent: "center",
            "& svg": { fontSize: "30px" },
            "& svg:hover": {
              color: "green",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            "& a:hover": {
                color: "green",
                transform: "translateX(5px)",
                transition: "all 400ms",
              }
          }}
        >
          <a
            href="https://wa.me/+917389298651"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl"
            
          >
            <WhatsAppIcon
              sx={{ borderRadius: "50%", my: 3 }}
            />
            Tell us Your Menu😊
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy;YumYum Food
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
