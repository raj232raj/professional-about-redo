import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, Twitter } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Former VP at Google India with 15+ years in tech recruitment. Passionate about transforming how executives find opportunities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@hire22.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      bio: "AI/ML expert from Microsoft with a PhD in Computer Science. Leading our innovative matching algorithms.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "priya@hire22.com"
    },
    {
      name: "Arjun Patel",
      role: "Head of Business Development",
      bio: "Former McKinsey consultant specializing in talent acquisition. Building partnerships with India's leading companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "arjun@hire22.com"
    },
    {
      name: "Sneha Gupta",
      role: "VP of Operations",
      bio: "Operations excellence expert from Amazon. Ensuring seamless user experience and platform reliability.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sneha@hire22.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our{" "}
              <span className="gradient-text">Exceptional Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate professionals with decades of combined experience in technology, recruitment, and executive search, united by a vision to transform career transitions.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="professional-shadow border-0 bg-card hover:shadow-professional-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                          <LinkedinIcon className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="professional-shadow border-0 bg-gradient-to-r from-primary/5 to-primary-light/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Want to Join Our Mission?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're always looking for exceptional talent to join our team. If you're passionate about transforming the future of executive recruitment, we'd love to hear from you.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 font-semibold">
                  View Open Positions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};