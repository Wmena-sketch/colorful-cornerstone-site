import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Newsletters = () => {
  const featuredNewsletters = [
    {
      id: 1,
      title: "AI Weekly Insights",
      description: "The latest breakthroughs, research, and real-world applications of AI technology delivered to your inbox every week.",
      frequency: "Weekly",
      day: "Mondays",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      category: "AI Research"
    },
    {
      id: 2,
      title: "Human Stories Spotlight",
      description: "Inspiring stories of how people are using AI to solve real problems and create meaningful change in their communities.",
      frequency: "Bi-weekly",
      day: "Thursdays",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      category: "Stories"
    },
    {
      id: 3,
      title: "Tool Hub Updates",
      description: "New AI tools, reviews, and practical guides to help you leverage artificial intelligence in your work and daily life.",
      frequency: "Weekly",
      day: "Fridays",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
      category: "Tools"
    }
  ];

  const categories = [
    "All Topics", "AI Research", "Stories", "Tools", "Community", "Education", "Industry News"
  ];

  const allNewsletters = [
    {
      title: "AI Ethics Digest",
      description: "Monthly deep dive into the ethical implications of AI development and deployment.",
      frequency: "Monthly",
      category: "AI Research",
      premium: false
    },
    {
      title: "Startup AI Stories",
      description: "How startups are leveraging AI to disrupt industries and create new markets.",
      frequency: "Bi-weekly",
      category: "Stories",
      premium: true
    },
    {
      title: "Developer's AI Toolkit",
      description: "Technical insights, code samples, and new AI development tools for engineers.",
      frequency: "Weekly",
      category: "Tools",
      premium: true
    },
    {
      title: "Community Highlights",
      description: "Best discussions, member spotlights, and community-driven AI projects.",
      frequency: "Weekly",
      category: "Community",
      premium: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="pt-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletters</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Sign up for our newsletters and get the best AI insights, human stories, and practical tools sent directly to your inbox.
            </p>
            <Button variant="outline" className="mb-8">
              Manage my newsletters
            </Button>
          </div>

          {/* Featured Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNewsletters.map((newsletter) => (
                <Card key={newsletter.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img 
                      src={newsletter.image} 
                      alt={newsletter.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-background text-foreground">
                      {newsletter.day}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold">{newsletter.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {newsletter.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Subscribe
                      </Button>
                      <Button variant="outline" size="sm">
                        View sample
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Browse by Topic */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Browse by Topic</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* All Newsletters */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">All Newsletters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allNewsletters.map((newsletter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                    {newsletter.premium && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        Premium
                      </Badge>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary">{newsletter.frequency}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-bold">{newsletter.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {newsletter.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        {newsletter.premium ? "Subscribe" : "Sign up here"}
                      </Button>
                      <Button variant="outline" size="sm">
                        View sample
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Newsletters;