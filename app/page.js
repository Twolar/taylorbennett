import React from "react";
import PageTitle from "@/app/(components)/PageTitle";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Image
        width={150}
        height={150}
        src="/Taylor-Bennett-BlackAndWhite.jpeg"
        alt="Profile picture of Taylor Bennett in black and white"
        className="rounded-md mb-5"
      />
      <PageTitle
        title="Taylor Bennett"
        subtitle="Passionate technologist with experience in enterprise-scale software engineering, consultancy-based web development, and IT support.

The aspects of working in the IT industry that I particularly enjoy are the continuous learning opportunities, the ability to collaborate with others, mentorship opportunities, and the chance to problem solve."
      />
    </div>
  );
};

export default Home;
