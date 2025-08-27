import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const ToolHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Tool Hub</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Discover, compare, and access the best AI tools for productivity, creativity, and innovation.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Tool Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Writing & Content", icon: "✍️", count: 25 },
                { name: "Design & Images", icon: "🎨", count: 18 },
                { name: "Coding & Development", icon: "💻", count: 22 },
                { name: "Video & Audio", icon: "🎬", count: 15 },
                { name: "Business & Productivity", icon: "📊", count: 31 },
                { name: "Data & Analytics", icon: "📈", count: 19 },
                { name: "Research & Learning", icon: "🔍", count: 14 },
                { name: "Customer Service", icon: "🤖", count: 12 }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg border p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} tools</p>
                </div>
              ))}
            </div>

            {/* Featured Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured AI Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "ChatGPT",
                    description: "Advanced conversational AI for writing, coding, and problem-solving",
                    category: "Writing & Content",
                    rating: 4.8,
                    users: "100M+",
                    pricing: "Free / $20/month",
                    featured: true
                  },
                  {
                    name: "Midjourney", 
                    description: "AI-powered image generation from text descriptions",
                    category: "Design & Images",
                    rating: 4.7,
                    users: "15M+", 
                    pricing: "$10-60/month",
                    featured: true
                  },
                  {
                    name: "GitHub Copilot",
                    description: "AI pair programmer that helps you write code faster",
                    category: "Coding & Development", 
                    rating: 4.6,
                    users: "5M+",
                    pricing: "$10/month",
                    featured: true
                  },
                  {
                    name: "Notion AI",
                    description: "Writing assistant integrated into your workspace",
                    category: "Business & Productivity",
                    rating: 4.5,
                    users: "30M+",
                    pricing: "$10/month",
                    featured: false
                  },
                  {
                    name: "Runway ML",
                    description: "Creative tools for video editing and generation",
                    category: "Video & Audio",
                    rating: 4.4,
                    users: "2M+", 
                    pricing: "$12-76/month",
                    featured: false
                  },
                  {
                    name: "Tableau AI",
                    description: "Data visualization with AI-powered insights", 
                    category: "Data & Analytics",
                    rating: 4.3,
                    users: "1M+",
                    pricing: "$70/month",
                    featured: false
                  }
                ].map((tool, index) => (
                  <div key={index} className={`bg-white rounded-lg border p-6 hover:shadow-md transition-shadow ${tool.featured ? 'ring-2 ring-blue-200' : ''}`}>
                    {tool.featured && <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-3">Featured</span>}
                    <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Category:</span>
                        <span>{tool.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Rating:</span>
                        <span>⭐ {tool.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Users:</span>
                        <span>{tool.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Pricing:</span>
                        <span className="font-medium">{tool.pricing}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                      Try Tool
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool Comparison */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Tool Comparison</h2>
              <p className="text-gray-600 mb-6">Compare AI tools side by side to find the perfect fit for your needs</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Start Comparison
              </button>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default ToolHub;