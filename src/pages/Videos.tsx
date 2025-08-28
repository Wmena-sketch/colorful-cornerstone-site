import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";
import { Play, Clock, Users, Eye } from "lucide-react";

const Videos = () => {
  const featuredVideos = [
    {
      id: 1,
      title: "The Real Impact: AI in Healthcare",
      description: "Dr. Sarah Chen shares how AI is transforming patient care in rural communities, cutting through vendor promises to show real results.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop",
      duration: "12:34",
      views: "45K",
      category: "Healthcare",
      featured: true
    },
    {
      id: 2,
      title: "Beyond the Hype: Small Business AI Success",
      description: "Three entrepreneurs reveal how they actually use AI in their daily operations - no marketing fluff, just honest experiences.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
      duration: "18:42",
      views: "32K",
      category: "Business"
    },
    {
      id: 3,
      title: "AI Ethics in Practice: Real Conversations",
      description: "Roundtable discussion with ethicists, developers, and users about the human considerations often missing from AI discourse.",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
      duration: "25:17",
      views: "67K",
      category: "Ethics"
    }
  ];

  const videoCategories = [
    { name: "Human Stories", count: 24, color: "bg-blue-100 text-blue-800" },
    { name: "Real Applications", count: 31, color: "bg-green-100 text-green-800" },
    { name: "Behind the Scenes", count: 18, color: "bg-purple-100 text-purple-800" },
    { name: "Expert Insights", count: 15, color: "bg-orange-100 text-orange-800" },
    { name: "Community Voices", count: 22, color: "bg-pink-100 text-pink-800" }
  ];

  const recentVideos = [
    {
      id: 4,
      title: "Teacher Uses AI to Personalize Learning",
      description: "How one educator revolutionized her classroom with thoughtful AI integration.",
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=225&fit=crop",
      duration: "8:45",
      views: "12K",
      category: "Education"
    },
    {
      id: 5,
      title: "Farmer's AI Journey: From Skeptic to Advocate",
      description: "A third-generation farmer shares his unexpected AI transformation story.",
      thumbnail: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=225&fit=crop",
      duration: "15:23",
      views: "28K", 
      category: "Agriculture"
    },
    {
      id: 6,
      title: "Accessibility Tech: AI That Actually Helps",
      description: "Real users demonstrate AI tools that meaningfully improve accessibility.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=225&fit=crop",
      duration: "11:56",
      views: "19K",
      category: "Accessibility"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Video Stories: <br />
                <span className="text-blue-medium">Human-Centered AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Watch authentic conversations, real implementations, and honest insights 
                from people actually using AI to solve meaningful problems.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Video */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured This Week</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={featuredVideos[0].thumbnail} 
                    alt={featuredVideos[0].title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                      <Play className="h-6 w-6 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    Featured
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {featuredVideos[0].duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <Badge className="mb-3">{featuredVideos[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{featuredVideos[0].title}</h3>
                  <p className="text-gray-600 mb-4">{featuredVideos[0].description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredVideos[0].views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredVideos[0].duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {videoCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className={`${category.color} mb-3`}>
                      {category.count} videos
                    </Badge>
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Videos Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[...featuredVideos.slice(1), ...recentVideos].map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={video.thumbnail || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop"} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <Badge className="mb-2 text-xs">{video.category}</Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                    )}
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views} views
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Videos
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your AI Story</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have a real AI implementation or human story to share? We're always looking 
              for authentic voices in the AI conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-medium hover:bg-blue-600">
                Submit Your Story
              </Button>
              <Button variant="outline" size="lg">
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ClimateFooter />
    </div>
  );
};

export default Videos;