import workshopImg from "@/assets/event-workshop.jpg";
import expertsImg from "@/assets/experts-network.jpg";
import speakerImg from "@/assets/speaker-talk.jpg";

const cards = [
  {
    image: workshopImg,
    title: "Build agents at events",
    desc: "Go from absolute scratch to advanced multi agents. Whether you are a developer or not.",
  },
  {
    image: expertsImg,
    title: "Learn AI from top experts",
    desc: "Online sessions from leaders at OpenAI, Google, Microsoft, and more.",
  },
  {
    image: speakerImg,
    title: "Network with leaders",
    desc: "Access the creme layer of AI leaders in the country & the world. Design thoughtful career moves.",
  },
];

const MembershipSection = () => (
  <section className="section-padding bg-background">
    <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-14 italic">
      Everything inside the membership
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="group">
          <div className="rounded-xl overflow-hidden mb-5 aspect-[4/3]">
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">{card.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MembershipSection;
