// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (x) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(x);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateName = (name) => {
    const minLength = 5;
    const maxLength = 100;
    const nameRegex = /^[a-zA-Z]+$/;

    if (
      name.length < minLength ||
      name.length > maxLength ||
      !nameRegex.test(name)
    ) {
      return false;
    }
    return true;
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check name validation
    if (!validateName(name)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    // check email validity
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log("Valid email:", email);
    // Perform form submission logic here
    console.log("Form submitted:", name, email, message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full h-full py-5 px-5 rounded-xl">
      <div className="pb-10">
        <h1 className="font-bold text-3xl sm:text-xl">Contact us</h1>
        <p className="text-sm sm:text-xs text-gray-400">
          Sales akan menghubungi anda 1x24 jam setelah data kami terima.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 lg:text-base sm:text-sm font-medium"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
            className={
              !isValid
                ? "outline-red-500 w-full px-3 py-2 border border-red-500 rounded-md"
                : "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            }
          />
          {!isValid && (
            <p className="text-red-500 text-xs">
              Invalid name. Please enter a valid name containing 5 to 100
              alphabetic characters.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 lg:text-base sm:text-sm font-medium"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
            className={
              !isValid
                ? "outline-red-500 w-full px-3 py-2 border border-red-500 rounded-md"
                : "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            }
          />
          {!isValid && (
            <p className="text-red-500 text-xs ">Invalid email format</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 font-medium lg:text-base sm:text-sm"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center w-full">
          <button
            type="submit"
            className="px-4 py-2 w-full lg:text-lg sm:text-base font-semibold text-white bg-[#2dd4bf] rounded-md hover:bg-[#0d9488]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
