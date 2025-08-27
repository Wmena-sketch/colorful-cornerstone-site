import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const AIExplained = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Explained</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Demystifying artificial intelligence through clear explanations, guides, and educational resources.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            <div className="text-center py-24 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Our comprehensive AI education library is being developed. Stay tuned for easy-to-understand AI concepts.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default AIExplained;