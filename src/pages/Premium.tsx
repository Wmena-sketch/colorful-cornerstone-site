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
            {/* Pricing Plans */}
            <div className="grid md:grid-cols-3 gap-6">
              <h2 className="col-span-full text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
              
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  description: "Perfect for getting started with AI",
                  features: [
                    "Access to basic AI tools directory",
                    "Community discussions", 
                    "Weekly newsletter",
                    "Basic AI learning resources",
                    "Limited tool comparisons"
                  ],
                  buttonText: "Get Started",
                  popular: false,
                  buttonStyle: "bg-gray-600 hover:bg-gray-700"
                },
                {
                  name: "Pro", 
                  price: "$19",
                  period: "per month",
                  description: "Unlock advanced features and exclusive content",
                  features: [
                    "Everything in Free",
                    "Advanced tool recommendations",
                    "Exclusive AI tutorials & courses",
                    "Priority community support",
                    "AI project templates",
                    "Weekly expert webinars",
                    "Early access to new features"
                  ],
                  buttonText: "Start Pro Trial",
                  popular: true,
                  buttonStyle: "bg-blue-600 hover:bg-blue-700"
                },
                {
                  name: "Enterprise",
                  price: "$99", 
                  period: "per month",
                  description: "For teams and organizations scaling AI",
                  features: [
                    "Everything in Pro",
                    "Team collaboration tools",
                    "Custom AI strategy consulting", 
                    "Dedicated account manager",
                    "Custom integrations",
                    "Advanced analytics & reporting",
                    "White-label solutions",
                    "Priority technical support"
                  ],
                  buttonText: "Contact Sales",
                  popular: false,
                  buttonStyle: "bg-purple-600 hover:bg-purple-700"
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg border-2 p-8 relative ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full text-white py-3 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Premium Features Showcase */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Premium Exclusive Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: "🎓",
                    title: "Expert Courses",
                    description: "Learn from industry leaders with exclusive video content"
                  },
                  {
                    icon: "🔧", 
                    title: "Advanced Tools",
                    description: "Access premium AI tools and exclusive partnerships"
                  },
                  {
                    icon: "👥",
                    title: "VIP Community", 
                    description: "Connect with verified experts and premium members"
                  },
                  {
                    icon: "📊",
                    title: "Analytics Dashboard",
                    description: "Track your AI learning progress and achievements"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Can I cancel my subscription anytime?",
                    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
                  },
                  {
                    question: "Is there a free trial for Pro plans?",
                    answer: "Yes! We offer a 14-day free trial for all Pro features. No credit card required to start."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
                  },
                  {
                    question: "Do you offer student discounts?",
                    answer: "Yes, students receive 50% off Pro plans with valid student ID verification."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded p-6">
                    <h3 className="font-semibold mb-2 text-blue-600">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <ClimateFooter />
    </div>
  );
};

export default Premium;