"use client"

import { useState, useRef, useEffect } from "react"
import ChatBubble from "../components/ChatBubble"
import OutbreakAlert from "../components/OutbreakAlert"

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm HealthBot, your AI healthcare assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showOutbreakAlert, setShowOutbreakAlert] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिंदी" },
    { value: "bengali", label: "বাংলা" },
    { value: "tamil", label: "தமிழ்" },
    { value: "telugu", label: "తెలుగు" },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simulate outbreak alert after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOutbreakAlert(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage)
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
        hasVoice: true,
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()

    if (input.includes("fever") || input.includes("temperature")) {
      return "I understand you're experiencing fever. This could be a sign of infection. Please monitor your temperature and consider these steps: 1) Rest and stay hydrated 2) Take paracetamol if needed 3) If fever persists above 102°F or you have difficulty breathing, please contact an ASHA worker immediately."
    }

    if (input.includes("cough") || input.includes("cold")) {
      return "Cough and cold are common symptoms. Try these remedies: 1) Drink warm water with honey and ginger 2) Steam inhalation 3) Rest well. If symptoms worsen or persist for more than a week, please consult a healthcare provider."
    }

    if (input.includes("stomach") || input.includes("pain")) {
      return "Stomach pain can have various causes. For mild pain: 1) Avoid spicy foods 2) Drink plenty of water 3) Try ginger tea. If you have severe pain, vomiting, or fever, this could be serious - please contact an ASHA worker immediately."
    }

    if (input.includes("emergency") || input.includes("urgent")) {
      return "This sounds like an emergency situation. I'm connecting you with the nearest ASHA worker immediately. In the meantime, if this is life-threatening, please call 108 (emergency services) right away."
    }

    return "Thank you for sharing your symptoms. Based on what you've told me, I recommend monitoring your condition closely. If symptoms worsen or you're concerned, please don't hesitate to contact your local ASHA worker or healthcare provider. Is there anything specific you'd like to know more about?"
  }

  const handleEmergencyHelp = () => {
    const emergencyMessage = {
      id: Date.now(),
      text: "🚨 EMERGENCY HELP REQUESTED",
      sender: "user",
      timestamp: new Date(),
      isEmergency: true,
    }

    setMessages((prev) => [...prev, emergencyMessage])

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Emergency alert sent to nearest ASHA worker and healthcare providers. Someone will contact you within 5 minutes. If this is life-threatening, please call 108 immediately.",
        sender: "bot",
        timestamp: new Date(),
        isEmergency: true,
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice recognition would be implemented here
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false)
        setInputMessage("I have been having fever for 2 days")
      }, 3000)
    }
  }

  const handlePlayVoice = (messageText) => {
    // Text-to-speech would be implemented here
    console.log("Playing voice for:", messageText)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-health-500 to-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">HealthBot Assistant</h1>
              <p className="text-sm text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              onClick={handleEmergencyHelp}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Emergency Help</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} onPlayVoice={handlePlayVoice} />
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`p-3 rounded-full transition-colors duration-200 ${
                isListening ? "bg-red-500 text-white animate-pulse" : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>

            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Describe your symptoms or ask a health question..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>

          <div className="mt-3 flex flex-wrap gap-2">
            {["I have fever", "Stomach pain", "Cough and cold", "Need medicine info"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputMessage(suggestion)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Outbreak Alert Popup */}
      {showOutbreakAlert && <OutbreakAlert onClose={() => setShowOutbreakAlert(false)} />}
    </div>
  )
}

export default Chatbot
