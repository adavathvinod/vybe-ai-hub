const testimonials = [
  {
    name: "Jaimit Doshi",
    role: "Chief Marketing Officer",
    company: "Lenskart",
    quote: "I spent the last decade leading marketing & growth for Kotak, Aditya Birla & Lenskart. Its been 4 years since I became a VybeSchool member & its been a ride. VybeSchool is its people – ambitious, hungry & empathetic. This curated set of bunch will push you to transform into a truly exceptional leader.",
  },
  {
    name: "Merlin Mandanna",
    role: "AI Partnerships",
    company: "Meta",
    quote: "VybeSchool is a rare community where curiosity and expertise intersect. Whether it's scaling GTM or exploring what's next in AI, you're exchanging notes with people who are in the arena – learning, iterating, scaling. The shared hunger to push boundaries is unmistakable.",
  },
  {
    name: "Shreesh Shirpurkar",
    role: "Go to Market Strategy",
    company: "sarvam.ai",
    quote: "The real value of VybeSchool is the community. Every conversation sharpens my thinking. Every event is a delta and the learning platform is problem solving on demand. It's like having 100+ leaders on speed dial.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="grid md:grid-cols-3 gap-5">
      {testimonials.map((t) => (
        <div key={t.name} className="glass-card p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {t.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
