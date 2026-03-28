import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import card1 from "@/assets/event-card-1.jpg";
import card2 from "@/assets/event-card-2.jpg";
import card3 from "@/assets/event-card-3.jpg";
import card4 from "@/assets/event-card-4.jpg";
import card5 from "@/assets/event-card-5.jpg";
import workshopImg from "@/assets/event-workshop.jpg";

const events = [
  { image: card1, title: "Build a super agent", speaker: "Bhanu Teja", company: "OpenClaw", city: "Bengaluru" },
  { image: card2, title: "Build a sales agent", speaker: "Ruta Bhatt", company: "ElevenLabs", city: "Mumbai" },
  { image: card3, title: "AI code for PMs", speaker: "Vivek Asthol", company: "ClaudeCode", city: "Pune" },
  { image: card4, title: "Build your startup prototype", speaker: "Akash Bhargava", company: "VybeSchool", city: "Chennai" },
  { image: card5, title: "Build AI agents from scratch", speaker: "Jainit Doshi", company: "AI Wizards", city: "Mumbai" },
  { image: workshopImg, title: "Build a CRM with AI", speaker: "Pavan Galiveti", company: "Vercel", city: "Hyderabad" },
];

const EventsSection = () => (
  <section className="section-padding bg-background">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">
          Build agents through in-person events
        </h2>
        <p className="text-sm text-muted-foreground mt-2">Go from beginner to advanced. No prior coding experience required.</p>
      </div>
      <Link to="/bootcamps" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-foreground hover:bg-muted/50 transition-colors">
        See all events <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((e) => (
        <div key={e.title} className="glass-card-hover rounded-xl overflow-hidden group cursor-pointer">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={e.image} alt={e.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs text-foreground/80 font-medium">{e.speaker}</span>
              <span className="text-xs text-primary font-semibold">{e.company}</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-1">{e.title}</h3>
              <span className="text-xs text-muted-foreground">📍 {e.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
