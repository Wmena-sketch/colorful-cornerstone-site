import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoImage from "@/assets/ai-human-story-logo.png";
import { Link, useLocation } from "react-router-dom";

const ClimateHeader = () => {
  const location = useLocation();
  
  const mainNavigation = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "AI Explained", path: "/ai-explained" },
    { name: "Skills & Education Hub", path: "/skills-hub" },
    { name: "Tool Hub", path: "/tool-hub" },
    { name: "Community", path: "/community" },
    { name: "Premium Membership", path: "/premium" }
  ];

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
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="AI.HUMAN.STORY" className="h-8 w-auto" />
            <span className="font-bold text-xl">AI.HUMAN.STORY</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
        
        <nav className="flex flex-wrap gap-6 py-3 border-b border-gray-100">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === item.path 
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-wrap gap-2 py-3">
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