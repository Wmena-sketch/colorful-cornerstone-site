import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PracticalAITools = () => {
  const tools = [
    {
      name: "AI Ethics Guidelines",
      description: "Learn from Oxford's AI Guidelines for Students and comprehensive ethical frameworks",
      icon: "⚖️",
      color: "bg-blue-medium",
      textColor: "text-white"
    },
    {
      name: "Global AI Perspectives",
      description: "Discover AI stories from the Global Majority and diverse cultural viewpoints",
      icon: "🌍",
      color: "bg-orange-medium", 
      textColor: "text-white"
    },
    {
      name: "AI Psychology Tools",
      description: "Understand the human impact of AI companions and digital relationships",
      icon: "🧠",
      color: "bg-green-medium",
      textColor: "text-white"
    },
    {
      name: "Human-Centered AI",
      description: "Resources for developing AI that prioritizes human dignity and wellbeing",
      icon: "❤️",
      color: "bg-yellow-medium",
      textColor: "text-black"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Practical AI tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore ethical AI resources and tools that prioritize human values. 
            Find research, insights, and practical guidance for responsible AI development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className={`${tool.color} border-0 hover:shadow-lg transition-shadow`}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${tool.textColor}`}>
                  {tool.name}
                </h3>
                <p className={`mb-6 ${tool.textColor} opacity-90`}>
                  {tool.description}
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalAITools;