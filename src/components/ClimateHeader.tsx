import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ClimateHeader = () => {
  const categories = [
    { name: "AI Story", color: "bg-blue-medium text-white" },
    { name: "News", color: "bg-orange-medium text-white" },
    { name: "AI Explained", color: "bg-yellow-medium text-black" },
    { name: "Research", color: "bg-green-medium text-white" },
    { name: "Analysis", color: "bg-red-500 text-white" },
    { name: "Opinion", color: "bg-purple-medium text-white" },
    { name: "By Theme", color: "bg-blue-dark text-white" },
    { name: "See All", color: "bg-gray-600 text-white" }
  ];

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-medium rounded"></div>
            <span className="font-medium">AI.SEARCH.STORY</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pb-4">
          {categories.map((category, index) => (
            <Badge key={index} className={`${category.color} hover:opacity-80 cursor-pointer`}>
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ClimateHeader;