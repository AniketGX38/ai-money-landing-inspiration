import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Background System inspired by Copilot Intelligence */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1200px 800px at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 800px 600px at 80% 100%, hsl(var(--accent) / 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 20% 80%, hsl(var(--primary) / 0.04) 0%, transparent 50%),
              linear-gradient(180deg, 
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.95) 30%,
                hsl(var(--background) / 0.9) 60%,
                hsl(var(--background) / 0.95) 80%,
                hsl(var(--background)) 100%
              )
            `
          }}
        />
        
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-20 left-1/4 w-96 h-96 opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float-slow 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-32 right-1/4 w-80 h-80 opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'float-slow 10s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              conic-gradient(from 0deg at 20% 20%, transparent 0deg, hsl(var(--primary) / 0.1) 45deg, transparent 90deg),
              conic-gradient(from 180deg at 80% 80%, transparent 0deg, hsl(var(--accent) / 0.08) 60deg, transparent 120deg)
            `,
            mixBlendMode: 'soft-light'
          }}
        />
      </div>
      
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;