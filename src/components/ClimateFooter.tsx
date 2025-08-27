import { Badge } from "@/components/ui/badge";

const ClimateFooter = () => {
  const categories = [
    { name: "AI Story", color: "bg-blue-medium" },
    { name: "News", color: "bg-orange-medium" },
    { name: "AI Explained", color: "bg-yellow-medium" },
    { name: "Research", color: "bg-green-medium" },
    { name: "Analysis", color: "bg-red-500" },
    { name: "Opinion", color: "bg-purple-medium" }
  ];

  const footerLinks = [
    {
      title: "AI SEARCH STORY",
      links: ["About", "Careers", "Press", "Help"]
    },
    {
      title: "Discover", 
      links: ["Technology", "Science", "Climate"]
    },
    {
      title: "Text Collection",
      links: ["Stories", "Analysis", "Research"]
    },
    {
      title: "Company",
      links: ["Terms", "Privacy", "Contact", "Support"]
    }
  ];

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Badge key={index} className={`${category.color} text-white hover:opacity-80`}>
              {category.name}
            </Badge>
          ))}
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-gray-500 text-sm">
            © 2024 AI Search Story. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClimateFooter;