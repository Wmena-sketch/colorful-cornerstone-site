import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Human Stories</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Real stories about how AI is impacting human lives, from personal experiences to societal changes.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            <div className="text-center py-24 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                We're curating powerful stories about AI's impact on humanity. Check back soon for inspiring content.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Stories;