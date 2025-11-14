import { Target, Lightbulb, Shield, Globe } from "lucide-react";

const About = () => {
  const focusAreas = [
    {
      icon: Lightbulb,
      title: "R&D Innovation",
      description: "Technology Development & Research Excellence",
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description: "Patent Strategy & IP Management",
    },
    {
      icon: Target,
      title: "R&D Funding",
      description: "Tax Credits & Incentives for SMEs",
    },
    {
      icon: Globe,
      title: "Clean Energy",
      description: "Sustainable & Energy Systems",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-mint via-white to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            About Dasens
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-medium">
            Dasens is the parent company behind{" "}
            <span className="font-semibold text-mint-selected">InventGenie</span>, an AI-powered patent drafting 
            platform that transforms ideas into ready-to-file patent applications. From concept to IP, instantly. 
            And <span className="font-semibold text-mint-selected">SmartSRED</span>, an AI-powered SR&ED tax credit 
            platform that streamlines claims, maximizes returns, and ensures audit-ready compliance for Canadian companies.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-medium">
            With expertise spanning engineering, innovation strategy, and sustainability, we transform
            ideas into scalable solutions that create measurable impact through cutting-edge AI technology 
            and deep domain expertise.
          </p>
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
            <p className="font-semibold text-lg text-foreground">
              <span className="text-mint-selected">Mission:</span> To accelerate global innovation by
              bridging research, technology, and sustainable industrial practice through AI-powered 
              platforms that transform ideas into intellectual property and maximize R&D tax credits.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-center mb-12 text-foreground">
            Core Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <area.icon className="w-12 h-12 text-mint-selected mb-4" />
                <h4 className="font-heading text-lg font-bold text-card-foreground mb-2">
                  {area.title}
                </h4>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
