import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Eye } from "lucide-react";

const AINewsSection = () => {
  const featuredNews = {
    title: "GPT-5 Breakthrough: Revolutionary Capabilities Unveiled",
    description: "OpenAI's latest model demonstrates unprecedented reasoning abilities and multimodal understanding that could transform how we interact with AI.",
    category: "Breaking News",
    readTime: "5 min read",
    views: "12.5K",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
  };

  const newsStories = [
    {
      title: "Meta's New AI Model Outperforms GPT-4 in Key Benchmarks",
      description: "Llama 3.5 shows remarkable improvements in code generation and mathematical reasoning.",
      category: "Research",
      readTime: "3 min read",
      views: "8.2K"
    },
    {
      title: "AI Safety Summit 2024: Global Leaders Reach Historic Agreement",
      description: "New international framework for AI governance established with participation from 50+ countries.",
      category: "Policy",
      readTime: "4 min read",
      views: "15.7K"
    },
    {
      title: "Autonomous AI Agents Start Managing Real Businesses",
      description: "First commercial deployment of fully autonomous AI business management systems shows promising results.",
      category: "Business",
      readTime: "6 min read",
      views: "22.1K"
    }
  ];

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <TrendingUp className="h-4 w-4 mr-2" />
            Latest AI News
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Breaking AI News
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest insights, breakthroughs, and analysis from the world of artificial intelligence
          </p>
        </div>

        {/* Featured News */}
        <Card className="mb-12 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-secondary h-64 md:h-auto flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-6xl mb-4">🤖</div>
                <Badge className="bg-white/20 text-white">Featured Story</Badge>
              </div>
            </div>
            <div className="p-8">
              <Badge className="mb-3 bg-primary/10 text-primary">{featuredNews.category}</Badge>
              <CardTitle className="text-2xl mb-3">{featuredNews.title}</CardTitle>
              <CardDescription className="text-base mb-4">{featuredNews.description}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredNews.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {featuredNews.views} views
                </div>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90">
                Read Full Story
              </Button>
            </div>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {newsStories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{story.category}</Badge>
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <CardDescription>{story.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {story.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {story.views} views
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All News Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AINewsSection;