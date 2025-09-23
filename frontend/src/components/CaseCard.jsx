"use client"

import { useState } from "react"

const CaseCard = ({ case: caseData, onAction, getPriorityColor, getStatusColor }) => {
  const [showDetails, setShowDetails] = useState(false)

  const formatTime = (timestamp) => {
    const now = new Date()
    const diff = now - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}h ${minutes}m ago`
    }
    return `${minutes}m ago`
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{caseData.patientName}</h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(caseData.priority)}`}
            >
              {caseData.priority.toUpperCase()}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(caseData.status)}`}>
              {caseData.status.replace("-", " ").toUpperCase()}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span>Age: {caseData.age}</span>
            <span>{caseData.location}</span>
            <span>{formatTime(caseData.timestamp)}</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-2">Symptoms:</p>
        <div className="flex flex-wrap gap-2">
          {caseData.symptoms.map((symptom, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              {symptom}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => onAction(caseData.id, "call")}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call</span>
          </button>
          <button
            onClick={() => onAction(caseData.id, "whatsapp")}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
            </svg>
            <span>WhatsApp</span>
          </button>
          {caseData.status === "pending" && (
            <button
              onClick={() => onAction(caseData.id, "resolve")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
            >
              Mark Resolved
            </button>
          )}
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>

      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Contact Information:</p>
            <p className="text-sm text-gray-600">{caseData.phone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Chat History:</p>
            <div className="space-y-1">
              {caseData.chatHistory.map((message, index) => (
                <p key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  {message}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseCard
