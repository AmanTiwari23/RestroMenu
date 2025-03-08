import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 5, pr:2, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact YumYum Food</Typography>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          a special request, feel free to reach out. You can contact us via
          phone, email, or WhatsApp, and our team will be happy to assist you.
          Visit us or order online to enjoy delicious, hygienic, and expertly
          prepared Indian food. Cook Menu – where taste meets trust!
          <br></br>
          </p>
          <p className=" flex mt-10 mx-auto items-center justify-center">
            Let’s stay connected for a flavorful experience! 🍽️
          </p>
        
      </Box>
      <Box
        sx={{
          m: 3,
          pr:2,
          width: "600px",
          ml: 5,
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table arial-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  +91 7389298651 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  help@YumYum@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://wa.me/+917389298651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-xl"
                  >
                    {" "}
                    <WhatsAppIcon sx={{ color: "green", pt: 1 }} />
                    +91 7389298651
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
