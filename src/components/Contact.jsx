import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="flex flex-col items-center">
      <div className="title mb-16">
        <h1 className="text-3xl font-light mb-3">Contact</h1>
        <hr />
      </div>
      <div className="flex flex-col gap-6 items-center text-center max-w-sm leading-relaxed">
        <h1 className="text-2xl text-slate-300 font-bold">Hit me up!</h1>
        <p>I'm actively seeking new opportunities. Please feel free to contact me with any questions you may have or just to say hello! It will be a pleasure to get back to you as soon as possible.</p>
      <button className="text-accentColor border-accentColor border py-2 px-4 rounded hover:bg-accentOpac">
        <a href="mailto:youremail@example.com">Email</a>
      </button>
      </div>
    </div>
  );
};

export default Contact;
