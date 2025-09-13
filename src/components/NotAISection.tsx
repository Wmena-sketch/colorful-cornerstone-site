import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NotAISection = () => {
  const articles = [
    {
      title: "The Human Element Behind AI Ethics",
      category: "Human Stories",
      color: "bg-blue-light",
      accent: "bg-blue-medium"
    },
    {
      title: "Community Voices in AI Development",
      category: "Global Voices",
      color: "bg-orange-light",
      accent: "bg-orange-medium"
    },
    {
      title: "Indigenous Perspectives on Technology",
      category: "Cultural Impact",
      color: "bg-green-light",
      accent: "bg-green-medium"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Not AI</h2>
        
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
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>👤 Wafaa Albadry</span>
                  <span>•</span>
                  <span>Featured Story</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotAISection;