import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./LegalPages.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AI-Inspired Background System */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 600px 300px at 20% 100%, hsl(var(--accent) / 0.05) 0%, transparent 60%),
              linear-gradient(180deg, 
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.98) 30%,
                hsl(var(--background) / 0.95) 60%,
                hsl(var(--background) / 0.98) 80%,
                hsl(var(--background)) 100%
              )
            `
          }}
        />
        
        {/* Floating AI elements */}
        <div 
          className="absolute top-20 left-1/4 w-64 h-64 opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float-slow 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-32 right-1/3 w-80 h-80 opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'float-slow 20s ease-in-out infinite reverse',
            animationDelay: '3s'
          }}
        />
      </div>

      <Navigation />
      
      <main className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center max-w-2xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <div className="legal-breadcrumb">
            <nav className="legal-breadcrumb-nav justify-center">
              <a href="/" className="legal-breadcrumb-link">Home</a>
              <span className="legal-breadcrumb-separator">›</span>
              <span className="legal-breadcrumb-current">404 Error</span>
            </nav>
          </div>

          {/* 404 Error Display */}
          <div className="relative mb-8">
            <h1 
              className="text-9xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))'
              }}
            >
              404
            </h1>
            
            {/* Glowing effect behind 404 */}
            <div 
              className="absolute inset-0 text-9xl font-bold opacity-20 blur-sm"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: 'scale(1.1)',
                zIndex: -1
              }}
            >
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The page you're looking for has drifted into the digital void. 
              Our AI systems couldn't locate this destination in our neural networks.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                boxShadow: '0 4px 15px hsl(var(--primary) / 0.2)'
              }}
            >
              <span className="relative z-10">Return to Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 border border-border/50 text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 rounded-lg border border-border/30 bg-background/50 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">
              If you believe this is an error, please contact our support team or check the URL for typos.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Error Path: <code className="bg-muted/30 px-2 py-1 rounded text-primary">{location.pathname}</code>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
