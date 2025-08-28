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
    { name: "Skills Hub", path: "/skills-hub" },
    { name: "Tool Hub", path: "/tool-hub" },
    { name: "Newsletters", path: "/newsletters" },
    { name: "Community", path: "/community" }
  ];


  return (
    <header className="relative" style={{ backgroundColor: '#ffde59' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="absolute -bottom-12 left-4 z-10">
            <img src={logoImage} alt="AI.HUMAN.STORY" className="h-24 w-auto filter drop-shadow-sm" />
          </Link>
          <div className="flex items-center gap-4 ml-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-bold px-6 py-2 rounded-full transition-all duration-200"
            >
              MENU
            </Button>
          </div>
        </div>
        
        <nav className="flex flex-wrap gap-6 py-4 pl-2">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold transition-all duration-200 hover:text-gray-800 hover:scale-105 ${
                location.pathname === item.path 
                  ? "text-black underline underline-offset-4 decoration-2" 
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