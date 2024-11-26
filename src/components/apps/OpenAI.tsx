import React, { useState, FormEvent, useEffect, useRef } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const OpenAI: React.FC = () => {
  const { language } = useLanguageContext();
  const [input, setInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [botResponse, setBotResponse] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const dark = useStore((state) => state.dark);

  const introMessageContent = useTypewriter(
    language === "en"
      ? "Hello, I am the David's IA assistant, if you need any info about David Morgade, please ask!"
      : "Hola!, Soy el asistente de David, funciono con inteligencía artificial, si necesitas saber cualquier cosa sobre David Morgade, ¡Pregunta!",
    10
  );

  useEffect(() => {
    if (introMessageContent) {
      const introMessage: Message = {
        role: "assistant",
        content: introMessageContent
      };
      setChatHistory([introMessage]);
    }
  }, [introMessageContent]);

  useEffect(() => {
    const botMessage: Message = {
      role: "assistant",
      content: botResponse
    };
    setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);
  }, [botResponse]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setChatHistory([...chatHistory, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8010/portfolio/assistant", {
        prompt: input
      });
      setBotResponse(response.data.response);
    } catch (error) {
      console.error("Error fetching GPT-3 response:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div
      className={`flex flex-col h-full ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div
        className={`flex-none p-4 shadow-lg rounded-t-lg ${dark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <h1 className="text-2xl font-bold">
          {language === "en"
            ? "Virtual Assistant David Morgade"
            : "Asistente Virtual David Morgade"}
        </h1>
      </div>
      <div className="h-full p-4 overflow-auto" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg message block  ${
                message.role === "user" ? "self-end max-w-xs" : " w-full"
              } ${
                message.role === "user"
                  ? dark
                    ? "bg-blue-700"
                    : "bg-blue-300"
                  : dark
                    ? "bg-gray-700"
                    : "bg-gray-300"
              }`}
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              <p>{message.content}</p>
            </div>
          ))}
          {loading && (
            <div className="self-start">
              <PulseLoader color={dark ? "#fff" : "#000"} size="5" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex-none p-4 rounded-b-lg ${dark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-grow p-4 border border-1 border-gray rounded-lg ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            placeholder={
              language === "en" ? "Type a message..." : "Escribe un mensaje..."
            }
          />
          <button
            type="submit"
            disabled={loading}
            className={`p-4 px-10 rounded-lg ${dark ? "bg-blue-500 text-white" : "bg-blue-500 text-white"} transition duration-150 ease-in-out transform hover:scale-105 active:scale-95`}
          >
            {language === "en" ? "Send" : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenAI;
