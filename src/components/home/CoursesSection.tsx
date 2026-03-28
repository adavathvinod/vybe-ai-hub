import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  { title: "AI Agents 101", company: "inFeedo.ai" },
  { title: "Go To Market Strategy", company: "Razorpay" },
  { title: "Brand Design 101", company: "Netflix" },
  { title: "Building Voice Agents", company: "ElevenLabs" },
  { title: "Product Strategy 101", company: "Zerodha" },
  { title: "Product Storytelling", company: "Apple" },
  { title: "AI Engineering Playbook", company: "VybeSchool" },
  { title: "Decision Making For Leaders", company: "FreshWorks" },
  { title: "Creative Strategy Design", company: "Swiggy" },
  { title: "How to make $1000 w/ AI", company: "Rocket" },
  { title: "Experimentation Design", company: "Disney" },
  { title: "Quick Commerce For D2C", company: "Blinkit" },
  { title: "Cracking YouTube w/ AI", company: "YouTube" },
  { title: "Monetization Design", company: "Chess" },
  { title: "Product Marketing For SaaS", company: "Coda" },
];

const CoursesSection = () => (
  <section className="section-padding bg-background">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">
          Learn AI, product & marketing
        </h2>
        <p className="text-sm text-muted-foreground mt-2">Taught live by top experts. Plus access to past recordings.</p>
      </div>
      <Link to="/learn" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
        Explore the library <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      {courses.map((c) => (
        <div key={c.title} className="glass-card-hover p-4 flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
            <span className="text-xs text-muted-foreground mt-1 block">🎙️ {c.company}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CoursesSection;
