import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const SkillsHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Skills & Education Hub</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Develop future-ready skills with AI-powered learning resources, courses, and career guidance.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Skills Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <h2 className="col-span-full text-2xl font-bold mb-4">Skill Categories</h2>
              {[
                {
                  title: "Technical Skills",
                  description: "Programming, data science, and AI development",
                  skills: ["Python Programming", "Data Analysis", "Machine Learning", "AI Ethics"],
                  icon: "💻",
                  color: "bg-blue-50 border-blue-200"
                },
                {
                  title: "Business Skills", 
                  description: "AI strategy, project management, and leadership",
                  skills: ["AI Strategy", "Digital Transformation", "Project Management", "Team Leadership"],
                  icon: "📊",
                  color: "bg-green-50 border-green-200"
                },
                {
                  title: "Creative Skills",
                  description: "AI-assisted design, content creation, and innovation", 
                  skills: ["AI Design Tools", "Content Creation", "Creative Problem Solving", "Innovation Methods"],
                  icon: "🎨",
                  color: "bg-purple-50 border-purple-200"
                }
              ].map((category, index) => (
                <div key={index} className={`rounded-lg border-2 p-6 ${category.color}`}>
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Courses */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI for Business Leaders",
                    instructor: "Dr. Sarah Chen",
                    duration: "6 weeks",
                    level: "Intermediate",
                    rating: 4.8,
                    students: 1200,
                    price: "$199"
                  },
                  {
                    title: "Python for AI Development", 
                    instructor: "Prof. Michael Rodriguez",
                    duration: "8 weeks",
                    level: "Beginner",
                    rating: 4.9,
                    students: 2100,
                    price: "$149"
                  },
                  {
                    title: "AI Ethics & Responsible Development",
                    instructor: "Dr. Aisha Patel",
                    duration: "4 weeks", 
                    level: "All Levels",
                    rating: 4.7,
                    students: 890,
                    price: "$99"
                  },
                  {
                    title: "Creative AI Tools Masterclass",
                    instructor: "Lisa Thompson",
                    duration: "5 weeks",
                    level: "Intermediate", 
                    rating: 4.6,
                    students: 650,
                    price: "$179"
                  }
                ].map((course, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <span className="text-blue-600 font-bold">{course.price}</span>
                    </div>
                    <p className="text-gray-600 mb-2">by {course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{course.duration}</span>
                      <span>{course.level}</span>
                      <span>⭐ {course.rating} ({course.students} students)</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Assessment */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Assess Your AI Skills</h2>
              <p className="mb-6">Take our comprehensive assessment to discover your AI skill level and get personalized learning recommendations</p>
              <button className="bg-white text-green-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default SkillsHub;