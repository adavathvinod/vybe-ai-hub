import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const footerLinks = {
  "AI BOOTCAMPS": [
    { label: "Bengaluru", path: "/bootcamps" },
    { label: "Mumbai", path: "/bootcamps" },
    { label: "Hyderabad", path: "/bootcamps" },
    { label: "Chennai", path: "/bootcamps" },
    { label: "Online", path: "/bootcamps" },
  ],
  "AI COURSES": [
    { label: "AI Agents 101", path: "/learn" },
    { label: "Building Voice Agents", path: "/learn" },
    { label: "AI Engineering Playbook", path: "/learn" },
    { label: "Prompt Engineering", path: "/learn" },
  ],
  "GROWTH COURSES": [
    { label: "Advanced Growth Strategy", path: "/learn" },
    { label: "Growth Model Design", path: "/learn" },
    { label: "Brand Led Growth", path: "/learn" },
    { label: "Partnership Led Growth", path: "/learn" },
  ],
  COMPANY: [
    { label: "Login", path: "/learn" },
    { label: "Origin Story", path: "/" },
    { label: "Media Kit", path: "/" },
    { label: "Careers", path: "/" },
  ],
  SOCIALS: [
    { label: "YouTube", path: "#" },
    { label: "LinkedIn", path: "#" },
    { label: "Instagram", path: "#" },
    { label: "Twitter", path: "#" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border/20 bg-background">
    <div className="section-padding">
      <div className="mb-16 flex justify-center opacity-10">
        <Sparkles className="w-40 h-40 text-foreground" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-body text-xs font-semibold tracking-widest text-foreground mb-4">{category}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground">Copyright 2026 © VybeSchool Education Labs</p>
      </div>
    </div>
  </footer>
);

export default Footer;
