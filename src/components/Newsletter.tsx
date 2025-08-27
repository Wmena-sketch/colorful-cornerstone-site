import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, TrendingUp, Users, Zap } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Join 50K+ AI Enthusiasts
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of the AI Revolution
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly insights, breaking news, and exclusive access to the latest AI tools and resources
          </p>

          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/15"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-2">
              No spam, unsubscribe at any time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Weekly AI Insights</h3>
                <p className="text-sm text-white/80">Curated analysis of the most important AI developments</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tool Recommendations</h3>
                <p className="text-sm text-white/80">Discover new AI tools before everyone else</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Exclusive Community</h3>
                <p className="text-sm text-white/80">Join discussions with AI practitioners and experts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;