import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Brain, 
  Users, 
  Zap, 
  Lock, 
  Search,
  MessageSquare,
  TrendingUp,
  CheckCircle
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Complete Anonymity",
      description: "Your identity remains protected until you decide to reveal it. Browse opportunities with complete peace of mind.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced algorithms analyze your profile and preferences to surface the most relevant opportunities.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Executive Network",
      description: "Connect with C-suite executives, board members, and decision makers from India's top companies.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lock,
      title: "Secure Communications",
      description: "End-to-end encrypted messaging ensures all your conversations remain completely confidential.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Search,
      title: "Smart Job Discovery",
      description: "Discover hidden opportunities that aren't published on traditional job boards.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: MessageSquare,
      title: "Anonymous Interviews",
      description: "Participate in initial screening rounds without revealing your identity to maintain privacy.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Career Analytics",
      description: "Get insights into market trends, salary benchmarks, and career progression opportunities.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Receive real-time alerts when opportunities matching your criteria become available.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Executives Choose{" "}
              <span className="gradient-text">Hire22</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make Hire22 the preferred platform for senior professionals seeking their next career opportunity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="professional-shadow border-0 bg-card hover:shadow-professional-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
              <p className="text-muted-foreground">Join thousands of executives who trust Hire22 for their career transitions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-success mr-2" />
                  <span className="text-2xl font-bold text-primary">99.9%</span>
                </div>
                <p className="text-muted-foreground font-medium">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-success mr-2" />
                  <span className="text-2xl font-bold text-primary">256-bit</span>
                </div>
                <p className="text-muted-foreground font-medium">SSL Encryption</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-success mr-2" />
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <p className="text-muted-foreground font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};