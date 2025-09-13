import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LatestArticles = () => {
  const articles = [
    {
      title: "Do we have an AI companion crisis?",
      category: "AI Psychology",
      color: "bg-blue-light",
      accent: "bg-blue-medium",
      date: "Aug 06, 2025",
      description: "Why People believed the cute rabbits video, leaked chats, fresh AI stories from the Global Majority"
    },
    {
      title: "AI's Eyes, Ears, and Voice for an Unstandardized Human",
      category: "AI Technology", 
      color: "bg-green-light",
      accent: "bg-green-medium",
      date: "Aug 14, 2025",
      description: "👶🚜 Babies driving excavators, AI psychosis, Indigenous voices, grieving father, & pig butchering"
    },
    {
      title: "IBM's Technology Use in the Holocaust Holds a Warning for AI",
      category: "AI Ethics",
      color: "bg-purple-light", 
      accent: "bg-purple-medium",
      date: "Sep 03, 2025",
      description: "The Real Threat Is Silence, Not Robots - plus AI Ethics Course"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className={`${article.color} border-0 hover:shadow-lg transition-shadow cursor-pointer`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`w-16 h-16 ${article.accent} rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                </div>
                
                <Badge className={`${article.accent} text-white mb-3`}>
                  {article.category}
                </Badge>
                
                <h3 className="text-lg font-semibold mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>👤 Wafaa Albadry</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;