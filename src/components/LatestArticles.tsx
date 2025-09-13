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
      description: "Why People believed the cute rabbits video, leaked chats, fresh AI stories from the Global Majority",
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/74138452-e69c-4e46-a851-f7586eb1130c/Gemini_Generated_Image_v8iok2v8iok2v8io.jpeg"
    },
    {
      title: "AI's Eyes, Ears, and Voice for an Unstandardized Human",
      category: "AI Technology", 
      color: "bg-green-light",
      accent: "bg-green-medium",
      date: "Aug 14, 2025",
      description: "👶🚜 Babies driving excavators, AI psychosis, Indigenous voices, grieving father, & pig butchering",
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/b710d333-cd0d-42e5-8bf7-81e503c737ae/ChatGPT_Image_Aug_13__2025__10_55_40_PM.png"
    },
    {
      title: "IBM's Technology Use in the Holocaust Holds a Warning for AI",
      category: "AI Ethics",
      color: "bg-purple-light", 
      accent: "bg-purple-medium",
      date: "Sep 03, 2025",
      description: "The Real Threat Is Silence, Not Robots - plus AI Ethics Course",
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/4f26f6f3-5db1-4ae4-90cf-00cf32e5e92e/cropped_13cc38f3-c453-4300-91a3-f736bb63b0b5_1756823421417.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className={`${article.color} border-0 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden`}>
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${article.accent} text-white`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                
                <h3 className="text-lg font-semibold mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>👤 Wafaa Albadry</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
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