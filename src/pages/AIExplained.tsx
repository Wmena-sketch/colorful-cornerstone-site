import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const AIExplained = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Explained</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Demystifying artificial intelligence through clear explanations, guides, and educational resources.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Learning Paths */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <h2 className="col-span-full text-2xl font-bold mb-4">Learning Paths</h2>
              {[
                {
                  title: "AI Fundamentals",
                  description: "Start your AI journey with basic concepts and terminology",
                  level: "Beginner",
                  lessons: 8,
                  duration: "2 hours",
                  color: "bg-green-100 text-green-600"
                },
                {
                  title: "Machine Learning Basics",
                  description: "Understand how machines learn from data",
                  level: "Intermediate", 
                  lessons: 12,
                  duration: "4 hours",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "Neural Networks Explained",
                  description: "Deep dive into how artificial brains work",
                  level: "Advanced",
                  lessons: 10,
                  duration: "5 hours", 
                  color: "bg-purple-100 text-purple-600"
                }
              ].map((path, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                  <div className={`inline-block px-2 py-1 rounded text-sm font-medium mb-3 ${path.color}`}>
                    {path.level}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{path.lessons} lessons</span>
                    <span>{path.duration}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    Start Learning
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Concepts */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Quick AI Concepts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    concept: "What is Artificial Intelligence?",
                    explanation: "AI is the simulation of human intelligence in machines programmed to think and learn."
                  },
                  {
                    concept: "Machine Learning vs Deep Learning",
                    explanation: "ML is AI that learns from data. Deep Learning uses neural networks with multiple layers."
                  },
                  {
                    concept: "Natural Language Processing (NLP)",
                    explanation: "Technology that helps computers understand, interpret and generate human language."
                  },
                  {
                    concept: "Computer Vision", 
                    explanation: "AI that enables machines to interpret and make decisions based on visual information."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 mb-2">{item.concept}</h3>
                    <p className="text-gray-600">{item.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Try AI Concepts Interactive</h2>
              <p className="mb-6">Experience AI concepts through interactive demos and visualizations</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Launch Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default AIExplained;