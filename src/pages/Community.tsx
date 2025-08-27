import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">AI Community</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Connect with like-minded individuals, share insights, and collaborate on AI projects and discussions.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            <div className="text-center py-24 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                We're building a vibrant community platform for AI enthusiasts. Join us soon for discussions and networking!
              </p>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Community;