/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm, onChange } = actions;

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", "28c90ebb-3762-4a17-aa0f-11732a110521");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success("Form Submitted Successfully");
      resetForm(); 
    } else {
      toast.error(responseData.message || "Failed to submit form");
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">

      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Let&#39;s Talk</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-t-palate text-center mb-12">
          Please complete the form below to discuss your project, and we&#39;ll respond within 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <form onSubmit={onSubmit} className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={onChange}
              required
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={onChange}
              required
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={onChange}
              required
              maxLength={15}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={onChange}
              required
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-o-blue text-white rounded-full border-2 border-theme-o-blue hover:bg-dark-theme-purple border-o-blue-800 transition duration-200 focus:outline-none"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Fade>

      <ToastContainer />

    </section>
  );
};
