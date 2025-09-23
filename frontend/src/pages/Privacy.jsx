const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, age, location, phone number, and email address when you register or contact us.",
        "Health Information: Symptoms, medical queries, and health-related conversations with our chatbot.",
        "Usage Data: How you interact with our platform, including chat logs, feature usage, and response times.",
        "Location Data: General location information to connect you with nearby ASHA workers and provide relevant health alerts.",
        "Device Information: Basic device and browser information to ensure compatibility and security.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide personalized healthcare guidance and recommendations through our AI chatbot.",
        "Connect you with appropriate ASHA workers and healthcare professionals when needed.",
        "Send health alerts and outbreak notifications relevant to your area.",
        "Improve our services through analysis of usage patterns and user feedback.",
        "Ensure platform security and prevent misuse of our services.",
        "Comply with legal requirements and government health initiatives.",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "ASHA Workers: Relevant medical information is shared with ASHA workers when you're referred for professional care.",
        "Healthcare Professionals: In emergency situations, necessary health information may be shared with medical professionals.",
        "Government Agencies: Anonymized health data may be shared with health authorities for public health monitoring and policy development.",
        "Service Providers: Technical service providers who help us operate the platform under strict confidentiality agreements.",
        "We never sell your personal information to third parties or use it for commercial advertising.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
        "Access to personal information is restricted to authorized personnel only.",
        "Regular security audits and vulnerability assessments are conducted.",
        "Multi-factor authentication is required for all administrative access.",
        "Data backups are securely stored and regularly tested for integrity.",
        "We comply with government cybersecurity guidelines and healthcare data protection standards.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access: Request a copy of all personal information we have about you.",
        "Correction: Update or correct any inaccurate personal information.",
        "Deletion: Request deletion of your personal data (subject to legal requirements).",
        "Portability: Receive your data in a structured, machine-readable format.",
        "Consent Withdrawal: Withdraw consent for data processing at any time.",
        "Complaint: File a complaint with relevant data protection authorities.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "Chat conversations are retained for 2 years to provide continuity of care and improve our services.",
        "Personal registration information is kept as long as your account is active.",
        "Health alerts and outbreak notifications are retained for public health monitoring purposes.",
        "Anonymized usage data may be retained indefinitely for research and service improvement.",
        "You can request deletion of your data at any time, subject to legal and medical record requirements.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-health-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & Security</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect your personal health information
            and ensure secure healthcare services.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
          <p className="text-gray-600 mb-4">
            HealthBot is committed to protecting your privacy and ensuring the security of your personal health
            information. This Privacy Policy explains how we collect, use, protect, and share your information when you
            use our healthcare services.
          </p>
          <p className="text-gray-600">
            As a government-supported healthcare initiative, we adhere to the highest standards of data protection and
            medical privacy, following all applicable laws and regulations including the Digital Personal Data
            Protection Act, 2023.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-primary-50 rounded-lg p-8 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h3>
              <p className="text-gray-600">privacy@healthbot.gov.in</p>
              <p className="text-gray-600">+91-11-2345-6789</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Grievance Officer</h3>
              <p className="text-gray-600">grievance@healthbot.gov.in</p>
              <p className="text-gray-600">+91-11-2345-6790</p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: January 2024 | This policy may be updated periodically to reflect changes in our practices or
            legal requirements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
