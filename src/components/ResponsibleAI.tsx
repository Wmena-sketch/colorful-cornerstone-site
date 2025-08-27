import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResponsibleAI = () => {
  const topics = [
    "Gaslighting Detection",
    "Disinformation Networks", 
    "AI Governance",
    "Safety & Security"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Learn Responsible AI</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Ready to learn and see building AI, and explore how to make sure AI remains a human benefit, 
            authentic and realistic AI for technological decision making, and the available resources, 
            answers and gils.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {topics.map((topic, index) => (
              <Button key={index} variant="outline" size="sm" className="text-left justify-start">
                {topic}
              </Button>
            ))}
          </div>
          
          <Card className="bg-green-light border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Start Learning</h3>
                  <p className="text-gray-700 mb-6">
                    Join our comprehensive program to understand AI ethics, 
                    safety protocols, and responsible development practices.
                  </p>
                  <Button className="bg-green-medium hover:bg-green-700">
                    Get Started
                  </Button>
                </div>
                <div className="text-6xl text-center">
                  🤖
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAI;