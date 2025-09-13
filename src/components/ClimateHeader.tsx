import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const ClimateHeader = () => {
  const location = useLocation();
  
  const mainNavigation = [
    { name: "HOME", path: "/" },
    { name: "STORIES", path: "/stories" },
    { name: "VIDEOS", path: "/videos" },
    { name: "NEWSLETTERS", path: "/newsletters" },
    { name: "SKILLS HUB", path: "/skills-hub" },
    { name: "TOOL HUB", path: "/tool-hub" },
    { name: "COMMUNITY", path: "/community" }
  ];

  return (
    <header className="relative bg-blue-light dark:bg-blue-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-6">
          <nav className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {mainNavigation.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location.pathname === item.path ? "default" : "outline"}
                size="sm"
                className={`font-bold rounded-full transition-all duration-200 hover:scale-105 ${
                  location.pathname === item.path 
                    ? "bg-black text-yellow-400 hover:bg-gray-800" 
                    : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-yellow-400"
                }`}
              >
                <Link to={item.path}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ClimateHeader;