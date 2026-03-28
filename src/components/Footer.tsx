import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const footerLinks = {
  "AI EVENTS": [
    { label: "Bengaluru", path: "/bootcamps" },
    { label: "Mumbai", path: "/bootcamps" },
    { label: "Hyderabad", path: "/bootcamps" },
    { label: "Chennai", path: "/bootcamps" },
    { label: "Kolkata", path: "/bootcamps" },
    { label: "Delhi", path: "/bootcamps" },
    { label: "Online", path: "/bootcamps" },
  ],
  "AI COURSES": [
    { label: "AI Agents 101", path: "/learn" },
    { label: "Building Voice Agents", path: "/learn" },
    { label: "AI Engineering Playbook", path: "/learn" },
    { label: "How to make $1000 w/ AI", path: "/learn" },
    { label: "Cracking Youtube w/ AI", path: "/learn" },
    { label: "Build an AI Campaign Tracker", path: "/learn" },
    { label: "Prompt Engineering", path: "/learn" },
  ],
  "GROWTH COURSES": [
    { label: "Advanced Growth Strategy", path: "/learn" },
    { label: "Growth Model Design", path: "/learn" },
    { label: "Building Growth Teams", path: "/learn" },
    { label: "Brand Led Growth", path: "/learn" },
    { label: "Partnership Led Growth", path: "/learn" },
    { label: "Event Led Growth", path: "/learn" },
  ],
  "INTERVIEW PREP": [
    { label: "AI Product Manager", path: "/learn" },
    { label: "Technical Product Manager", path: "/learn" },
    { label: "Product Manager", path: "/learn" },
    { label: "Product Marketing Manager", path: "/learn" },
    { label: "Digital Marketing Manager", path: "/learn" },
    { label: "Brand Attribution", path: "/learn" },
  ],
  COMPANY: [
    { label: "Login", path: "/learn" },
    { label: "Experts", path: "/" },
    { label: "Origin Story", path: "/" },
    { label: "Media Kit", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Terms of Use", path: "/" },
  ],
};

const INITIAL_SHOW = 5;

const FooterColumn = ({ category, links }: { category: string; links: { label: string; path: string }[] }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = links.length > INITIAL_SHOW;
  const visibleLinks = expanded ? links : links.slice(0, INITIAL_SHOW);

  return (
    <div>
      <h4 className="font-body text-sm font-bold tracking-widest text-foreground mb-5">{category}</h4>
      <ul className="space-y-3">
        {visibleLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Show {expanded ? "less" : "more"}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-border/20 bg-background">
    <div className="section-padding">
      {/* Large VybeSchool branding text */}
      <div className="mb-16 overflow-hidden">
        <h2
          className="font-display text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-[0.85] tracking-tight text-foreground/[0.06] select-none"
          style={{
            WebkitTextStroke: '1px hsl(var(--foreground) / 0.08)',
            color: 'transparent',
          }}
        >
          VybeSchool
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
        {Object.entries(footerLinks).map(([category, links]) => (
          <FooterColumn key={category} category={category} links={links} />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground">Copyright 2026 © VybeSchool Education Labs</p>
      </div>
    </div>
  </footer>
);

export default Footer;
