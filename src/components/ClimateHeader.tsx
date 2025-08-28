import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoImage from "@/assets/ai-human-story-logo.png";
import { Link, useLocation } from "react-router-dom";

const ClimateHeader = () => {
  const location = useLocation();
  
  const mainNavigation = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Videos", path: "/videos" },
    { name: "AI Explained", path: "/ai-explained" },
    { name: "Skills & Education Hub", path: "/skills-hub" },
    { name: "Tool Hub", path: "/tool-hub" },
    { name: "Community", path: "/community" }
  ];


  return (
    <header className="bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-retro font-bold text-4xl text-black tracking-wider">AI.Human.Story</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-black hover:bg-black hover:text-yellow-400 font-bold">
              MENU
            </Button>
          </div>
        </div>
        
        <nav className="flex flex-wrap gap-8 py-3">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold transition-colors hover:text-gray-700 ${
                location.pathname === item.path 
                  ? "text-black underline" 
                  : "text-black"
              }`}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default ClimateHeader;