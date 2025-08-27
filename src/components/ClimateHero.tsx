import { Button } from "@/components/ui/button";

const ClimateHero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop" 
              alt="Forest landscape"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI for <br />
              <span className="text-blue-medium">Climate Action</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore diverse ideas and insights into AI and its potential to support the 
              climate movement. Join our climate journey to create a world where 
              technology drives climate action.
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
              <span>✅ 311K Stories</span>
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