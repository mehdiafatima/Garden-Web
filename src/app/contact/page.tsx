import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <p className="mb-4">
        We would love to hear from you! Please fill out the form below with any questions, comments, or suggestions.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
          <textarea
            id="message"
            rows={5} // Correctly assigned as a number
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-green-700 hover:bg-green-600 rounded-md text-lg font-semibold text-white transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
