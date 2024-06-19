import React from "react";
import { AboutListData } from "../../data/AboutIconData";

export const AboutIcons = () => {
  return (
    <>
      {AboutListData.map((icon, i) => (
        <div className="icon" key={icon.id}>
          <img src={icon.img} alt="" />
          <span>{icon.title}</span>
        </div>
      ))}
    </>
  );
};
