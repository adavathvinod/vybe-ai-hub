import { ArrowRight, AlertTriangle, Star, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import bootcampHero from "@/assets/bootcamp-hero.jpg";
import aiLayoffsNews from "@/assets/ai-layoffs-news.jpg";
import aiSalaryArticle from "@/assets/ai-salary-article.jpg";

const salaries = [
  "₹12 LPA", "₹14 LPA", "₹15 LPA", "₹16 LPA", "₹18 LPA", "₹19 LPA",
  "₹20 LPA", "₹21 LPA", "₹22 LPA", "₹23 LPA", "₹24 LPA", "₹25 LPA",
  "₹26 LPA", "₹27 LPA", "₹18 LPA", "₹21 LPA", "₹23 LPA", "₹26 LPA",
];

const curriculum = [
  "Foundations of Software Engineering",
  "Advanced Python Engineering",
  "Backend Architecture & API Systems",
  "Scalable System Design",
  "Data Systems & Database Engineering",
  "Data Engineering for AI Systems",
  "Large Language Model Engineering",
  "Prompt Engineering & AI Workflows",
  "Semantic Search & Embedding Systems",
  "Retrieval-Augmented Systems (RAG)",
  "Agentic Systems & Autonomous Workflows",
  "Model Fine-Tuning & Customization",
  "Deployment, MLOps & LLMOps",
  "AI System Design & Professional Readiness",
  "Capstone Engineering & Final Demonstration",
];

const jobRoles = [
  { role: "AI Engineer", desc: "Build LLM-powered products end to end" },
  { role: "LLM Application Developer", desc: "Integrate LLMs into enterprise systems" },
  { role: "RAG Engineer", desc: "Design and optimize retrieval-augmented systems" },
  { role: "AI Agents Engineer", desc: "Build autonomous agentic workflows" },
  { role: "GenAI Developer", desc: "Ship generative AI features across products" },
  { role: "Backend + AI Developer", desc: "Strong backend with deep AI integration" },
  { role: "MLOps / LLMOps Engineer", desc: "Deploy and monitor AI at scale" },
];

const layoffArticles = [
  { title: "Google lays off 12,000 employees as AI restructuring accelerates", source: "TechCrunch" },
  { title: "Meta cuts 21,000 jobs in largest tech layoff wave driven by AI automation", source: "Bloomberg" },
  { title: "Amazon replaces 100,000+ warehouse roles with AI-powered robotics", source: "Reuters" },
  { title: "Wipro & Infosys freeze hiring — AI tools now handle 40% of junior dev tasks", source: "Economic Times" },
  { title: "IBM CEO: AI will replace 30% of back-office roles within 5 years", source: "CNBC" },
  { title: "Duolingo cuts 10% of contractors as AI takes over content creation", source: "The Verge" },
];

const reviews = [
  { name: "Arjun Mehta", role: "Software Engineer → AI Engineer", company: "Flipkart", rating: 5, quote: "I went from a ₹12 LPA backend role to a ₹24 LPA AI Engineer position in just 2 months after completing this bootcamp. The RAG and Agents modules were game-changing." },
  { name: "Priya Sharma", role: "Data Analyst → GenAI Developer", company: "Razorpay", rating: 5, quote: "The hands-on projects are unreal. I built 3 production-grade AI apps during the bootcamp. Got hired at Razorpay within 3 weeks of graduating." },
  { name: "Rohit Verma", role: "Fresher → LLM Developer", company: "Zoho", rating: 5, quote: "As a fresher with no ML background, I was scared. But the curriculum starts from Python basics and builds up beautifully. Now I'm earning ₹18 LPA at Zoho." },
  { name: "Sneha Reddy", role: "Full Stack Dev → AI Agents Engineer", company: "Swiggy", rating: 5, quote: "The Agentic Systems module alone is worth the entire bootcamp fee. I'm now building autonomous workflows at Swiggy and loving every moment." },
  { name: "Karthik Iyer", role: "DevOps → MLOps Engineer", company: "PhonePe", rating: 5, quote: "Transitioning from DevOps to MLOps felt seamless. The deployment and LLMOps modules gave me exactly the skills PhonePe was looking for. ₹22 LPA offer!" },
  { name: "Ananya Das", role: "QA Engineer → RAG Engineer", company: "CRED", rating: 5, quote: "I never thought I'd leave QA, but this bootcamp opened my eyes. The RAG engineering depth is incredible. Now at CRED building search systems at ₹20 LPA." },
];

const salaryArticles = [
  { title: "AI Engineers in India now command ₹20-40 LPA packages — up 3x from 2023", source: "Mint" },
  { title: "Startups offering ₹25 LPA+ for engineers with RAG and LLM experience", source: "YourStory" },
  { title: "AI talent war: Indian companies paying 2-3x premium for GenAI skills", source: "Economic Times" },
  { title: "Fresh AI engineering graduates getting ₹18-22 LPA offers from top startups", source: "Inc42" },
  { title: "Global demand for AI engineers pushes Indian salaries past ₹30 LPA mark", source: "Livemint" },
];

const Bootcamps = () => (
  <>
    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={bootcampHero} alt="AI Engineering Bootcamp" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            AI Has Started.{" "}
            <span className="italic text-gradient-primary glow-text">Where Are You?</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-8 font-medium">
            AI engineers are earning 2x–3x more than average engineers still searching for jobs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Join Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-medium hover:bg-foreground/10 transition-colors">
              Become an AI Engineer
            </Link>
          </div>
        </div>
        {/* Scrolling Salary Strip */}
        <div className="mt-20 overflow-hidden">
          <p className="text-base text-foreground/80 mb-5 font-medium">AI Engineers are getting hired at these packages</p>
          <div className="relative">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {[...salaries, ...salaries].map((s, i) => (
                <span key={i} className="text-foreground/90 font-body text-lg font-bold tracking-wider flex-shrink-0">
                  {s} <span className="text-primary mx-2">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CURRICULUM SECTION */}
    <section className="section-padding bg-background">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become an AI Engineer in <span className="text-gradient-primary">45 Days</span>
          </h2>
          <p className="text-lg text-muted-foreground">Get paid 2–3x more than your current salary</p>
        </div>
        <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors flex-shrink-0">
          JOIN NOW <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {curriculum.map((item, i) => (
          <div key={i} className="glass-card-hover p-5 flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 text-primary font-bold text-sm flex items-center justify-center">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* JOB ROLES TABLE */}
    <section className="section-padding bg-card/40">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
        Job Roles You Can Apply For <span className="text-gradient-primary">After This Program</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-border/40">
          <thead>
            <tr className="border-b border-border/40 bg-card/60">
              <th className="text-left p-5 font-display text-foreground font-semibold text-lg">Role</th>
              <th className="text-left p-5 font-display text-foreground font-semibold text-lg">What You'll Do</th>
            </tr>
          </thead>
          <tbody>
            {jobRoles.map((j, i) => (
              <tr key={i} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                <td className="p-5 font-semibold text-foreground">{j.role}</td>
                <td className="p-5 text-muted-foreground">{j.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* URGENCY / FEAR SECTION */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={aiLayoffsNews} alt="AI Layoffs" width={1280} height={720} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-destructive" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            AI Won't Replace You. <span className="text-destructive">Someone Using AI Will.</span>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Companies worldwide are cutting costs with AI. If you're not building AI, you're being replaced by it. Here's what's happening right now:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {layoffArticles.map((a, i) => (
            <div key={i} className="glass-card p-6 border-destructive/20 hover:border-destructive/40 transition-colors">
              <p className="text-xs font-semibold text-destructive/80 uppercase tracking-wider mb-3">{a.source}</p>
              <p className="text-sm font-medium text-foreground leading-relaxed">{a.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-destructive text-destructive-foreground font-bold text-lg hover:bg-destructive/90 transition-colors">
            Don't Get Left Behind — Join Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* REVIEWS SECTION */}
    <section className="section-padding bg-card/30">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        What Our Graduates <span className="text-gradient-primary">Are Saying</span>
      </h2>
      <p className="text-muted-foreground mb-10">Real stories from engineers who transformed their careers</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card-hover p-6 flex flex-col">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic mb-5 flex-1">"{r.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/30">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {r.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role} · {r.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* SALARY ARTICLES SECTION */}
    <section className="section-padding bg-background">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              AI Engineers Are Getting Hired at <span className="text-gradient-primary">₹20 LPA+</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">The data doesn't lie. AI engineering is the highest-paying skill in India right now.</p>
          <div className="space-y-4">
            {salaryArticles.map((a, i) => (
              <div key={i} className="glass-card p-4 flex items-start gap-4 hover:border-primary/40 transition-colors">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={aiSalaryArticle} alt="AI Salary Trends" width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
        </div>
      </div>
    </section>

    {/* FINAL CTA SECTION */}
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Your Career Upgrade Starts <span className="text-gradient-primary">Today</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          45 days. 15 modules. Production-grade projects. Placement support. Everything you need to become an AI Engineer earning ₹20 LPA+.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-foreground/80 mb-8">
          {["Live mentorship", "Hands-on projects", "Resume building", "Interview prep", "Placement support"].map((f) => (
            <li key={f} className="glass-card px-4 py-2 text-sm">✓ {f}</li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors">
            Join the Bootcamp <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/ai-engineering" className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-foreground/30 text-foreground font-medium hover:bg-foreground/10 transition-colors">
            Check Eligibility
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Bootcamps;
