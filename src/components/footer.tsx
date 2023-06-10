import React from "react";
import "../css/style.css";
import "../css/utilities.css";

export const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="social">
        <a href="https://www.facebook.com/EnchantingTravels">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com/enchantingtrvls">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/user/EnchantingVideos">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/enchanting.travels/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <p>Copyright &copy; 2023 - Travelopia</p>
    </footer>
  );
};
