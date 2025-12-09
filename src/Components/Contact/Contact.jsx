import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0eaf6579-3261-49fa-aa67-a4b34ae10c7a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult(
          Swal.fire({
            title: "Massage send successful !",
            icon: "success",
            draggable: true,
          })
        );
        event.target.reset(); // reset form
      } else {
        setResult("❌ Error sending message.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Network error. Try again.");
    }
  };
  return (
    <div id="contact" className=" w-full  md:w-2/3 mx-auto space-y-6 mt-12 mb-12 p-6 bg-gray-900 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-center text-gray-300 mb-6">
        Fill out the form below to connect with me. I'll get back to you soon to
        discuss your project or answer any questions.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input input-bordered w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="input input-bordered w-full bg-gray-800 text-white"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full bg-gray-800 text-white"
          rows={6}
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full py-3 text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      {result && (
        <p
          className={`text-center mt-4 font-medium ${
            result.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
};

export default Contact;
