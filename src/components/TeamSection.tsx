import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Visionary entrepreneur leading Hire22 to redefine executive job search. Alex blends strategic insight with a passion for privacy-first technology, empowering professionals to connect with top opportunities securely.",
      image: "https://about-again.vercel.app/assets/pic2.png",
      linkedin: "https://www.linkedin.com/in/alexjohnson"
    },
    {
      name: "Sarah Chen",
      role: "Engineering Head",
      bio: "Sarah drives innovation at Hire22, architecting robust AI solutions and scalable platforms. Her expertise in cloud and full-stack development ensures seamless, secure experiences for all users.",
      image: "https://about-again.vercel.app/assets/pic2.png",
      linkedin: "https://www.linkedin.com/in/sarahchen"
    },
    {
      name: "Michael Rodriguez",
      role: "Products & Technology Head",
      bio: "Michael champions product excellence and technology leadership at Hire22. He specializes in building high-performance teams and delivering innovative solutions for modern recruitment challenges.",
      image: "https://about-again.vercel.app/assets/pic2.png",
      linkedin: "https://www.linkedin.com/in/michaelrodriguez"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate professionals driving innovation in AI-powered recruitment
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-muted-foreground mb-1">{member.role}</h4>
                    <h3 className="text-xl font-bold text-foreground mb-3">{member.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex justify-center pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};