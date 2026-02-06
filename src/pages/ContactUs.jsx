import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate your email API here
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h1>

        {submitted && (
          <p className="text-green-500 mb-4">Your message has been sent! ✅</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={5}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-yellow-400 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
