import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Bell } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-primary">Us</span>
          </h2>
          <h3 className="text-3xl font-semibold mb-8 text-foreground">
            India's First Anonymous Executive Job Portal
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Top executives need privacy when exploring new opportunities. Traditional job boards 
              expose your career moves to current employers and competitors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We've built a secure platform where senior professionals can discover roles 
              anonymously, protecting their reputation while opening doors to better opportunities.
            </p>
            
            <div className="flex items-center space-x-3 mt-8">
              <Bell className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-primary font-medium">✓ Trusted by 15,000+ executives</span>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-professional backdrop-blur-sm border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-full h-48 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-6">
                    <img 
                      src="https://about-again.vercel.app/assets/pic.png" 
                      alt="Our Mission" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold text-white">Our Mission</h4>
                  <p className="text-muted-foreground">
                    Connecting talent with opportunity, privately and efficiently
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};