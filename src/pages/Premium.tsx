import ClimateHeader from "@/components/ClimateHeader";
import ClimateFooter from "@/components/ClimateFooter";

const Premium = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Premium Membership</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Unlock exclusive content, advanced AI tools, and premium features with our membership plans.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            <div className="text-center py-24 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                We're developing premium features and exclusive content for our members. Stay tuned for special offers!
              </p>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Premium;