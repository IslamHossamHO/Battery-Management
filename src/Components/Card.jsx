import React from "react";
import "./Style/Card.css";

export default function Card({ children, width, height, className }) {
  const classes = ["CardBg", className].filter(Boolean).join(" ");
  const style = { width: width, height: height };
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
