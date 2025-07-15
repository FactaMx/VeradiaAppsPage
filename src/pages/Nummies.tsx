import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Star, Users, Sparkles, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Nummies = () => {
  return (
    <div className="min-h-screen bg-gradient-ember">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-flame-red transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Veradia</span>
          </Link>
          <div className="text-2xl font-bold bg-gradient-flame bg-clip-text text-transparent">
            Nummies
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-8 animate-float">🌟</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
            Nummies
          </h1>
          <p className="text-xl md:text-2xl text-warm-silver mb-8 max-w-3xl mx-auto">
            Discover your perfect nutrition through mystical insights. Let the cosmos guide your 
            culinary journey and unlock the secrets of spiritual nourishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="flame" size="lg" className="text-lg px-8">
              <Download className="mr-2" />
              Download on iOS
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8">
              <Download className="mr-2" />
              Get on Android
            </Button>
          </div>

          {/* App Preview */}
          <div className="relative max-w-md mx-auto">
            <div className="w-64 h-96 bg-gradient-flame rounded-3xl mx-auto shadow-warm animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-sunset bg-clip-text text-transparent">
            Mystical Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-flame-red mb-4" />
                <CardTitle>Cosmic Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver">
                  Receive personalized nutrition guidance based on your astrological profile and lunar cycles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader>
                <Star className="w-12 h-12 text-burnt-orange mb-4" />
                <CardTitle>Sacred Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver">
                  Access thousands of spiritually-aligned recipes that nourish both body and soul.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader>
                <Users className="w-12 h-12 text-warm-orange mb-4" />
                <CardTitle>Mystic Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver">
                  Connect with like-minded souls on their nutritional journey through our vibrant community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-flame bg-clip-text text-transparent">
            Begin Your Mystical Nutrition Journey
          </h2>
          <p className="text-xl text-warm-silver mb-8">
            Join thousands of users who have transformed their relationship with food through cosmic wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="flame" size="lg" className="text-lg px-8">
              <Apple className="mr-2" />
              App Store
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8">
              <Download className="mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nummies;