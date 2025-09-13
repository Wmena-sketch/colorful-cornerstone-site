import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  const featuredItems = [
    {
      title: "Understanding AI's impact on journalism and personal development",
      color: "bg-purple-600",
      icon: "📰",
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=400,height=200,fit=scale-down,onerror=redirect/uploads/asset/file/dbf56936-5abe-4710-9440-e885955d4922/Gemini_Generated_Image_19qrg119qrg119qr.png"
    },
    {
      title: "Exploring AI companion crisis and human relationships",
      color: "bg-green-600", 
      icon: "🤖",
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=400,height=200,fit=scale-down,onerror=redirect/uploads/asset/file/74138452-e69c-4e46-a851-f7586eb1130c/Gemini_Generated_Image_v8iok2v8iok2v8io.jpeg"
    },
    {
      title: "Finding the human signal in the AI noise",
      color: "bg-blue-600",
      icon: "🌍",
      isHighlight: true,
      image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=400,height=200,fit=scale-down,onerror=redirect/uploads/asset/file/b710d333-cd0d-42e5-8bf7-81e503c737ae/ChatGPT_Image_Aug_13__2025__10_55_40_PM.png"
    }
  ];

  return (
    <section className="py-16 bg-blue-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Featured</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card key={index} className={`${item.color} border-0 text-white overflow-hidden hover:scale-105 transition-transform duration-300`}>
              <CardContent className="p-0 relative">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 relative">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;