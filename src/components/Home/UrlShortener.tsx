import React from "react";

export const UrlShortener: React.FC = (props) => {
  return (
    <React.Fragment>
      <form>
        <label>Enter a long URL to shorten it</label>
        <input type="text" />
        <label>Customize your link</label>
        <select>
          <option>site1</option>
          <option>site2</option>
          <option>site3</option>
        </select>
        <input type="text" />
      </form>
    </React.Fragment>
  );
};
