import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Gift, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Bootcamps", path: "/bootcamps" },
  { icon: Gift, label: "VybeClubs", path: "/vybeclubs" },
  { icon: BookOpen, label: "Learn", path: "/learn" },
  { icon: GraduationCap, label: "AI Engineering Bootcamp Syllabus", path: "/ai-engineering" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[140px] flex flex-col justify-between py-8 px-4 bg-background/80 backdrop-blur-xl border-r border-border/30">
      <div>
        <Link to="/" className="flex items-center gap-1 mb-10 px-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-bold text-foreground tracking-tight">VybeSchool</span>
        </Link>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <Link
          to="/ai-engineering"
          className="block w-full text-center py-2.5 px-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Check Eligibility
        </Link>
        <Link to="/learn" className="text-xs text-muted-foreground hover:text-foreground text-center transition-colors">
          Member login
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
