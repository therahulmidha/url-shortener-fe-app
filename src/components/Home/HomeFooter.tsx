import React from "react";
import { Link } from "react-router-dom";
import "./HomeFooter.css";

export const HomeFooter: React.FC = (props) => {
  return (
    <div className="home-footer">
      <span>Copyright © URL Shortener LLC</span>
      <span>•</span>
      <Link to="/">Terms</Link>
      <span>•</span>
      <Link to="/">Privacy Policy</Link>
      <span>•</span>
      <Link to="/">Accessibility</Link>
    </div>
  );
};
