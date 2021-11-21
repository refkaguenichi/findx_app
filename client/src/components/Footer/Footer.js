/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <span>
        <SocialIcon url="https://facebook.com/rebe.kah.524/" />
        <SocialIcon url="https://www.instagram.com/refka_guenichi/" />
        <SocialIcon url="https://twitter.com/" />
      </span>
      <span>
        &copy; {1900 + new Date().getYear()}
        <Link to="/" target="_blank">
          findX
        </Link>
        , made with love to facilitate your life
      </span>
    </footer>
  );
}
