import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/chat",
        { prompt: input },
        { headers: { "Content-Type": "application/json" } }
      );

      const botMessage = { text: res.data, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = { text: "Error retrieving response", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h4>ChatGPT Chatbot</h4>
        </div>

        <div
          className="card-body chat-box"
          style={{ height: "400px", overflow: "auto" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-3 rounded shadow ${
                  msg.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-light text-dark"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
