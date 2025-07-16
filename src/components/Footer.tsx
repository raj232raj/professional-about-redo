import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Let me help you ..
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-primary hover:opacity-90 font-medium px-8 py-3 rounded-full"
              asChild
            >
              <a href="#chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                💬 Chat with Us
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="font-medium px-8 py-3 rounded-full"
              asChild
            >
              <a href="#call">
                <Phone className="w-5 h-5 mr-2" />
                📞 Call Us
              </a>
            </Button>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're here to help you with your hiring journey. Reach out via chat or call for instant support!
          </p>
        </div>

        <div className="border-t border-border pt-8 mt-12">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Hire22. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};