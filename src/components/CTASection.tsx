import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-primary-lighter">Career Journey?</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of executives who have discovered their dream roles through our anonymous platform. Your next opportunity is just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile App Downloads */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Get the Mobile App</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">iOS App</h4>
                  <p className="text-white/80 text-sm mb-4">Available on the App Store</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download for iOS
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Android App</h4>
                  <p className="text-white/80 text-sm mb-4">Available on Google Play</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download for Android
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};