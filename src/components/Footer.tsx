import { Shield, LinkedinIcon, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Hire22</span>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed max-w-md">
                India's first anonymous executive job portal, connecting top talent with exceptional opportunities while maintaining complete privacy and professional discretion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#features" className="text-background/80 hover:text-background transition-colors">Features</a></li>
                <li><a href="#team" className="text-background/80 hover:text-background transition-colors">Our Team</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-background/60" />
                  <span className="text-background/80">hello@hire22.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-background/60" />
                  <span className="text-background/80">+91 98765 43210</span>
                </li>
                <li>
                  <span className="text-background/80">Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Hire22. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-background/60 text-sm">
              Made with ❤️ in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};