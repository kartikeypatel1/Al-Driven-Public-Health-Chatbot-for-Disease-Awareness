import { Link } from "react-router-dom"

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Gupta",
      role: "Chief Medical Officer",
      image: "/dr.rajesh.avif?height=200&width=200&text=Dr.+Rajesh",
      bio: "15+ years in rural healthcare, specializing in telemedicine and community health programs.",
    },
    {
      name: "Priya Sharma",
      role: "AI Technology Lead",
      image: "/priyashrama.webp?height=200&width=200&text=Priya",
      bio: "Expert in natural language processing and multilingual AI systems for healthcare applications.",
    },
    {
      name: "Amit Kumar",
      role: "Community Outreach Director",
      image: "/amit kumar.jpg?height=200&width=200&text=Amit",
      bio: "Former ASHA coordinator with deep understanding of rural healthcare challenges and solutions.",
    },
  ]

  const impactStats = [
    { number: "50,000+", label: "Users Served" },
    { number: "15", label: "Languages Supported" },
    { number: "500+", label: "ASHA Workers Connected" },
    { number: "95%", label: "User Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-health-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthBot</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Bridging the healthcare gap in rural India through AI-powered assistance, connecting communities with
            medical professionals and providing accessible health information in local languages.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize healthcare access in rural India by providing AI-powered medical assistance that
                understands local languages, cultural contexts, and connects users with qualified healthcare
                professionals when needed.
              </p>
              <p className="text-gray-600">
                We believe that every person, regardless of their location or economic status, deserves access to
                reliable healthcare information and professional medical guidance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                A future where geographical barriers don't prevent access to quality healthcare. We envision rural
                communities empowered with knowledge, connected to healthcare professionals, and equipped to make
                informed health decisions.
              </p>
              <p className="text-gray-600">
                Through technology and human compassion, we're building a healthcare ecosystem that serves everyone,
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We're Solving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rural India faces significant healthcare challenges that we're addressing through innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limited Access</h3>
              <p className="text-gray-600">
                Many rural areas lack adequate healthcare facilities and qualified medical professionals, forcing people
                to travel long distances for basic medical consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Language Barriers</h3>
              <p className="text-gray-600">
                Medical information is often available only in English or Hindi, creating barriers for speakers of
                regional languages who need healthcare guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Constraints</h3>
              <p className="text-gray-600">
                High costs of medical consultation and travel expenses prevent many families from seeking timely
                healthcare, leading to delayed treatment and complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Story</h2>
            <p className="text-xl text-gray-600">Real change happening in rural communities across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-health-50 to-primary-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Rural Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  In remote villages of Rajasthan, our HealthBot has become the first point of contact for health
                  concerns. ASHA worker Sunita Devi shares how the AI assistant helps her prioritize cases and provide
                  better care to her community.
                </p>
                <p className="text-gray-600">
                  "HealthBot helps me understand which cases need immediate attention. The multilingual support means I
                  can help more families in their own language, and the outbreak alerts keep our village safe."
                </p>
                <div className="mt-6">
                  <span className="text-sm font-medium text-primary-600">- Sunita Devi, ASHA Worker, Rajasthan</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/indian-asha-worker-portrait.jpg?height=300&width=400&text=ASHA+Worker+Story"
                  alt="ASHA worker helping community"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals working to revolutionize rural healthcare access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-100 mb-8">
            Help us bring quality healthcare to every corner of rural India. Whether you're a healthcare professional,
            technology enthusiast, or community leader, there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chatbot"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Try HealthBot Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
