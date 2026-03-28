import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const companies = ["Google", "OpenAI", "Microsoft", "ElevenLabs", "Apple", "Zerodha", "Palantir"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="AI future landscape"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
    <div className="relative z-10 section-padding w-full">
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
          Learn & Implement{" "}
          <span className="italic text-gradient-primary glow-text">AI</span> every single{" "}
          <span className="italic text-gradient-primary">week</span>
        </h1>
        <Link
          to="/ai-engineering"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/30 text-foreground font-medium hover:bg-foreground/10 transition-colors"
        >
          How it works <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="mt-20">
        <p className="text-sm text-muted-foreground mb-4">Join 5,639+ leaders from world's top product companies</p>
        <div className="company-logo-bar flex-wrap">
          {companies.map((c) => (
            <span key={c} className="text-foreground/60 font-body text-sm tracking-wider">{c}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
