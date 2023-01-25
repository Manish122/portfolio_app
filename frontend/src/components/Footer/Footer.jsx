import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Us</Typography>
        <Typography>
          Hey, We are a team of Full Stack Developer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Manish122/" target="black">
          <BsGithub />
        </a>
        
        {/* <a href="https://instagram.com/meabhisingh/" target="black">
          <BsInstagram />
        </a> */}
        <a href="www.linkedin.com/in/manish-walia-b78b68202" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
