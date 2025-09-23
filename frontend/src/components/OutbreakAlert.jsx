"use client"

import { useState, useEffect } from "react"

const OutbreakAlert = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Alert Header */}
        <div className="bg-red-600 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Health Alert</h3>
            </div>
            <button onClick={handleClose} className="text-red-200 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Alert Content */}
        <div className="px-6 py-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Dengue Outbreak Alert - Your Area</h4>
            <p className="text-gray-600 text-sm mb-4">
              Health authorities have detected increased dengue cases in your locality. Please take immediate
              precautions.
            </p>
          </div>

          {/* Prevention Tips */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-yellow-800 mb-2">Prevention Tips:</h5>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Remove stagnant water from containers</li>
              <li>• Use mosquito nets and repellents</li>
              <li>• Wear long-sleeved clothing</li>
              <li>• Seek medical help for fever symptoms</li>
            </ul>
          </div>

          {/* Symptoms to Watch */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-red-800 mb-2">Watch for Symptoms:</h5>
            <p className="text-sm text-red-700">
              High fever, severe headache, muscle pain, nausea, skin rash.
              <strong> Contact ASHA worker immediately if you experience these symptoms.</strong>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact ASHA Worker
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Got it
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 rounded-b-lg">
          <p className="text-xs text-gray-500 text-center">
            Alert issued by: Ministry of Health & Family Welfare, Govt. of India
          </p>
        </div>
      </div>
    </div>
  )
}

export default OutbreakAlert
