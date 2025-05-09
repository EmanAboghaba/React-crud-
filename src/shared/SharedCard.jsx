import React from "react";

export function SharedCard({ className, textColor, title, header, ...props }) {
  return (
    <div className={`${className} mt-5 p-5`}>
      <h1 className={`mb-3 ${textColor} text-center`}>{title}</h1>
      {header && <div className="alert alert-light">{header}</div>}
      {props.children}
    </div>
  );
}
