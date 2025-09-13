import { Button } from "@/components/ui/button";

const ClimateHero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <img 
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/13cc38f3-c453-4300-91a3-f736bb63b0b5/2__New_LinkedIn_Banner_.png" 
              alt="AI.Human.Story - Finding the human signal in the AI noise"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Finding The Human Signal <span className="text-blue-medium">in The AI Noise</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Cut through the AI hype to discover authentic human stories, meaningful applications, 
              and genuine insights. We spotlight real people solving real problems with AI, 
              beyond the marketing noise and into the heart of human-centered innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-blue-medium hover:bg-blue-600">
                Join the Discussion
              </Button>
              <Button variant="outline">
                Join Our Story
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <span>✅ Written by Wafaa</span>
              <Button variant="ghost" size="sm" className="text-blue-medium">
                Join us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateHero;