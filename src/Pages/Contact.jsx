import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center">
      {/* Contact Heading */}
      <div className="text-center max-w-2xl pt-[80px]">
        <h1 className="text-3xl font-bold text-gray-900">Get In Touch</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Contact Form */}
      <form className="mt-8 w-full max-w-lg p-6 ">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full  bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75] bg-clip-bg text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
