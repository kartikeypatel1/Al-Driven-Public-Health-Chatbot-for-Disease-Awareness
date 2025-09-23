"use client"

import { useState } from "react"

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is HealthBot and how does it work?",
          answer:
            "HealthBot is an AI-powered healthcare assistant designed specifically for rural communities in India. It provides medical guidance in multiple local languages, connects users with ASHA workers for serious cases, and offers health information 24/7. The chatbot uses natural language processing to understand your symptoms and provide appropriate advice or connect you with healthcare professionals when needed.",
        },
        {
          question: "Is HealthBot free to use?",
          answer:
            "Yes, HealthBot is completely free to use. It's a government initiative supported by the Ministry of Health & Family Welfare to improve healthcare access in rural areas. There are no charges for using the chatbot, getting health advice, or connecting with ASHA workers.",
        },
        {
          question: "How accurate is the medical advice provided?",
          answer:
            "HealthBot provides general health guidance based on established medical knowledge and guidelines. However, it's not a replacement for professional medical diagnosis or treatment. For serious symptoms or emergencies, the bot will always recommend consulting with a healthcare professional or ASHA worker. The AI is regularly updated with the latest medical information and is supervised by qualified doctors.",
        },
      ],
    },
    {
      title: "Language & Accessibility",
      faqs: [
        {
          question: "Which languages does HealthBot support?",
          answer:
            "HealthBot currently supports 15+ Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, and several others. We're continuously adding more regional languages to serve diverse communities across India.",
        },
        {
          question: "Can I use HealthBot if I can't read or write?",
          answer:
            "Yes! HealthBot supports voice input and voice responses. You can speak your symptoms or questions in your local language, and the bot will respond with audio messages. This makes it accessible for users who may not be literate or comfortable with text-based communication.",
        },
        {
          question: "Does HealthBot work on basic phones?",
          answer:
            "HealthBot is optimized to work on various devices including smartphones and basic internet-enabled phones. We also have WhatsApp integration for users who prefer using WhatsApp. The interface is designed to work well even on slower internet connections common in rural areas.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      faqs: [
        {
          question: "Is my personal health information safe?",
          answer:
            "Absolutely. We take your privacy very seriously. All conversations are encrypted and stored securely. Your personal health information is never shared with third parties without your explicit consent. We follow strict government guidelines for data protection and medical privacy. You can delete your data at any time by contacting our support team.",
        },
        {
          question: "Who can see my chat history?",
          answer:
            "Your chat history is private and secure. Only you can access your conversation history. In emergency situations where you're connected to an ASHA worker or healthcare professional, relevant medical information may be shared to provide you with appropriate care, but this is done with your consent and for your safety.",
        },
        {
          question: "Do you store my location information?",
          answer:
            "We only use location information to connect you with nearby ASHA workers and to provide relevant health alerts for your area (like disease outbreaks). Location data is encrypted and used solely for healthcare purposes. You can choose to disable location sharing in your settings, though this may limit some features like emergency assistance.",
        },
      ],
    },
    {
      title: "ASHA Worker Integration",
      faqs: [
        {
          question: "How does HealthBot connect me with ASHA workers?",
          answer:
            "When HealthBot identifies that your symptoms require professional attention, it automatically alerts the nearest ASHA worker in your area. The ASHA worker receives a notification with relevant information about your case and can contact you directly via phone, WhatsApp, or visit you in person if needed.",
        },
        {
          question: "What if there's no ASHA worker in my area?",
          answer:
            "If no ASHA worker is available in your immediate area, HealthBot will connect you with the nearest healthcare facility or provide you with emergency contact numbers. We're continuously expanding our network of healthcare professionals to ensure everyone has access to medical assistance.",
        },
        {
          question: "Can ASHA workers see all my conversations?",
          answer:
            "ASHA workers only see relevant medical information when you're referred to them for a specific case. They don't have access to your entire chat history. Only the current symptoms and relevant medical details are shared to help them provide appropriate care.",
        },
      ],
    },
    {
      title: "Emergency & Urgent Care",
      faqs: [
        {
          question: "What should I do in a medical emergency?",
          answer:
            "For life-threatening emergencies, immediately call 108 (emergency services) or go to the nearest hospital. HealthBot has an 'Emergency Help' button that instantly connects you with emergency services and nearby ASHA workers. The bot can also guide you on immediate first aid steps while help is on the way.",
        },
        {
          question: "How quickly will someone respond to urgent cases?",
          answer:
            "For urgent cases, ASHA workers are notified immediately and typically respond within 15-30 minutes. For critical emergencies, multiple healthcare providers are alerted simultaneously. Response times may vary based on location and availability, but we prioritize urgent cases to ensure the fastest possible response.",
        },
        {
          question: "Can HealthBot help during disease outbreaks?",
          answer:
            "Yes, HealthBot provides real-time outbreak alerts for your area, including information about diseases like dengue, malaria, or COVID-19. It offers prevention tips, symptom monitoring, and connects you with healthcare providers if you show symptoms of outbreak-related diseases.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-health-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Find answers to common questions about HealthBot, our services, and how we're improving healthcare access in
            rural India.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                              openFAQ === globalIndex ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-health-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="/chatbot"
              className="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Ask HealthBot
            </a>
          </div>
        </div>

        {/* Quick Help */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat Support</h3>
            <p className="text-gray-600 text-sm mb-4">Get instant help through our AI chatbot</p>
            <a href="/chatbot" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Start Chat →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-4">Send us detailed questions via email</p>
            <a
              href="mailto:support@healthbot.gov.in"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Send Email →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Help</h3>
            <p className="text-gray-600 text-sm mb-4">For medical emergencies call immediately</p>
            <a href="tel:108" className="text-red-600 hover:text-red-700 font-medium text-sm">
              Call 108 →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
