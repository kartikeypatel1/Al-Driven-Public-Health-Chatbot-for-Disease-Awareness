"use client"

const ChatBubble = ({ message, onPlayVoice }) => {
  const isBot = message.sender === "bot"
  const isEmergency = message.isEmergency

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`flex items-start space-x-2 max-w-xs md:max-w-md lg:max-w-lg ${isBot ? "" : "flex-row-reverse space-x-reverse"}`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            isBot ? "bg-gradient-to-r from-health-500 to-primary-500" : isEmergency ? "bg-red-500" : "bg-gray-400"
          }`}
        >
          {isBot ? (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          ) : isEmergency ? (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`rounded-lg px-4 py-3 shadow-sm ${
            isBot
              ? isEmergency
                ? "bg-red-50 border border-red-200"
                : "bg-white border border-gray-200"
              : isEmergency
                ? "bg-red-600 text-white"
                : "bg-primary-600 text-white"
          }`}
        >
          <p className={`text-sm ${isBot && !isEmergency ? "text-gray-800" : ""}`}>{message.text}</p>

          <div
            className={`flex items-center justify-between mt-2 ${
              isBot && !isEmergency ? "text-gray-500" : isBot ? "text-red-600" : "text-primary-100"
            }`}
          >
            <span className="text-xs">{formatTime(message.timestamp)}</span>

            {/* Voice playback button for bot messages */}
            {isBot && message.hasVoice && (
              <button
                onClick={() => onPlayVoice(message.text)}
                className={`ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 ${
                  isEmergency ? "hover:bg-red-100" : ""
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0v-6a3 3 0 00-6 0v6z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
