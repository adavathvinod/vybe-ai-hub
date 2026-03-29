import { useState } from "react";
import { Search, User, Palette, Gift, BookOpen, ArrowRight, Check, Clock, Globe, CreditCard, Sparkles, X, ChevronRight, Star, Play, Lock } from "lucide-react";
import learnHero from "@/assets/learn-hero.jpg";
import mentorshipImg from "@/assets/mentorship-session.jpg";
import customCourseImg from "@/assets/custom-course.jpg";
import freeCoursesImg from "@/assets/free-courses.jpg";

type Tab = "1:1" | "custom" | "free" | "courses";

const aiTools = [
  { name: "ChatGPT", desc: "AI text generation", badge: "🔥 Most Popular", color: "bg-emerald-500" },
  { name: "Claude", desc: "Advanced reasoning AI", badge: "⭐ Top Rated", color: "bg-amber-600" },
  { name: "Gemini", desc: "Google's multimodal AI", badge: "🔥 Trending", color: "bg-blue-500" },
  { name: "Midjourney", desc: "AI image generation", badge: "🎨 Creative", color: "bg-purple-500" },
  { name: "DALL-E", desc: "OpenAI image creator", badge: "", color: "bg-teal-500" },
  { name: "Runway ML", desc: "AI video generation", badge: "🎬 Video", color: "bg-pink-500" },
  { name: "Canva AI", desc: "Design with AI", badge: "", color: "bg-cyan-500" },
  { name: "Notion AI", desc: "AI productivity", badge: "", color: "bg-gray-600" },
  { name: "Perplexity", desc: "AI search engine", badge: "⭐ Rising", color: "bg-indigo-500" },
  { name: "GitHub Copilot", desc: "AI code assistant", badge: "🔥 Dev Favorite", color: "bg-gray-700" },
  { name: "Zapier", desc: "AI automation", badge: "", color: "bg-orange-500" },
  { name: "Make.com", desc: "Workflow automation", badge: "", color: "bg-violet-500" },
  { name: "ElevenLabs", desc: "AI voice synthesis", badge: "🎙️ Audio", color: "bg-rose-500" },
  { name: "HeyGen", desc: "AI video avatars", badge: "", color: "bg-sky-500" },
  { name: "Pika", desc: "AI video creation", badge: "", color: "bg-lime-600" },
  { name: "Adobe Firefly", desc: "Creative AI suite", badge: "🎨 Pro", color: "bg-red-600" },
];

const freeCourses = [
  { title: "Introduction to AI & Machine Learning", duration: "2h 30m", lessons: 12, level: "Beginner", rating: 4.8, students: 12400 },
  { title: "ChatGPT Mastery — From Zero to Pro", duration: "3h 15m", lessons: 18, level: "Beginner", rating: 4.9, students: 28300 },
  { title: "Prompt Engineering Fundamentals", duration: "1h 45m", lessons: 8, level: "Beginner", rating: 4.7, students: 9800 },
  { title: "AI for Business — Automate Everything", duration: "2h 00m", lessons: 10, level: "Intermediate", rating: 4.6, students: 7200 },
  { title: "Build Your First AI Chatbot", duration: "4h 00m", lessons: 20, level: "Intermediate", rating: 4.8, students: 15600 },
  { title: "AI Content Creation Masterclass", duration: "2h 45m", lessons: 14, level: "Beginner", rating: 4.5, students: 11200 },
  { title: "Python for AI — Quick Start", duration: "3h 30m", lessons: 16, level: "Beginner", rating: 4.7, students: 19500 },
  { title: "Digital Marketing with AI Tools", duration: "2h 15m", lessons: 11, level: "Intermediate", rating: 4.6, students: 8400 },
];

const paidCourses = [
  { title: "Full Stack AI Developer Program", duration: "40h", lessons: 120, level: "Advanced", rating: 4.9, students: 3200, price: "₹4,999", originalPrice: "₹14,999" },
  { title: "AI Agents & Autonomous Systems", duration: "25h", lessons: 80, level: "Advanced", rating: 4.8, students: 2100, price: "₹3,499", originalPrice: "₹9,999" },
  { title: "RAG Engineering Masterclass", duration: "20h", lessons: 60, level: "Advanced", rating: 4.9, students: 1800, price: "₹2,999", originalPrice: "₹8,999" },
  { title: "LLM Fine-Tuning & Deployment", duration: "18h", lessons: 55, level: "Expert", rating: 4.7, students: 1200, price: "₹3,999", originalPrice: "₹11,999" },
  { title: "AI Product Management", duration: "15h", lessons: 45, level: "Intermediate", rating: 4.6, students: 2800, price: "₹1,999", originalPrice: "₹5,999" },
  { title: "MLOps & Production AI Systems", duration: "22h", lessons: 70, level: "Advanced", rating: 4.8, students: 1500, price: "₹3,499", originalPrice: "₹9,999" },
];

const skillChips = [
  "🌐 Build a Website", "⚙️ Automate My Business with AI", "🎨 Create Content with AI",
  "📈 Digital Marketing with AI", "💼 Freelancing with AI", "📊 Data Analysis with AI"
];

const Learn = () => {
  const [activeTab, setActiveTab] = useState<Tab>("courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [mentorModalOpen, setMentorModalOpen] = useState(false);
  const [mentorStep, setMentorStep] = useState(0);
  const [selectedType, setSelectedType] = useState<"skill" | "tool" | null>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [customFormSubmitted, setCustomFormSubmitted] = useState(false);
  const [timeCommitment, setTimeCommitment] = useState("");
  const [language, setLanguage] = useState("");

  const tabs: { key: Tab; label: string; icon: typeof User }[] = [
    { key: "courses", label: "Courses", icon: BookOpen },
    { key: "free", label: "Free Courses", icon: Gift },
    { key: "1:1", label: "1:1 Mentorship", icon: User },
    { key: "custom", label: "Custom Courses", icon: Palette },
  ];

  const openMentorFlow = () => {
    setMentorModalOpen(true);
    setMentorStep(1);
    setSelectedType(null);
    setSelectedTools([]);
  };

  const toggleTool = (name: string) => {
    setSelectedTools(prev => prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={learnHero} alt="Learn Platform" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="relative z-10 section-padding w-full">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-4">
              Learn <span className="text-gradient-primary italic">Anything AI</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">Courses, mentorship, and custom programs — all in one place.</p>

            {/* Search + Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search courses, tools, topics..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/80 backdrop-blur border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {tabs.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeTab === t.key
                        ? "bg-primary text-primary-foreground"
                        : "glass-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <t.icon className="w-4 h-4" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 1:1 MENTORSHIP TAB ====== */}
      {activeTab === "1:1" && (
        <>
          <section className="section-padding bg-background">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Learn Anything. One-on-One.{" "}
                  <span className="text-gradient-primary">At Your Pace.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether it's a skill, a topic, or an AI tool — our mentors are here just for you.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { icon: "🎯", label: "Personalized" },
                    { icon: "🌐", label: "In Your Language" },
                    { icon: "⏰", label: "Flexible Time" },
                  ].map(f => (
                    <div key={f.label} className="flex items-center gap-2 text-foreground/80">
                      <span className="text-xl">{f.icon}</span>
                      <span className="text-sm font-medium">{f.label}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openMentorFlow}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  🤝 Hire a Mentor Now
                </button>
              </div>
              <div className="lg:w-1/2">
                <img src={mentorshipImg} alt="Mentorship Session" width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
              </div>
            </div>
          </section>

          {/* Mentor Modal */}
          {mentorModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
              <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
                <button onClick={() => setMentorModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>

                {/* Step 1 */}
                {mentorStep === 1 && (
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">What Do You Want to Learn?</h3>
                    <p className="text-muted-foreground mb-8">Choose one to get started</p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { type: "skill" as const, icon: "🧠", title: "Learn a Skill", desc: "Build a practical skill using AI", examples: "Build a website, Automate your business, Create content with AI" },
                        { type: "tool" as const, icon: "🛠️", title: "Learn an AI Tool", desc: "Master a specific AI tool hands-on", examples: "ChatGPT, Midjourney, Claude, Gemini, Canva AI" },
                      ].map(opt => (
                        <button
                          key={opt.type}
                          onClick={() => { setSelectedType(opt.type); setMentorStep(2); }}
                          className="glass-card-hover p-6 text-left group"
                        >
                          <span className="text-3xl mb-3 block">{opt.icon}</span>
                          <h4 className="font-display text-lg font-bold text-foreground mb-2">{opt.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{opt.desc}</p>
                          <p className="text-xs text-muted-foreground">e.g., {opt.examples}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2A - Skill */}
                {mentorStep === 2 && selectedType === "skill" && (
                  <div>
                    <button onClick={() => setMentorStep(1)} className="text-sm text-primary mb-4 flex items-center gap-1">
                      ← Back
                    </button>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">Tell Us About Your Goal</h3>
                    <input
                      type="text"
                      placeholder="Type your skill... e.g., Build a website"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
                    />
                    <div className="flex flex-wrap gap-2 mb-8">
                      {skillChips.map(c => (
                        <button key={c} className="px-3 py-1.5 rounded-full text-xs glass-card hover:border-primary/40 text-foreground/80 transition-colors">
                          {c}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">How much time can you spend per week?</label>
                        <div className="flex flex-wrap gap-2">
                          {["1–2 hrs", "3–5 hrs", "5–10 hrs", "10+ hrs"].map(t => (
                            <button key={t} onClick={() => setTimeCommitment(t)} className={`px-4 py-2 rounded-lg text-sm transition-all ${timeCommitment === t ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Preferred language for sessions?</label>
                        <div className="flex flex-wrap gap-2">
                          {["Telugu", "Hindi", "English"].map(l => (
                            <button key={l} onClick={() => setLanguage(l)} className={`px-4 py-2 rounded-lg text-sm transition-all ${language === l ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                              {l}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Payment method</label>
                        <div className="flex flex-wrap gap-2">
                          {["UPI", "Razorpay", "Credit/Debit Card", "Net Banking"].map(p => (
                            <span key={p} className="px-3 py-2 rounded-lg text-xs glass-card text-muted-foreground">{p}</span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Payment is processed only after mentor matching is confirmed</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setMentorStep(3)}
                      className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-400 text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                      🎓 Find My Mentor
                    </button>
                  </div>
                )}

                {/* Step 2B - AI Tool */}
                {mentorStep === 2 && selectedType === "tool" && (
                  <div>
                    <button onClick={() => setMentorStep(1)} className="text-sm text-primary mb-4 flex items-center gap-1">
                      ← Back
                    </button>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">Choose Your AI Tools</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {/* Custom tool input */}
                      <div className="glass-card p-4 border-dashed border-2 border-border/60 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/40 transition-colors">
                        <span className="text-2xl mb-1">+</span>
                        <span className="text-xs text-muted-foreground">Type your tool</span>
                      </div>
                      {aiTools.map(tool => (
                        <button
                          key={tool.name}
                          onClick={() => toggleTool(tool.name)}
                          className={`glass-card p-4 text-left transition-all relative ${selectedTools.includes(tool.name) ? "border-primary/60 bg-primary/10" : "hover:border-primary/30"}`}
                        >
                          {selectedTools.includes(tool.name) && (
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                          <div className={`w-8 h-8 rounded-full ${tool.color} mb-2 flex items-center justify-center text-white text-xs font-bold`}>
                            {tool.name[0]}
                          </div>
                          <p className="text-sm font-semibold text-foreground">{tool.name}</p>
                          <p className="text-xs text-muted-foreground">{tool.desc}</p>
                          {tool.badge && <span className="text-[10px] mt-1 inline-block">{tool.badge}</span>}
                        </button>
                      ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/30">
                      <div className="flex gap-2">
                        {["1–2 hrs", "3–5 hrs", "5–10 hrs"].map(t => (
                          <button key={t} onClick={() => setTimeCommitment(t)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${timeCommitment === t ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground"}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {["Telugu", "Hindi", "English"].map(l => (
                          <button key={l} onClick={() => setLanguage(l)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${language === l ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground"}`}>
                            {l}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setMentorStep(3)}
                        className="ml-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                      >
                        Find My Mentor
                      </button>
                    </div>
                  </div>
                )}

                {/* Confirmation */}
                {mentorStep === 3 && (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">We've Received Your Request!</h3>
                    <p className="text-muted-foreground mb-6">We'll match you with a perfect mentor within 24 hours 🎉</p>
                    <button onClick={() => setMentorModalOpen(false)} className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* ====== CUSTOM COURSES TAB ====== */}
      {activeTab === "custom" && (
        <section className="section-padding bg-background">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Is For Everyone.{" "}
                <span className="text-gradient-primary">Including You.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tell us about yourself, and we'll build a course just for you — in your language, at your pace.
              </p>
              <p className="text-sm text-primary font-semibold mb-8">✅ Response guaranteed within 1 hour</p>
              <img src={customCourseImg} alt="Custom Course" width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
            </div>

            <div className="lg:w-1/2">
              {!customFormSubmitted ? (
                <form onSubmit={e => { e.preventDefault(); setCustomFormSubmitted(true); }} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                    <input type="text" required placeholder="What should we call you?" className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email ID</label>
                    <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">WhatsApp Number</label>
                    <div className="flex gap-2">
                      <span className="px-3 py-3 rounded-xl bg-muted border border-border/40 text-foreground text-sm">+91</span>
                      <input type="tel" required placeholder="Your number" className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">How much time do you have?</label>
                    <div className="flex flex-wrap gap-2">
                      {["< 1 hr/day", "1–2 hrs", "2–4 hrs", "Full-time learner"].map(t => (
                        <button key={t} type="button" onClick={() => setTimeCommitment(t)} className={`px-4 py-2 rounded-lg text-sm transition-all ${timeCommitment === t ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Do you have a laptop?</label>
                      <div className="flex gap-2">
                        {["Yes, I have one", "No, I use mobile"].map(o => (
                          <button key={o} type="button" className="flex-1 px-3 py-2 rounded-lg text-xs glass-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Good internet?</label>
                      <div className="flex gap-2">
                        {["Yes, stable", "Sometimes slow"].map(o => (
                          <button key={o} type="button" className="flex-1 px-3 py-2 rounded-lg text-xs glass-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Education Background</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Select...</option>
                      <option>Below 10th</option><option>10th Pass</option><option>12th Pass</option>
                      <option>Graduate</option><option>Post-Graduate</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">What do you want to learn?</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Make money online", "Automate work", "Build something", "Upskill", "Other"].map(c => (
                        <button key={c} type="button" className="px-3 py-1.5 rounded-full text-xs glass-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                          {c}
                        </button>
                      ))}
                    </div>
                    <textarea placeholder="Tell us in your own words..." rows={2} className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Where do you want to use AI?</label>
                    <div className="flex flex-wrap gap-2">
                      {["At Home", "In My Job", "For My Business", "For Freelancing", "For Studies", "Don't Know Yet"].map(c => (
                        <button key={c} type="button" className="px-3 py-1.5 rounded-full text-xs glass-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Preferred Language</label>
                    <div className="flex gap-2">
                      {["Telugu", "Hindi", "English"].map(l => (
                        <button key={l} type="button" onClick={() => setLanguage(l)} className={`px-4 py-2 rounded-lg text-sm transition-all ${language === l ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground"}`}>
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-muted border border-border/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Select...</option>
                      <option>YouTube</option><option>Instagram</option><option>Friend</option>
                      <option>WhatsApp</option><option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-blue-400 text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    ✨ Submit — We'll Get Back in 1 Hour!
                  </button>
                  <p className="text-xs text-muted-foreground text-center">🔒 Your information is 100% private. No spam.</p>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">We've Received Your Details!</h3>
                  <p className="text-muted-foreground mb-6">Expect a WhatsApp message from us within 1 hour 🎉</p>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent("Check out VybeSchool — AI courses built just for you! https://vybeschool.com/learn")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold"
                  >
                    Tell a Friend via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====== FREE COURSES TAB ====== */}
      {activeTab === "free" && (
        <section className="section-padding bg-background">
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Free AI Courses — <span className="text-gradient-primary">Start Learning Today</span>
              </h2>
              <p className="text-muted-foreground">100% free. No credit card. No catch. Just pure AI education.</p>
            </div>
            <div className="lg:w-1/2">
              <img src={freeCoursesImg} alt="Free Courses" width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {freeCourses.filter(c => !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase())).map((course, i) => (
              <div key={i} className="glass-card-hover overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-blue-400/10 flex items-center justify-center relative">
                  <Play className="w-10 h-10 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/20 text-green-400">FREE</span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/20 text-primary">{course.level}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2 line-clamp-2">{course.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="w-3 h-3" /> {course.duration}
                    <span>•</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-foreground font-medium">{course.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{(course.students / 1000).toFixed(1)}k students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ====== PAID COURSES TAB ====== */}
      {activeTab === "courses" && (
        <section className="section-padding bg-background">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium AI Courses — <span className="text-gradient-primary">Career Changing</span>
          </h2>
          <p className="text-muted-foreground mb-10">Deep, hands-on programs designed to get you hired.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidCourses.filter(c => !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase())).map((course, i) => (
              <div key={i} className="glass-card-hover overflow-hidden group">
                <div className="h-44 bg-gradient-to-br from-primary/30 via-blue-500/10 to-purple-500/10 flex items-center justify-center relative">
                  <Play className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/20 text-primary">{course.level}</span>
                  <Lock className="absolute top-3 right-3 w-4 h-4 text-muted-foreground" />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-foreground mb-3 line-clamp-2">{course.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-foreground font-medium">{course.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({(course.students / 1000).toFixed(1)}k)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-foreground">{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Learn;
