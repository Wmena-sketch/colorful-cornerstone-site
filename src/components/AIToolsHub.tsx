import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Star, Users, ArrowRight, Zap, Brain, Image, MessageSquare } from "lucide-react";

const AIToolsHub = () => {
  const featuredTools = [
    {
      name: "ChatGPT-4o",
      description: "Advanced conversational AI with multimodal capabilities",
      category: "Conversational AI",
      rating: 4.8,
      users: "100M+",
      icon: MessageSquare,
      gradient: "from-primary to-accent"
    },
    {
      name: "DALL-E 3",
      description: "Generate stunning images from text descriptions",
      category: "Image Generation", 
      rating: 4.7,
      users: "50M+",
      icon: Image,
      gradient: "from-accent to-primary"
    },
    {
      name: "Claude 3",
      description: "Intelligent AI assistant for complex reasoning tasks",
      category: "AI Assistant",
      rating: 4.9,
      users: "25M+", 
      icon: Brain,
      gradient: "from-primary to-purple-500"
    }
  ];

  const toolCategories = [
    { name: "Writing & Content", count: 45, icon: "✍️" },
    { name: "Image & Video", count: 32, icon: "🎨" },
    { name: "Code & Development", count: 28, icon: "💻" },
    { name: "Data Analysis", count: 22, icon: "📊" },
    { name: "Marketing", count: 18, icon: "📈" },
    { name: "Productivity", count: 35, icon: "⚡" }
  ];

  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Wrench className="h-4 w-4 mr-2" />
            AI Tools Hub
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Powerful{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              AI Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access a curated collection of the best AI tools to supercharge your productivity and creativity
          </p>
        </div>

        {/* Featured Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.gradient} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tool.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{tool.category}</Badge>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-4">{tool.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {tool.users} users
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Try Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tool Categories */}
        <div className="bg-card rounded-2xl p-8 border shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {toolCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group">
                <div className="text-2xl">{category.icon}</div>
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">{category.name}</div>
                  <div className="text-sm text-muted-foreground">{category.count} tools</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-secondary hover:opacity-90">
            <Zap className="h-5 w-5 mr-2" />
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsHub;