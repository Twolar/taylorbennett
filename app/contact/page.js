import React from "react";
import PageTitle from "../(components)/PageTitle";
import ContactForm from "../(components)/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle
        title="Contact"
        subtitle="Fill out the form below, and I'll be sure to get back to you."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
