import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our free newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get weekly dose of news about climate technology, policy, science, 
          and analysis directly to your inbox. Curated by experts.
        </p>
        
        <div className="max-w-md mx-auto flex gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-blue-medium hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;