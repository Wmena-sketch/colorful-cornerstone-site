import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JoinMovement = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be part of a global community working towards a sustainable future. 
            Connect with like-minded individuals and organizations making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-medium rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Membership</h3>
              <p className="text-gray-600 mb-6">
                Get exclusive access to premium content, tools, and community features
              </p>
              <Button className="w-full bg-orange-medium hover:bg-orange-600">
                Join Premium
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Start Your Journey</h3>
              <p className="mb-6 opacity-90">
                Begin your climate action journey with our comprehensive resources and community support
              </p>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                Get Started Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;