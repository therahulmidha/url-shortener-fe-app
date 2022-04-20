import React from "react";
import { Features } from "./Features";
import { HomeFooter } from "./HomeFooter";
import { UrlShortener } from "./UrlShortener";
import "./Home.css"
export const Home: React.FC = (props) => {
  return (
    <div className="home">
      <UrlShortener />
      <Features />
      <HomeFooter />
    </div>
  );
};
