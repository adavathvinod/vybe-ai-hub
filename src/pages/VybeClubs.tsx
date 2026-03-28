import { ArrowRight, Sparkles, Users, Lightbulb, Rocket, Code, Mic, BookOpen, Briefcase, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import vybeclubHero from "@/assets/vybeclub-hero.jpg";
import vybeclubWorkshop from "@/assets/vybeclub-workshop.jpg";

const features = [
  { icon: Code, title: "AI & Future-Ready Skills", desc: "Learn cutting-edge AI, ML, and automation skills that companies are hiring for right now." },
  { icon: Briefcase, title: "Real Project Experience", desc: "Build production-grade projects that go on your resume — not toy tutorials." },
  { icon: Rocket, title: "Internship & Startup Exposure", desc: "Get connected to startups, freelance gigs, and internship opportunities." },
  { icon: Users, title: "Community of Builders", desc: "Surround yourself with ambitious students who build, ship, and grow together." },
  { icon: Mic, title: "Mentorship from Founders", desc: "Direct access to founders, engineers, and industry leaders who've been there." },
  { icon: BookOpen, title: "Peer-to-Peer Learning", desc: "Collaborative learning culture — teach, learn, and grow with your peers." },
];

const whatHappens = [
  "AI workshops & hands-on labs",
  "Real-world client projects",
  "Content & technology roles",
  "Internships & gig opportunities",
  "Startup exposure & pitch sessions",
  "Guest sessions from industry leaders",
  "Hackathons & build sprints",
];

const structure = [
  { level: "VybeHeads", role: "Leadership", desc: "Drive strategy, partnerships, and club direction", color: "from-primary to-blue-400" },
  { level: "VybeMates", role: "Execution", desc: "Lead projects, workshops, and community initiatives", color: "from-blue-400 to-cyan-400" },
  { level: "VybeMembers", role: "Contributors", desc: "Actively participate, learn, and build together", color: "from-cyan-400 to-teal-400" },
  { level: "Community", role: "All Students", desc: "Attend events, workshops, and open sessions", color: "from-teal-400 to-emerald-400" },
];

const whyDifferent = [
  "Built by recent graduates who understand your reality",
  "Focus on execution, not certificates",
  "AI-first approach to everything",
  "Real opportunities, not promises",
  "Designed specifically for Indian colleges",
  "Founder-led mentorship & guidance",
];

const steps = [
  { step: "01", title: "Apply", desc: "Fill out the application form for your college" },
  { step: "02", title: "Review", desc: "Our team reviews and shortlists applications" },
  { step: "03", title: "Discussion", desc: "College coordination and faculty alignment" },
  { step: "04", title: "Team Selection", desc: "Core team formation and role assignment" },
  { step: "05", title: "Launch", desc: "VybeClub goes live at your campus!" },
];

const VybeClubs = () => (
  <>
    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={vybeclubHero} alt="VybeClub Community" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Student-Led AI Community</p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6">
            VYBE<span className="text-gradient-primary">CLUB</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-3 font-medium">
            A student-led AI and innovation community inside your college.
          </p>
          <p className="text-lg text-muted-foreground mb-8 italic">
            Learn. Build. Grow — while you're still in college.
          </p>
          <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors">
            Apply to Bring VybeClub to Your College <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* VIBE LINE */}
    <section className="py-10 bg-primary/5 border-y border-border/20">
      <p className="text-center text-xl md:text-2xl font-display italic text-foreground/90 px-6">
        "Students join VybeClub because they <span className="text-gradient-primary font-bold">don't want a normal college life.</span>"
      </p>
    </section>

    {/* WHAT IS VYBECLUB */}
    <section className="section-padding bg-background">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Exactly is <span className="text-gradient-primary">VybeClub?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            VybeClub is more than a college club. It's a <strong className="text-foreground">builder community + startup ecosystem + learning space</strong> inside your campus.
          </p>
          <ul className="space-y-3 mb-6">
            {["Learn AI and future skills", "Build real projects", "Explore startups and freelancing", "Connect with mentors and builders"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/90">
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="glass-card p-4 border-primary/20">
            <p className="text-sm text-muted-foreground italic">
              Not a coaching institute. Not placements. <strong className="text-foreground">A real ecosystem for growth.</strong>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={vybeclubWorkshop} alt="VybeClub Workshop" width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
        </div>
      </div>
    </section>

    {/* WHAT YOU GET */}
    <section className="section-padding bg-card/30">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        What You <span className="text-gradient-primary">Get</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div key={i} className="glass-card-hover p-6">
            <f.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* WHO IS IT FOR */}
    <section className="section-padding bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        Who is it <span className="text-gradient-primary">For?</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="glass-card-hover p-8 text-center">
          <Users className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-foreground mb-3">All Students</h3>
          <p className="text-muted-foreground">Workshops, events, hackathons open to everyone on campus. No prerequisites needed.</p>
        </div>
        <div className="glass-card-hover p-8 text-center border-primary/30">
          <Award className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-foreground mb-3">Core Members</h3>
          <p className="text-muted-foreground">Selected students get access to deeper opportunities, mentorship, and leadership roles.</p>
        </div>
      </div>
    </section>

    {/* WHAT HAPPENS INSIDE */}
    <section className="section-padding bg-card/30">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        What Happens <span className="text-gradient-primary">Inside</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {whatHappens.map((item, i) => (
          <div key={i} className="glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-colors">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* STRUCTURE */}
    <section className="section-padding bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        Club <span className="text-gradient-primary">Structure</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {structure.map((s, i) => (
          <div key={i} className="glass-card-hover p-6 text-center">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} mx-auto mb-4 flex items-center justify-center text-foreground font-bold text-lg`}>
              {i + 1}
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{s.level}</h3>
            <p className="text-primary text-sm font-semibold mb-2">{s.role}</p>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* WHY DIFFERENT */}
    <section className="section-padding bg-card/30">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        Why VybeClub is <span className="text-gradient-primary">Different</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {whyDifferent.map((item, i) => (
          <div key={i} className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors">
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* HOW TO START - STEP FLOW */}
    <section className="section-padding bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        How to <span className="text-gradient-primary">Start</span>
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-5xl mx-auto relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
        {steps.map((s, i) => (
          <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-3 relative z-10 flex-1 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
              {s.step}
            </div>
            <div className="md:mt-2">
              <h4 className="font-display text-sm font-bold text-foreground">{s.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Don't Just Attend College.{" "}
          <span className="text-gradient-primary">Build Something.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Start VybeClub. Lead the change. Be the reason your college becomes an innovation hub.
        </p>
        <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors">
          Apply Now <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </>
);

export default VybeClubs;
