import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Community</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Connect with like-minded individuals, share insights, and collaborate on AI projects and discussions.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Members", value: "12,543", icon: "👥" },
                { label: "Discussions", value: "2,847", icon: "💬" }, 
                { label: "Projects Shared", value: "1,234", icon: "🚀" },
                { label: "Events This Month", value: "18", icon: "📅" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg border p-6 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Community Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <h2 className="col-span-full text-2xl font-bold mb-4">Join the Conversation</h2>
              
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">💭</span> Recent Discussions
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Best AI tools for small businesses?", author: "Sarah M.", replies: 23, time: "2h ago" },
                    { title: "Ethical considerations in AI development", author: "Dr. Chen", replies: 45, time: "4h ago" },
                    { title: "Getting started with machine learning", author: "Mike R.", replies: 12, time: "6h ago" }
                  ].map((discussion, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer">{discussion.title}</h4>
                      <div className="text-sm text-gray-500 mt-1">
                        by {discussion.author} • {discussion.replies} replies • {discussion.time}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">View All Discussions →</button>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">🎯</span> Special Interest Groups
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "AI in Healthcare", members: 1247 },
                    { name: "Creative AI Artists", members: 892 },
                    { name: "AI Entrepreneurs", members: 756 },
                    { name: "AI Ethics & Policy", members: 634 },
                    { name: "Beginner's Corner", members: 2105 }
                  ].map((group, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">{group.name}</span>
                      <span className="text-sm text-gray-500">{group.members} members</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">Browse All Groups →</button>
              </div>
            </div>

            {/* Events Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "AI Networking Night", 
                    date: "Mar 15, 2024", 
                    type: "In-Person", 
                    attendees: 45 
                  },
                  { 
                    title: "Machine Learning Workshop", 
                    date: "Mar 20, 2024", 
                    type: "Virtual", 
                    attendees: 120 
                  },
                  { 
                    title: "AI Ethics Panel Discussion", 
                    date: "Mar 25, 2024", 
                    type: "Hybrid", 
                    attendees: 89 
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <div className="text-sm space-y-1">
                      <div>📅 {event.date}</div>
                      <div>📍 {event.type}</div>
                      <div>👥 {event.attendees} attending</div>
                    </div>
                    <button className="mt-3 bg-white text-blue-600 px-4 py-1 rounded text-sm font-medium hover:bg-gray-100">
                      Register
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Join CTA */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-gray-600 mb-6">Connect with AI enthusiasts, share knowledge, and grow together</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Community;