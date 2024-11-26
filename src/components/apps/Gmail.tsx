import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import axios from "axios";

const Gmail = () => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ from: "", subject: "", message: "" });
  const [emailSent, setEmailSent] = useState(false);
  const { language } = useLanguageContext();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSend = () => {
    let valid = true;
    const errors = { from: "", subject: "", message: "" };

    if (language === "en") {
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
    }

    if (language === "es") {
      if (!validateEmail(from)) {
        errors.from = "Por favor, introduce una dirección de correo electrónico válida.";
        valid = false;
      }
      if (subject.trim() === "") {
        errors.subject = "El asunto no puede estar vacío.";
        valid = false;
      }
      if (message.trim() === "") {
        errors.message = "El mensaje no puede estar vacío.";
        valid = false;
      }
    }

    setErrors(errors);

    if (valid) {
      setLoading(true);
      axios
        .post(
          "http://localhost:8010/portfolio/sendmail",
          {
            name: subject,
            html: message,
            from
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(() => {
          setLoading(false);
          setEmailSent(true);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
          alert("An error occurred. Please try again later.");
        })
        .finally(() => {
          setFrom("");
          setSubject("");
          setMessage("");
          setLoading(false);
        });
    }
  };

  const handleGoBack = () => {
    setEmailSent(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="flex flex-col gap-8 h-md justify-center items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {language === "en" ? "Sending message..." : "Enviando mensaje..."}
          </h2>
          <FadeLoader color="#808080" loading={loading} />
        </div>
      </div>
    );
  }

  if (emailSent) {
    return (
      <div className="h-screen bg-white ">
        <div className="flex flex-col bg-white justify-center  items-center">
          <h2 className="text-2xl font-semibold">
            {language === "en"
              ? "Message sent successfully!"
              : "¡Mensaje enviado con éxito!"}
          </h2>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
            onClick={handleGoBack}
          >
            {language === "en" ? "Go back" : "Volver"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full bg-white">
      <div className="flex flex-col justify-between p-4 bg-white shadow-lg rounded-t-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {language === "en" ? "New message" : "Mensaje nuevo"}
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {language === "en" ? "From" : "De"}
          </label>
          <input
            type="email"
            className={`mt-1 block w-full border ${
              errors.from ? "border-red-500" : "border-gray-300"
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
          <label className="block text-sm font-medium text-gray-700">
            {language === "en" ? "To" : "Para"}
          </label>
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
          <label className="block text-sm font-medium text-gray-700">
            {language === "en" ? "Subject" : "Asunto"}
          </label>
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
      <div className="flex-1 p-4 bg-white shadow-lg rounded-b-lg max-h-[80vh]">
        <label className="block text-sm font-medium text-gray-700">
          {language === "en" ? "Message" : "Mensaje"}
        </label>
        <textarea
          className={`mt-1 block w-full h-[70%] border ${
            errors.message ? "border-red-500" : "border-gray-300"
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
            {language === "en" ? "Send" : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
