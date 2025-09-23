"use client"

import { useState, useEffect } from "react"
import CaseCard from "../components/CaseCard"
import NotificationPanel from "../components/NotificationPanel"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("alerts")
  const [cases, setCases] = useState([])
  const [notifications, setNotifications] = useState([])
  const [stats, setStats] = useState({
    totalCases: 0,
    urgentCases: 0,
    resolvedToday: 0,
    pendingFollowups: 0,
  })

  useEffect(() => {
    // Simulate loading dashboard data
    loadDashboardData()
  }, [])

  const loadDashboardData = () => {
    // Mock data for demonstration
    const mockCases = [
      {
        id: 1,
        patientName: "Rajesh Kumar",
        age: 45,
        location: "Village Rampur",
        symptoms: ["High fever", "Severe headache", "Body aches"],
        priority: "urgent",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        phone: "+91 9876543210",
        status: "pending",
        chatHistory: [
          "Patient reports fever of 103°F for 2 days",
          "Experiencing severe headache and body aches",
          "No recent travel history",
          "Lives in area with recent dengue cases",
        ],
      },
      {
        id: 2,
        patientName: "Sunita Devi",
        age: 32,
        location: "Village Bharatpur",
        symptoms: ["Stomach pain", "Vomiting", "Dehydration"],
        priority: "high",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        phone: "+91 9876543211",
        status: "in-progress",
        chatHistory: [
          "Severe stomach pain since morning",
          "Vomiting multiple times",
          "Unable to keep food down",
          "Signs of dehydration",
        ],
      },
      {
        id: 3,
        patientName: "Mohan Singh",
        age: 28,
        location: "Village Shivpur",
        symptoms: ["Cough", "Chest pain", "Difficulty breathing"],
        priority: "urgent",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        phone: "+91 9876543212",
        status: "pending",
        chatHistory: [
          "Persistent cough for 5 days",
          "Chest pain when breathing",
          "Shortness of breath",
          "No fever reported",
        ],
      },
      {
        id: 4,
        patientName: "Priya Sharma",
        age: 25,
        location: "Village Ramgarh",
        symptoms: ["Pregnancy complications", "Bleeding", "Pain"],
        priority: "critical",
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        phone: "+91 9876543213",
        status: "pending",
        chatHistory: ["7 months pregnant", "Experiencing unusual bleeding", "Severe abdominal pain", "First pregnancy"],
      },
    ]

    const mockNotifications = [
      {
        id: 1,
        type: "whatsapp",
        message: "New urgent case: Rajesh Kumar - High fever",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: "sent",
      },
      {
        id: 2,
        type: "sms",
        message: "Follow-up reminder: Sunita Devi case",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        status: "delivered",
      },
      {
        id: 3,
        type: "call",
        message: "Attempted call to Mohan Singh",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        status: "failed",
      },
    ]

    setCases(mockCases)
    setNotifications(mockNotifications)
    setStats({
      totalCases: mockCases.length,
      urgentCases: mockCases.filter((c) => c.priority === "urgent" || c.priority === "critical").length,
      resolvedToday: 3,
      pendingFollowups: 2,
    })
  }

  const handleCaseAction = (caseId, action) => {
    setCases((prevCases) =>
      prevCases.map((case_) =>
        case_.id === caseId
          ? {
              ...case_,
              status: action === "resolve" ? "resolved" : action === "followup" ? "follow-up" : "in-progress",
            }
          : case_,
      ),
    )

    // Add notification for the action
    const newNotification = {
      id: Date.now(),
      type: action === "call" ? "call" : "whatsapp",
      message: `${action} initiated for case #${caseId}`,
      timestamp: new Date(),
      status: "sent",
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "urgent":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "high":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-red-100 text-red-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "follow-up":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredCases = cases.filter((case_) => {
    if (activeTab === "alerts") return case_.priority === "urgent" || case_.priority === "critical"
    if (activeTab === "all") return true
    if (activeTab === "pending") return case_.status === "pending"
    if (activeTab === "resolved") return case_.status === "resolved"
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ASHA Worker Dashboard</h1>
              <p className="text-gray-600">Manage healthcare cases and patient communications</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Cases</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalCases}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Urgent Cases</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.urgentCases}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.resolvedToday}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Follow-ups</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingFollowups}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cases Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Patient Cases</h2>
                  <div className="flex space-x-1">
                    {["alerts", "all", "pending", "resolved"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                          activeTab === tab
                            ? "bg-primary-100 text-primary-700"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {filteredCases.map((case_) => (
                    <CaseCard
                      key={case_.id}
                      case={case_}
                      onAction={handleCaseAction}
                      getPriorityColor={getPriorityColor}
                      getStatusColor={getStatusColor}
                    />
                  ))}
                  {filteredCases.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <svg
                        className="w-12 h-12 mx-auto mb-4 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p>No cases found for this filter</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="lg:col-span-1">
            <NotificationPanel notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
