"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <form className="form-control w-full" onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Your name</span>
        </label>
        <input
          type="text"
          name="name"
          className="input input-bordered input-md w-full mb-3"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text">Your email</span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered input-md w-full mb-3"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text">Your message</span>
        </label>
        <textarea
          className="textarea textarea-bordered mb-3"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-primary w-full mt-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
