import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AINewsSection from "@/components/AINewsSection";
import AIToolsHub from "@/components/AIToolsHub";
import AISkillsHub from "@/components/AISkillsHub";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AINewsSection />
        <AIToolsHub />
        <AISkillsHub />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
