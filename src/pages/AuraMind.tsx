import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Music, Sparkles, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const AuraMind = () => {
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
            <div className="text-8xl mb-6 animate-float">🌙</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-flame bg-clip-text text-transparent">
            AuraMind
          </h1>
          <p className="text-xl md:text-2xl text-warm-silver mb-8 max-w-3xl mx-auto">
            Immerse yourself in spiritual content and meditation. Transform your mind 
            and elevate your consciousness with guided practices and mystical wisdom.
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
            Spiritual Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Brain className="w-12 h-12 mx-auto text-flame-red mb-4" />
                <CardTitle className="text-xl text-foreground">Guided Meditations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Experience transformative guided meditations designed to enhance your spiritual journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Music className="w-12 h-12 mx-auto text-burnt-orange mb-4" />
                <CardTitle className="text-xl text-foreground">Sacred Sounds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Immerse yourself in healing frequencies, mantras, and sacred music for deep relaxation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-flame-red/20">
              <CardHeader className="text-center">
                <Sparkles className="w-12 h-12 mx-auto text-warm-orange mb-4" />
                <CardTitle className="text-xl text-foreground">Aura Cleansing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-silver text-center">
                  Learn techniques to cleanse and strengthen your aura for better spiritual protection.
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
          <p className="text-warm-silver mb-6">
            Connecting the mystical with the digital
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            <Link 
              to="/privacy-policy" 
              className="text-warm-silver hover:text-flame-red transition-colors text-sm md:text-base"
            >
              Privacy Policy
            </Link>
            <span className="text-warm-silver">•</span>
            <Link 
              to="/terms-of-service" 
              className="text-warm-silver hover:text-flame-red transition-colors text-sm md:text-base"
            >
              Terms of Service
            </Link>
            <span className="text-warm-silver">•</span>
            <a 
              href="mailto:nummies.app@gmail.com" 
              className="text-warm-silver hover:text-flame-red transition-colors text-sm md:text-base"
            >
              Support
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Veradia. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Veradia is not a substitute for professional medical, legal, financial, or psychological advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuraMind;