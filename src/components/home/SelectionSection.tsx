import { Link } from "react-router-dom";
import selectionBg from "@/assets/selection-bg.jpg";

const SelectionSection = () => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden">
    <img
      src={selectionBg}
      alt="Selection not signup"
      loading="lazy"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
    <div className="relative z-10 section-padding max-w-xl">
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
        <span className="text-gradient-primary">Selection,</span>
        <br />
        not signup
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
        Our AI agent evaluates your professional profile & gives you an instant decision. We optimise for fit, not volume.
      </p>
      <Link
        to="/ai-engineering"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
      >
        Check Eligibility
      </Link>
    </div>
  </section>
);

export default SelectionSection;
