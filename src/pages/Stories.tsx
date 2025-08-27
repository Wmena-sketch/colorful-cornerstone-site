import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Human Stories</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Real stories about how AI is impacting human lives, from personal experiences to societal changes.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Featured Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Doctor Saves Lives in Rural Areas",
                  excerpt: "How AI-powered diagnostic tools are bringing healthcare to remote communities worldwide.",
                  category: "Healthcare",
                  readTime: "5 min read",
                  image: "🏥"
                },
                {
                  title: "Teacher Uses AI to Personalize Learning",
                  excerpt: "A high school teacher transforms education with AI-powered personalized learning paths.",
                  category: "Education", 
                  readTime: "4 min read",
                  image: "📚"
                },
                {
                  title: "Farmer Increases Crop Yield with AI",
                  excerpt: "Smart farming techniques help small farmers optimize their harvest using AI insights.",
                  category: "Agriculture",
                  readTime: "6 min read", 
                  image: "🌾"
                },
                {
                  title: "AI Helps Elderly Stay Independent",
                  excerpt: "Smart home AI systems enable seniors to live independently while staying safe.",
                  category: "Elderly Care",
                  readTime: "5 min read",
                  image: "👴"
                },
                {
                  title: "Artist Collaborates with AI for New Art",
                  excerpt: "Digital artist explores the creative boundaries between human imagination and AI.",
                  category: "Arts & Culture",
                  readTime: "7 min read",
                  image: "🎨"
                },
                {
                  title: "AI Translator Connects Communities",
                  excerpt: "Real-time translation AI breaks down language barriers in multicultural neighborhoods.",
                  category: "Communication",
                  readTime: "4 min read",
                  image: "🌍"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-4xl mb-4">{story.image}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{story.category}</span>
                    <span className="text-sm text-gray-500">{story.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">Read Story →</button>
                </div>
              ))}
            </div>

            {/* Story Categories */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Explore Stories by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Healthcare", count: 23, icon: "🏥" },
                  { name: "Education", count: 18, icon: "📚" },
                  { name: "Business", count: 31, icon: "💼" },
                  { name: "Creative Arts", count: 15, icon: "🎨" },
                  { name: "Environment", count: 12, icon: "🌱" },
                  { name: "Social Impact", count: 27, icon: "🤝" },
                  { name: "Technology", count: 19, icon: "💻" },
                  { name: "Personal Life", count: 22, icon: "🏠" }
                ].map((category, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-sm transition-shadow cursor-pointer">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} stories</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Stories;