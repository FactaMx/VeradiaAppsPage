import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Hand, Heart, Eye, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const PalmLife = () => {
  return (
    <div className="min-h-screen bg-gradient-ember">
      {/* Header */}
      <header className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-flame-red transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Apps
          </Link>
          <div className="text-xl font-bold bg-gradient-flame bg-clip-text text-transparent">
            Veradia
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-float">✋</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-flame bg-clip-text text-transparent">
            PalmLife
          </h1>
          <p className="text-xl md:text-2xl text-warm-silver mb-8 max-w-3xl mx-auto">
            Reveal your destiny through the ancient art of palm reading. Discover what 
            the lines of your palms say about your past, present, and future.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="flame" size="lg" className="text-lg px-8">
              <Download className="mr-2" />
              Download for iOS
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8">
              <Smartphone className="mr-2" />
              Get on Android
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-warm bg-clip-text text-transparent">
            Palm Reading Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Hand className="w-12 h-12 mx-auto text-flame-red mb-4" />
                <CardTitle className="text-xl text-foreground">Life Line Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Discover insights about your vitality, health, and major life changes through your life line.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto text-burnt-orange mb-4" />
                <CardTitle className="text-xl text-foreground">Heart Line Reading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Understand your emotional nature, relationships, and capacity for love through your heart line.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Eye className="w-12 h-12 mx-auto text-warm-orange mb-4" />
                <CardTitle className="text-xl text-foreground">Fate Line Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Explore your destiny and career path through the mysterious fate line on your palm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-flame-red/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-flame bg-clip-text text-transparent mb-4">
            Veradia
          </div>
          <p className="text-warm-silver">
            Connecting the mystical with the digital
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PalmLife;