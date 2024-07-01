import React from "react";

const PageTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-primary">{title}</h1>
      <p className="mt-5 text-sm">{subtitle}</p>
      <div className="divider divider-accent"></div>
    </>
  );
};

export default PageTitle;
