"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Home = () => {
  const [virusAnimation, setVirusAnimation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVirusAnimation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
      title: "Multilingual Support",
      description: "Get healthcare assistance in your local language with support for 10+ Indian languages.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "ASHA Integration",
      description: "Direct connection with ASHA workers for serious cases requiring immediate medical attention.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Outbreak Alerts",
      description: "Real-time notifications about disease outbreaks and health emergencies in your area.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer, Uttar Pradesh",
      content:
        "HealthBot helped me understand my symptoms in Hindi and connected me with local ASHA worker when needed.",
      avatar: "/indian-farmer-portrait.jpg",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Rural Doctor, Rajasthan",
      content: "This AI assistant is bridging the healthcare gap in rural areas. Patients come more informed now.",
      avatar: "/indian-female-doctor-portrait.jpg",
    },
    {
      name: "Sunita Devi",
      role: "ASHA Worker, Bihar",
      content: "The alert system helps me prioritize cases and reach patients who need immediate attention.",
      avatar: "/indian-asha-worker-portrait.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-health-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Virus Animation */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-80 h-80">
                {/* Animated virus particles */}
                <div className="absolute inset-0 opacity-20" style={{ transform: `rotate(${virusAnimation}deg)` }}>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-red-400 rounded-full"
                      style={{
                        top: `${50 + 35 * Math.sin((i * Math.PI) / 4)}%`,
                        left: `${50 + 35 * Math.cos((i * Math.PI) / 4)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
                {/* Central virus */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500 rounded-full opacity-30 animate-pulse-slow" />

                {/* Chatbot icon on right */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-health-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                AI Healthcare Assistant for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-health-600">
                  Rural India
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Get instant healthcare guidance in your local language, connect with ASHA workers, and stay informed
                about health emergencies in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/chatbot" className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Start Chat Now
                </Link>
                <Link to="/about" className="btn-secondary text-lg px-8 py-3">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bridging Healthcare Gaps with AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides accessible healthcare information and connects rural communities with
              medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-health-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:shadow-lg transition-shadow duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from farmers, doctors, and healthcare workers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-health-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Healthcare Assistance?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who trust HealthBot for reliable healthcare information and emergency support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chatbot"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Start Chatting Now
            </Link>
            <Link
              to="/signup"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
