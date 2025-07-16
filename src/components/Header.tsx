import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Hire22.ai</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Hire22.ai
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#login" className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </a>
            <a href="#register" className="text-foreground hover:text-primary transition-colors font-medium">
              Register
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium rounded-full px-6">
              Employer Zone
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#why" className="text-foreground hover:text-primary transition-colors font-medium">
                Why Hire22.ai
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#login" className="text-foreground hover:text-primary transition-colors font-medium">
                Login
              </a>
              <a href="#register" className="text-foreground hover:text-primary transition-colors font-medium">
                Register
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="font-medium rounded-full px-6">
                  Employer Zone
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};