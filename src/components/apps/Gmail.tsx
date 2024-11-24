import React, { useState } from "react";

const Gmail = () => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ from: "", subject: "", message: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSend = () => {
    let valid = true;
    const errors = { from: "", subject: "", message: "" };

    if (!validateEmail(from)) {
      errors.from = "Please enter a valid email address.";
      valid = false;
    }
    if (subject.trim() === "") {
      errors.subject = "Subject cannot be empty.";
      valid = false;
    }
    if (message.trim() === "") {
      errors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      // Handle send logic here
      console.log("Sending email:", {
        from,
        to: "morgadedeveloper@gmail.com",
        subject,
        message
      });
    }
  };

  const clearError = (field: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-none p-4 bg-white shadow-lg rounded-t-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Mensaje nuevo</h2>
          <div className="flex space-x-2">
            <button
              className="w-6 h-6 bg-gray-200 rounded-full"
              aria-label="Minimize"
            ></button>
            <button
              className="w-6 h-6 bg-gray-200 rounded-full"
              aria-label="Fullscreen"
            ></button>
            <button
              className="w-6 h-6 bg-gray-200 rounded-full"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">De</label>
          <input
            type="email"
            className={`mt-1 block w-full border ${errors.from ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              clearError("from");
            }}
          />
          {errors.from && <p className="text-red-500 text-sm">{errors.from}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Para</label>
          <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
            <div className="flex items-center space-x-2">
              <img
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/ogw/AF2bZyid-zUJ_b438NNV1lN8vPhQv4pV229j7y0TqJIsOI-aw5Q=s32-c-mo"
                alt="David Morgade"
              />
              <span className="text-sm">David Morgade</span>
              <span className="text-sm text-gray-500">
                &lt;morgadedeveloper@gmail.com&gt;
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Asunto</label>
          <input
            type="text"
            className={`mt-1 block w-full border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              clearError("subject");
            }}
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </div>
      </div>
      <div className="flex-grow p-4 bg-white shadow-lg rounded-b-lg max-h-[80vh]">
        <label className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea
          className={`mt-1 block w-full h-[8rem] border ${errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          value={message}
          resize="none"
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
          }}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
            onClick={handleSend}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
