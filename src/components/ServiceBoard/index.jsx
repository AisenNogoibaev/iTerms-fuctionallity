import React from "react";
import gdpr from "./images/GDPR.png";
import embed from "./images/Embed.png";
import hosted from "./images/Hosted.png";
import updated from "./images/Updated.png";
import payment from "./images/Payment.png";
import compatible from "./images/Compatible.png";
import html from "./images/HTML.png";
import downloads from "./images/Unlimiteddownloads.png";

const dataService = [
  {
    img: gdpr,
    title: "GDPR, CCPA, CalOPPA",
  },
  {
    img: embed,
    title: "Easy Embed on Your Site",
  },
  {
    img: hosted,
    title: "Securely Hosting Policies",
  },
  {
    img: updated,
    title: "Frequent Updates",
  },
  {
    img: payment,
    title: "Industry-leading pricing",
  },
  {
    img: compatible,
    title: "US/EU Law Compatible",
  },
  {
    img: html,
    title: "HTML/Word Formats",
  },
  {
    img: downloads,
    title: "Unlimited Downloads",
  },
];

// style={{ width: "100px", fontSize: "8px", textAlign: "center" }}
const Service = ({ el }) => {
  return (
    <div className="service-class" style={{ marginRight: "86px" }}>
      <img src={el.img} alt="" style={{ width: "48px" }} />
      <p>{el.title}</p>
    </div>
  );
};
export const ServiceBoard = () => {
  return (
    <div className="service-list">
      {dataService.map((el, id) => {
        return <Service el={el} key={id}></Service>;
      })}
    </div>
  );
};
