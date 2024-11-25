import React, { useState, FormEvent, useEffect, useRef } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const OpenAI: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [introMessage, setIntroMessage] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setChatHistory([...chatHistory, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("/api/gpt3", {
        messages: [...chatHistory, newMessage]
      });

      const botMessage: Message = {
        role: "assistant",
        content: response.data.choices[0].message.content
      };
      setChatHistory([...chatHistory, newMessage, botMessage]);
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

  useEffect(() => {
    const intro = "Hello! I am your AI assistant. How can I help you today?";
    let index = 0;

    const interval = setInterval(() => {
      if (index < intro.length) {
        setIntroMessage((prev) => prev + intro[index]);
        index++;
      } else {
        clearInterval(interval);
        setChatHistory((prev) => [...prev, { role: "assistant", content: intro }]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-none p-4 bg-white shadow-lg rounded-t-lg">
        <h1 className="text-2xl font-bold">AI Assistant</h1>
      </div>
      <div className="h-sm p-4 overflow-auto" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg message block max-w-xs ${
                message.role === "user"
                  ? "bg-blue-100 self-end"
                  : "bg-gray-100 self-start"
              }`}
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              <p>{message.content}</p>
            </div>
          ))}
          {introMessage && (
            <div className="p-2 rounded-lg bg-gray-100 self-start max-w-xs">
              <p>{introMessage}</p>
            </div>
          )}
          {loading && (
            <div className="self-start">
              <PulseLoader color="#000" size="5" />
            </div>
          )}
        </div>
      </div>
      <div className="flex-none p-4 my-4 bg-white rounded-b-lg">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-4 border border-2 rounded-lg"
            placeholder="Type your message..."
          />
          <button type="submit" className="p-4 px-10 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenAI;
