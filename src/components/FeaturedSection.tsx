import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  const featuredItems = [
    {
      title: "Understand journalism, newsroom, newsroom's power, and personal development",
      color: "bg-purple-600",
      icon: "📰"
    },
    {
      title: "High temperature laser cool androgynous street art & street complexion",
      color: "bg-green-600", 
      icon: "🎨"
    },
    {
      title: "Where the world learns about climate and technology",
      color: "bg-blue-600",
      icon: "🌍",
      isHighlight: true
    }
  ];

  return (
    <section className="py-16 bg-blue-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Featured</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card key={index} className={`${item.color} border-0 text-white`}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-6 leading-tight">
                  {item.title}
                </h3>
                {item.isHighlight && (
                  <div className="bg-white/10 rounded-full px-4 py-2 text-sm inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Where the world learns
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;