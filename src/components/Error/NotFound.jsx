import React from "react";
import title_design_2 from "../../meladora-image/design/title-design-2.png";

export const NotFound = () => {
  return (
    <div className="Not-Found container">
      <div className="error">
        <h1 className="error-text">404-Page Not Found</h1>
        <img src={title_design_2} alt="title-design" />
      </div>
    </div>
  );
};
