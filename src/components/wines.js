import React from "react";
import "../style/wines.scss";

export default function wines(props) {
  return (
    <div className="wines">
      <div className={props.check ? "wines-new wines-year" : "wines-year"}>
        {props.year}
      </div>
      <div className={props.check ? "wines-new wines-about" : "wines-about"}>
        <div className="wines-about__name">{props.name}</div>
        <div className="wines-about__info">{props.info}</div>
      </div>
    </div>
  );
}
