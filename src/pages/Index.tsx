import ClimateHeader from "@/components/ClimateHeader";
import ClimateHero from "@/components/ClimateHero";
import LatestArticles from "@/components/LatestArticles";
import NotAISection from "@/components/NotAISection";
import FeaturedSection from "@/components/FeaturedSection";
import NewsletterSection from "@/components/NewsletterSection";
import PracticalAITools from "@/components/PracticalAITools";
import ResponsibleAI from "@/components/ResponsibleAI";
import JoinMovement from "@/components/JoinMovement";
import ClimateFooter from "@/components/ClimateFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      <main>
        <ClimateHero />
        <LatestArticles />
        <NotAISection />
        <FeaturedSection />
        <NewsletterSection />
        <PracticalAITools />
        <ResponsibleAI />
        <JoinMovement />
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Index;
