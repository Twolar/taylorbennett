import React from "react";
import PageTitle from "./(components)/PageTitle";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle
        title="Taylor Bennett"
        subtitle="Passionate technologist with experience in enterprise-scale software engineering, consultancy-based web development, and IT support.

The aspects of working in the IT industry that I particularly enjoy are the continuous learning opportunities, the ability to collaborate with others, mentorship opportunities, and the chance to problem solve."
      />
    </div>
  );
};

export default Home;
