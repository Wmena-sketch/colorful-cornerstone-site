import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Latest AI Breakthrough Stories
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Gateway to{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AI Innovation
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the latest AI news, access powerful tools, and develop cutting-edge skills 
          in the rapidly evolving world of artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Explore AI News
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            <Zap className="h-5 w-5 mr-2" />
            Browse Tools
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">AI News Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Skill Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;