"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "prevention", name: "Prevention" },
    { id: "diseases", name: "Common Diseases" },
    { id: "nutrition", name: "Nutrition" },
    { id: "maternal", name: "Maternal Health" },
    { id: "child", name: "Child Health" },
  ]

  const articles = [
    {
      id: 1,
      title: "Preventing Dengue: Essential Steps for Rural Communities",
      excerpt:
        "Learn how to protect your family and community from dengue fever with simple, effective prevention methods.",
      category: "prevention",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300&text=Dengue+Prevention",
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Diabetes: Signs, Symptoms, and Management",
      excerpt: "A comprehensive guide to recognizing diabetes symptoms and managing the condition in rural settings.",
      category: "diseases",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300&text=Diabetes+Guide",
      featured: false,
    },
    {
      id: 3,
      title: "Nutrition During Pregnancy: A Guide for Expecting Mothers",
      excerpt:
        "Essential nutritional guidelines for pregnant women in rural areas with limited access to diverse foods.",
      category: "maternal",
      author: "Dr. Sunita Devi",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300&text=Pregnancy+Nutrition",
      featured: true,
    },
    {
      id: 4,
      title: "Common Cold vs. COVID-19: How to Tell the Difference",
      excerpt: "Learn to distinguish between common cold symptoms and COVID-19 to take appropriate action.",
      category: "diseases",
      author: "Dr. Amit Singh",
      date: "2024-01-08",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300&text=Cold+vs+COVID",
      featured: false,
    },
    {
      id: 5,
      title: "Childhood Vaccination Schedule: What Parents Need to Know",
      excerpt: "Complete guide to childhood vaccinations, schedules, and importance for rural communities.",
      category: "child",
      author: "Dr. Meera Patel",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300&text=Child+Vaccination",
      featured: false,
    },
    {
      id: 6,
      title: "Seasonal Eating: Nutritious Foods Available Year-Round",
      excerpt: "Discover locally available, seasonal foods that provide essential nutrients for optimal health.",
      category: "nutrition",
      author: "Nutritionist Kavya Reddy",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300&text=Seasonal+Foods",
      featured: false,
    },
  ]

  const filteredArticles =
    selectedCategory === "all" ? articles : articles.filter((article) => article.category === selectedCategory)

  const featuredArticles = articles.filter((article) => article.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-health-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Awareness Hub</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Stay informed with the latest health information, prevention tips, and wellness guidance tailored for rural
            communities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                      {categories.find((cat) => cat.id === article.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === "all" ? "All Articles" : categories.find((cat) => cat.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                      {categories.find((cat) => cat.id === article.category)?.name}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors duration-200">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-xs transition-colors duration-200"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
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
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </section>

        {/* Health Tips Section */}
        <section className="mt-16 bg-gradient-to-r from-health-50 to-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Health Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-health-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay Hydrated</h3>
              <p className="text-sm text-gray-600">Drink 8-10 glasses of clean water daily</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exercise Daily</h3>
              <p className="text-sm text-gray-600">30 minutes of physical activity keeps you healthy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Sunlight</h3>
              <p className="text-sm text-gray-600">15 minutes of morning sun for Vitamin D</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sleep Well</h3>
              <p className="text-sm text-gray-600">7-8 hours of quality sleep is essential</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our health newsletter and get the latest articles and health tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog
