"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const BlogArticle = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  // Sample articles data (in a real app, this would come from an API)
  const articles = [
    {
      id: 1,
      title: "Preventing Dengue: Essential Steps for Rural Communities",
      excerpt:
        "Learn how to protect your family and community from dengue fever with simple, effective prevention methods.",
      category: "prevention",
      author: "Dr. Priya Sharma",
      authorImage: "/priyashrama.webp",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/preventing.png",
      featured: true,
      content: `
        <h2>Understanding Dengue Fever</h2>
        <p>Dengue fever is a mosquito-borne viral infection that affects millions of people worldwide, particularly in tropical and subtropical regions. In rural communities, where healthcare access may be limited, prevention becomes even more crucial.</p>
        
        <h3>Key Prevention Strategies</h3>
        <ul>
          <li><strong>Eliminate Standing Water:</strong> Remove or cover containers that can collect water, such as buckets, flower pots, and old tires.</li>
          <li><strong>Use Mosquito Nets:</strong> Sleep under insecticide-treated bed nets, especially during peak mosquito activity hours (dawn and dusk).</li>
          <li><strong>Wear Protective Clothing:</strong> Long-sleeved shirts and pants can significantly reduce mosquito bites.</li>
          <li><strong>Apply Insect Repellent:</strong> Use DEET-based repellents on exposed skin areas.</li>
        </ul>
        
        <h3>Community Action</h3>
        <p>Organize community clean-up drives to remove potential mosquito breeding sites. Work with local health workers to identify and address problem areas in your village.</p>
        
        <h3>Early Warning Signs</h3>
        <p>Watch for symptoms like high fever, severe headache, pain behind the eyes, muscle and joint pain, nausea, vomiting, and skin rash. Seek medical attention immediately if these symptoms appear.</p>
      `,
    },
    {
      id: 2,
      title: "Understanding Diabetes: Signs, Symptoms, and Management",
      excerpt: "A comprehensive guide to recognizing diabetes symptoms and managing the condition in rural settings.",
      category: "diseases",
      author: "Dr. Rajesh Kumar",
      authorImage: "/dr.rajesh.avif",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/diabates.png",
      featured: false,
      content: `
        <h2>What is Diabetes?</h2>
        <p>Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). There are two main types: Type 1 and Type 2 diabetes, with Type 2 being more common in adults.</p>
        
        <h3>Common Symptoms</h3>
        <ul>
          <li>Frequent urination, especially at night</li>
          <li>Excessive thirst and hunger</li>
          <li>Unexplained weight loss</li>
          <li>Fatigue and weakness</li>
          <li>Blurred vision</li>
          <li>Slow-healing wounds</li>
        </ul>
        
        <h3>Risk Factors</h3>
        <p>Several factors increase your risk of developing diabetes:</p>
        <ul>
          <li>Family history of diabetes</li>
          <li>Being overweight or obese</li>
          <li>Physical inactivity</li>
          <li>Age (45 years or older)</li>
          <li>High blood pressure</li>
        </ul>
        
        <h3>Management in Rural Settings</h3>
        <p>Living with diabetes in rural areas requires careful planning:</p>
        <ul>
          <li><strong>Regular Monitoring:</strong> Check blood sugar levels as advised by your doctor</li>
          <li><strong>Healthy Diet:</strong> Focus on whole grains, vegetables, and lean proteins</li>
          <li><strong>Physical Activity:</strong> Engage in regular exercise like walking, farming activities</li>
          <li><strong>Medication Adherence:</strong> Take prescribed medications consistently</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Nutrition During Pregnancy: A Guide for Expecting Mothers",
      excerpt:
        "Essential nutritional guidelines for pregnant women in rural areas with limited access to diverse foods.",
      category: "maternal",
      author: "Dr. Sunita Devi",
      authorImage: "/indian-female-doctor-portrait.jpg",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/nutrition.png",
      featured: true,
      content: `
        <h2>Pregnancy Nutrition Essentials</h2>
        <p>Proper nutrition during pregnancy is crucial for both mother and baby's health. In rural settings, where access to diverse foods may be limited, it's important to make the most of locally available nutritious options.</p>
        
        <h3>Essential Nutrients</h3>
        <ul>
          <li><strong>Folic Acid:</strong> Found in leafy greens, helps prevent birth defects</li>
          <li><strong>Iron:</strong> Prevents anemia, found in spinach, lentils, and jaggery</li>
          <li><strong>Calcium:</strong> For baby's bone development, available in milk, sesame seeds</li>
          <li><strong>Protein:</strong> Essential for growth, found in dal, eggs, and dairy</li>
        </ul>
        
        <h3>Local Food Recommendations</h3>
        <p>Make the most of locally available foods:</p>
        <ul>
          <li><strong>Grains:</strong> Whole wheat, rice, millets (ragi, bajra)</li>
          <li><strong>Vegetables:</strong> Seasonal vegetables, especially leafy greens</li>
          <li><strong>Fruits:</strong> Seasonal fruits like mango, guava, banana</li>
          <li><strong>Dairy:</strong> Milk, curd, paneer for calcium and protein</li>
        </ul>
        
        <h3>Food Safety During Pregnancy</h3>
        <ul>
          <li>Wash all fruits and vegetables thoroughly</li>
          <li>Cook meat and eggs completely</li>
          <li>Avoid raw or undercooked foods</li>
          <li>Drink only clean, boiled water</li>
        </ul>
      `,
    },
    {
      id: 4,
      title: "Common Cold vs. COVID-19: How to Tell the Difference",
      excerpt: "Learn to distinguish between common cold symptoms and COVID-19 to take appropriate action.",
      category: "diseases",
      author: "Dr. Amit Singh",
      authorImage: "/amit kumar.jpg",
      date: "2024-01-08",
      readTime: "4 min read",
      image: "/commonCold.png",
      featured: false,
      content: `
        <h2>Distinguishing Between Common Cold and COVID-19</h2>
        <p>Both common cold and COVID-19 are respiratory illnesses, but they have different characteristics. Understanding these differences helps in taking appropriate action.</p>
        
        <h3>Common Cold Symptoms</h3>
        <ul>
          <li>Runny or stuffy nose</li>
          <li>Sneezing</li>
          <li>Sore throat</li>
          <li>Mild cough</li>
          <li>Gradual onset of symptoms</li>
        </ul>
        
        <h3>COVID-19 Symptoms</h3>
        <ul>
          <li>Fever (temperature above 100.4°F)</li>
          <li>Dry cough</li>
          <li>Shortness of breath</li>
          <li>Loss of taste or smell</li>
          <li>Body aches and fatigue</li>
          <li>Sudden onset of symptoms</li>
        </ul>
        
        <h3>When to Seek Medical Help</h3>
        <p>Contact healthcare providers if you experience:</p>
        <ul>
          <li>Difficulty breathing</li>
          <li>Persistent chest pain</li>
          <li>High fever that doesn't respond to medication</li>
          <li>Confusion or inability to stay awake</li>
        </ul>
        
        <h3>Prevention Measures</h3>
        <ul>
          <li>Wash hands frequently with soap and water</li>
          <li>Wear masks in crowded places</li>
          <li>Maintain social distance</li>
          <li>Get vaccinated when available</li>
        </ul>
      `,
    },
    {
      id: 5,
      title: "Childhood Vaccination Schedule: What Parents Need to Know",
      excerpt: "Complete guide to childhood vaccinations, schedules, and importance for rural communities.",
      category: "child",
      author: "Dr. Meera Patel",
      authorImage: "/meerapatel.webp",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/childhood.png",
      featured: false,
      content: `
        <h2>Importance of Childhood Vaccination</h2>
        <p>Vaccines are one of the most effective ways to protect children from serious diseases. They work by helping the body's immune system recognize and fight specific diseases.</p>
        
        <h3>Essential Vaccines for Children</h3>
        <ul>
          <li><strong>BCG:</strong> Protects against tuberculosis (given at birth)</li>
          <li><strong>DPT:</strong> Diphtheria, Pertussis, Tetanus (6, 10, 14 weeks)</li>
          <li><strong>Polio:</strong> Prevents polio (oral drops at 6, 10, 14 weeks)</li>
          <li><strong>Measles:</strong> Protects against measles (9 months and 15 months)</li>
          <li><strong>Hepatitis B:</strong> Prevents liver disease (at birth, 6, 10, 14 weeks)</li>
        </ul>
        
        <h3>Vaccination Schedule</h3>
        <p><strong>At Birth:</strong> BCG, Hepatitis B (first dose)</p>
        <p><strong>6 Weeks:</strong> DPT, Polio, Hepatitis B (second dose)</p>
        <p><strong>10 Weeks:</strong> DPT, Polio, Hepatitis B (third dose)</p>
        <p><strong>14 Weeks:</strong> DPT, Polio, Hepatitis B (fourth dose)</p>
        <p><strong>9 Months:</strong> Measles (first dose)</p>
        <p><strong>15 Months:</strong> Measles (second dose)</p>
        
        <h3>Where to Get Vaccinated</h3>
        <ul>
          <li>Government health centers</li>
          <li>Anganwadi centers</li>
          <li>ASHA worker visits</li>
          <li>Private clinics</li>
        </ul>
        
        <h3>Common Concerns</h3>
        <p><strong>Side Effects:</strong> Most vaccines cause mild side effects like fever or soreness at injection site. Serious side effects are very rare.</p>
        <p><strong>Cost:</strong> Government vaccines are free at public health centers.</p>
      `,
    },
    {
      id: 6,
      title: "Seasonal Eating: Nutritious Foods Available Year-Round",
      excerpt: "Discover locally available, seasonal foods that provide essential nutrients for optimal health.",
      category: "nutrition",
      author: "Nutritionist Kavya Reddy",
      authorImage: "/indian-asha-worker-portrait.jpg",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/seasonal food.png",
      featured: false,
      content: `
        <h2>Benefits of Seasonal Eating</h2>
        <p>Eating seasonal foods ensures you get the freshest, most nutritious produce while supporting local farmers and reducing environmental impact.</p>
        
        <h3>Summer Foods (March-June)</h3>
        <ul>
          <li><strong>Fruits:</strong> Mango, watermelon, muskmelon, litchi</li>
          <li><strong>Vegetables:</strong> Cucumber, bottle gourd, ridge gourd, okra</li>
          <li><strong>Benefits:</strong> High water content helps stay hydrated</li>
        </ul>
        
        <h3>Monsoon Foods (July-September)</h3>
        <ul>
          <li><strong>Fruits:</strong> Jamun, pears, plums</li>
          <li><strong>Vegetables:</strong> Bitter gourd, snake gourd, green leafy vegetables</li>
          <li><strong>Benefits:</strong> Boost immunity during rainy season</li>
        </ul>
        
        <h3>Winter Foods (October-February)</h3>
        <ul>
          <li><strong>Fruits:</strong> Oranges, guava, pomegranate, apples</li>
          <li><strong>Vegetables:</strong> Carrots, radish, spinach, mustard greens</li>
          <li><strong>Benefits:</strong> Rich in Vitamin C and iron</li>
        </ul>
        
        <h3>Year-Round Staples</h3>
        <ul>
          <li><strong>Grains:</strong> Rice, wheat, millets (ragi, bajra, jowar)</li>
          <li><strong>Pulses:</strong> Dal, chickpeas, kidney beans</li>
          <li><strong>Dairy:</strong> Milk, curd, paneer</li>
        </ul>
        
        <h3>Nutritional Tips</h3>
        <ul>
          <li>Include at least 5 servings of fruits and vegetables daily</li>
          <li>Choose whole grains over refined grains</li>
          <li>Include protein in every meal</li>
          <li>Stay hydrated with water and natural drinks</li>
        </ul>
      `,
    },
  ]

  useEffect(() => {
    // Simulate API call
    const foundArticle = articles.find(article => article.id === parseInt(id))
    setArticle(foundArticle)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-health-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              to="/blog"
              className="text-primary-100 hover:text-white transition-colors duration-200 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <span className="text-primary-100 text-sm ml-4">{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <div className="flex items-center space-x-4">
            <img 
              src={article.authorImage || "/placeholder-user.jpg"} 
              alt={article.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium">{article.author}</p>
              <p className="text-primary-100">{new Date(article.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start space-x-4">
            <img 
              src={article.authorImage || "/placeholder-user.jpg"} 
              alt={article.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h3>
              <p className="text-gray-600">
                {article.author.includes('Dr.') ? 'Medical Professional' : 'Health Expert'} specializing in {article.category} health topics. 
                Dedicated to providing accurate, accessible health information for rural communities.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors duration-200">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{relatedArticle.excerpt}</p>
                    <div className="flex items-center mt-3">
                      <img 
                        src={relatedArticle.authorImage || "/placeholder-user.jpg"} 
                        alt={relatedArticle.author}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm text-gray-500">{relatedArticle.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
