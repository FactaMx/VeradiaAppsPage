import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Star, Zap, Heart, Download, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cosmic.jpg";

const Index = () => {
  const apps = [
    {
      id: "nummies",
      name: "Nummies",
      description: "Discover your perfect nutrition through mystical insights",
      icon: "🌟",
      category: "Lifestyle",
      route: "/nummies"
    },
    {
      id: "astrologics",
      name: "Astrologics",
      description: "Unlock your cosmic destiny with personalized horoscopes",
      icon: "🔮",
      category: "Astrology",
      route: "/astrologics"
    },
    {
      id: "palmlife",
      name: "PalmLife",
      description: "Reveal your destiny through the lines of your palms",
      icon: "✋",
      category: "Palm Reading",
      route: "/palmlife"
    },
    {
      id: "auramind",
      name: "AuraMind",
      description: "Immerse yourself in spiritual content and meditation",
      icon: "🌙",
      category: "Spiritual",
      route: "/auramind"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-ember">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-flame bg-clip-text text-transparent">
            Veradia
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#apps" className="text-foreground hover:text-flame-red transition-colors">
              Apps
            </Link>
            <Link to="#about" className="text-foreground hover:text-flame-red transition-colors">
              About
            </Link>
            <Button variant="flame" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-float mb-8">
            <Smartphone className="w-20 h-20 mx-auto text-flame-red mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-flame bg-clip-text text-transparent">
            Mystical Mobile
            <br />
            Experiences
          </h1>
          <p className="text-xl md:text-2xl text-warm-silver mb-8 max-w-3xl mx-auto">
            Discover the cosmos within your pocket. Veradia creates enchanting mobile applications 
            that blend ancient wisdom with modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="flame" size="lg" className="text-lg px-8">
              <Download className="mr-2" />
              Explore Our Apps
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8">
              <Globe className="mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-flame-red">10M+</div>
              <div className="text-warm-silver">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-burnt-orange">4.8★</div>
              <div className="text-warm-silver">Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-warm-orange">50+</div>
              <div className="text-warm-silver">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-burgundy">24/7</div>
              <div className="text-warm-silver">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Our Mystical Collection
            </h2>
            <p className="text-xl text-warm-silver max-w-2xl mx-auto">
              Each app is crafted with love and cosmic energy to guide you on your spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apps.map((app, index) => (
              <Link key={app.id} to={app.route}>
                <Card className="h-full bg-card/80 backdrop-blur-sm border-flame-red/20 hover:border-flame-red/40 transition-all duration-300 hover:shadow-flame group cursor-pointer overflow-hidden">
                  <div className="aspect-video bg-gradient-sunset relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl group-hover:animate-float">
                        {app.icon}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-foreground group-hover:text-flame-red transition-colors">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-flame-red font-medium">
                      {app.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-silver text-center mb-4">
                      {app.description}
                    </p>
                    <Button variant="warm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
                About Veradia
              </h2>
              <p className="text-lg text-warm-silver mb-6">
                We are a team of visionaries, developers, and mystics who believe that technology 
                can be a bridge between the physical and spiritual worlds. Our apps combine cutting-edge 
                mobile technology with ancient wisdom traditions.
              </p>
              <p className="text-lg text-warm-silver mb-8">
                Founded in 2020, Veradia has grown from a small startup to a leading developer of 
                mystical mobile applications, trusted by millions worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-flame-red">
                  <Star className="w-5 h-5" />
                  <span>Award-winning designs</span>
                </div>
                <div className="flex items-center gap-2 text-burnt-orange">
                  <Zap className="w-5 h-5" />
                  <span>Cutting-edge technology</span>
                </div>
                <div className="flex items-center gap-2 text-burgundy">
                  <Heart className="w-5 h-5" />
                  <span>Made with love</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-2xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-flame-red/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-flame bg-clip-text text-transparent mb-4">
            Veradia
          </div>
          <p className="text-warm-silver mb-6">
            Connecting the mystical with the digital
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="#" className="text-warm-silver hover:text-flame-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-warm-silver hover:text-flame-red transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-warm-silver hover:text-flame-red transition-colors">
              Support
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Veradia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
