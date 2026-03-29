import { ArrowRight, Check, ChevronRight, Code, Database, Bot, Brain, Cloud, Rocket, Award, Star, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import aiEngineeringHero from "@/assets/ai-engineering-hero.jpg";
import sectionPython from "@/assets/section-python.jpg";
import sectionRag from "@/assets/section-rag.jpg";
import sectionAgents from "@/assets/section-agents.jpg";
import sectionDeployment from "@/assets/section-deployment.jpg";

const prerequisites = [
  "No prior coding experience needed",
  "A laptop with internet connection",
  "2–4 hours daily commitment",
  "Hunger to get hired — nothing else required",
];

const sections = [
  {
    num: "01", title: "Python for Engineers", image: sectionPython,
    icon: Code, color: "from-blue-500 to-cyan-400",
    topics: [
      "Python fundamentals engineers actually use on the job",
      "Data types, loops, functions, list comprehensions",
      "OOP basics — classes, objects, inheritance",
      "File handling — reading/writing JSON, CSV, TXT",
      "Virtual environments & dependency management (pip, venv)",
      "Writing clean, readable, production-style code",
      "Exception handling & defensive programming",
    ],
    project: "CLI Automation Tool",
  },
  {
    num: "02", title: "Backend Engineering & REST APIs", image: null,
    icon: Database, color: "from-cyan-400 to-teal-400",
    topics: [
      "Backend architecture — how real systems are built",
      "REST API design principles & best practices",
      "FastAPI — routing, middleware, dependency injection",
      "Request validation with Pydantic v2",
      "Authentication basics — API keys & JWT tokens",
      "Rate limiting & request throttling",
      "API versioning & documentation (Swagger/OpenAPI)",
      "Git branching strategy — feature branches, PRs, code review",
    ],
    project: "Production-ready REST API with auth & docs",
  },
  {
    num: "03", title: "Databases & Data Engineering", image: null,
    icon: Database, color: "from-teal-400 to-emerald-400",
    topics: [
      "Relational database design & normalization",
      "Advanced SQL — joins, indexes, aggregations",
      "SQLAlchemy ORM — models, relationships, migrations",
      "Database migrations with Alembic",
      "Connection pooling & query optimization",
      "Redis for caching & session management",
      "Data modeling for AI applications",
    ],
    project: "Scalable User & Data Management System",
  },
  {
    num: "04", title: "LLM Engineering & AI Integration", image: null,
    icon: Brain, color: "from-emerald-400 to-purple-400",
    topics: [
      "LLM internals — transformers, attention, tokenization",
      "OpenAI GPT-4o & Claude — API mastery",
      "Hugging Face Hub — loading & using open source models",
      "Running LLaMA 3, Mistral, Phi-3 locally with Ollama",
      "Advanced prompt engineering — system prompts, few-shot, CoT, ReAct",
      "Structured outputs — JSON mode, function schemas",
      "Token optimization & cost control",
      "Multi-model routing — when to use which model",
    ],
    project: "Production AI Assistant with multi-model support",
  },
  {
    num: "05", title: "Embeddings, Vector Search & Semantic Systems", image: null,
    icon: Brain, color: "from-purple-400 to-violet-400",
    topics: [
      "Embedding models — how they encode meaning",
      "OpenAI text-embedding-3 (small & large)",
      "Hugging Face Sentence Transformers (open source & free)",
      "Cosine similarity, dot product, Euclidean distance",
      "FAISS — local vector index, GPU acceleration",
      "Pinecone, ChromaDB, Weaviate — production vector databases",
      "Chunking strategies — fixed, semantic, recursive",
    ],
    project: "Semantic Search Engine over real documents",
  },
  {
    num: "06", title: "RAG Engineering (Most In-Demand)", image: sectionRag,
    icon: Brain, color: "from-violet-400 to-pink-400",
    topics: [
      "RAG architecture — ingestion, retrieval, augmentation, generation",
      "Advanced document loaders — PDF, DOCX, web scraping",
      "Retrieval strategies — dense, sparse, hybrid",
      "Re-ranking with cross-encoders (Cohere, open source)",
      "Query expansion & HyperRAG techniques",
      "Context window management & stuffing strategies",
      "Prompt injection prevention & output guardrails",
      "Hallucination detection & mitigation",
      "RAG evaluation — RAGAS (faithfulness, relevancy, recall)",
      "Cost-optimized RAG — full open source stack",
    ],
    project: "Enterprise RAG Chatbot over company knowledge base",
  },
  {
    num: "07", title: "AI Agents & Agentic Workflows", image: sectionAgents,
    icon: Bot, color: "from-pink-400 to-rose-400",
    topics: [
      "Agent architecture — perception, planning, action, memory",
      "ReAct, Plan-and-Execute, Reflexion patterns",
      "OpenAI function calling & tool use",
      "Building custom tools for agents",
      "LangGraph — stateful, multi-step agent workflows",
      "Multi-agent systems with AutoGen & CrewAI",
      "Agent memory — short-term, long-term, episodic",
      "Human-in-the-loop agent design",
      "Agent reliability — error recovery, retries, fallbacks",
    ],
    project: "Autonomous AI Agent for business workflow automation",
  },
  {
    num: "08", title: "Fine-Tuning & Model Customization", image: null,
    icon: Brain, color: "from-rose-400 to-orange-400",
    topics: [
      "When to fine-tune vs prompt engineer vs RAG",
      "Dataset preparation & formatting (instruction tuning format)",
      "LoRA & QLoRA — parameter efficient fine-tuning",
      "Fine-tuning LLaMA 3 & Mistral on custom data",
      "Experiment tracking with Weights & Biases",
      "Model evaluation — BLEU, ROUGE, human eval",
      "Serving fine-tuned models with Ollama & vLLM",
    ],
    project: "Domain-specific fine-tuned model (legal / medical / finance)",
  },
  {
    num: "09", title: "Deployment, MLOps & LLMOps", image: sectionDeployment,
    icon: Cloud, color: "from-orange-400 to-amber-400",
    topics: [
      "Docker — containerizing AI applications",
      "Kubernetes basics — pods, services, scaling",
      "CI/CD pipelines with GitHub Actions",
      "Deploying on AWS EC2, GCP Cloud Run, Hugging Face Spaces",
      "Serving LLMs at scale with vLLM & TGI",
      "LLM observability — tracing, logging with Langfuse",
      "Monitoring with Prometheus & Grafana",
      "A/B testing AI models in production",
      "Load testing AI endpoints",
    ],
    project: "Production-deployed AI system — fully monitored & scalable",
  },
  {
    num: "10", title: "AI System Design & Interview Prep", image: null,
    icon: Award, color: "from-amber-400 to-yellow-400",
    topics: [
      "AI system design patterns used at top companies",
      "Designing RAG at scale — 1M+ documents, 10k+ users",
      "Vector database selection & tradeoffs at scale",
      "Latency optimization for real-time AI systems",
      "Caching strategies — semantic cache, prompt cache",
      "Real interview questions from Google, Microsoft, Anthropic",
      "Portfolio & GitHub optimization for AI engineering roles",
      "Resume writing aligned to AI engineering job descriptions",
      "Mock coding & system design interviews with feedback",
      "Salary benchmarking & negotiation playbook",
    ],
    project: null,
  },
  {
    num: "11", title: "Final Capstone + Corporate Demo", image: null,
    icon: Rocket, color: "from-yellow-400 to-primary",
    topics: [
      "Choose your track: AI SaaS Product, Enterprise Knowledge AI, or AI Automation Platform",
      "Production backend with auth & database",
      "LLM integration (OpenAI or fully open source)",
      "RAG pipeline with vector database",
      "Agentic workflows (at least one autonomous agent)",
      "Full cloud deployment with CI/CD",
      "LLM monitoring & observability",
      "Architecture document & cost analysis report",
      "Live demo to panel of industry engineers",
    ],
    project: null,
  },
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

const AIEngineering = () => (
  <>
    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={aiEngineeringHero} alt="AI Engineering Bootcamp" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">Industry-Level Program</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            AI Engineering{" "}
            <span className="text-gradient-primary italic glow-text">Bootcamp</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-4 font-medium">
            Built on real job descriptions. Taught like a senior engineer would.
          </p>
          <p className="text-muted-foreground mb-8">11 sections • 45 days • Production-grade projects • Job-ready</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/bootcamps" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#curriculum" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-medium hover:bg-foreground/10 transition-colors">
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* PREREQUISITES */}
    <section className="section-padding bg-card/40">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
        Prerequisites — <span className="text-gradient-primary">Almost None</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {prerequisites.map((p, i) => (
          <div key={i} className="glass-card-hover p-5 flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{p}</span>
          </div>
        ))}
      </div>
    </section>

    {/* CURRICULUM */}
    <section id="curriculum" className="section-padding bg-background">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
        The <span className="text-gradient-primary">Complete</span> Curriculum
      </h2>
      <p className="text-muted-foreground text-center mb-16 text-lg">11 sections. Zero fluff. 100% job-ready.</p>

      <div className="space-y-12">
        {sections.map((sec, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-start`}>
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.color} flex items-center justify-center text-white font-bold`}>
                  {sec.num}
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{sec.title}</h3>
                  {sec.num === "06" && <span className="text-xs text-primary font-semibold">🔥 Most In-Demand Skill</span>}
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {sec.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {sec.project && (
                <div className="glass-card px-4 py-3 inline-flex items-center gap-2 border-primary/20">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Project: {sec.project}</span>
                </div>
              )}
              {sec.num === "10" && (
                <div className="glass-card px-4 py-3 inline-flex items-center gap-2 border-primary/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">No project — 100% job-readiness focus</span>
                </div>
              )}
            </div>
            {/* Image */}
            {sec.image ? (
              <div className="lg:w-[400px] flex-shrink-0">
                <img src={sec.image} alt={sec.title} width={1280} height={720} loading="lazy" className="rounded-xl border border-border/30 w-full" />
              </div>
            ) : (
              <div className="lg:w-[400px] flex-shrink-0 h-48 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border/20 flex items-center justify-center">
                <sec.icon className="w-16 h-16 text-primary/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* CAPSTONE TRACKS */}
    <section className="section-padding bg-card/40">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
        Capstone <span className="text-gradient-primary">Tracks</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {[
          { title: "AI SaaS Product", desc: "End-to-end AI-powered web product" },
          { title: "Enterprise Knowledge AI", desc: "Internal company intelligence system" },
          { title: "AI Automation Platform", desc: "Multi-agent business automation" },
        ].map((track, i) => (
          <div key={i} className="glass-card-hover p-6 text-center">
            <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{track.title}</h3>
            <p className="text-sm text-muted-foreground">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* JOB ROLES TABLE */}
    <section className="section-padding bg-background">
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
                <td className="p-5 font-semibold text-foreground flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                  {j.role}
                </td>
                <td className="p-5 text-muted-foreground">{j.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Become an <span className="text-gradient-primary">AI Engineer?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          11 sections. Production-grade projects. Live mentorship. Placement support. Everything you need.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 text-sm text-foreground/80 mb-8">
          {["Live mentorship", "11 sections", "Production projects", "Interview prep", "Placement support"].map(f => (
            <li key={f} className="glass-card px-4 py-2 text-sm">✓ {f}</li>
          ))}
        </ul>
        <Link to="/bootcamps" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors">
          Enroll Now <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </>
);

export default AIEngineering;
