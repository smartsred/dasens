import { Leaf, Gauge, TrendingUp, Database } from "lucide-react";

const CleanEnergy = () => {
  const impactAreas = [
    {
      icon: Leaf,
      title: "Renewable Energy Devices",
      description: "Innovative systems for sustainable power generation",
    },
    {
      icon: Gauge,
      title: "Smart Sensors & IoT",
      description: "Real-time monitoring for enhanced efficiency",
    },
    {
      icon: TrendingUp,
      title: "Energy Optimization",
      description: "Data-driven solutions to reduce consumption",
    },
    {
      icon: Database,
      title: "Sustainability Solutions",
      description: "Comprehensive environmental impact reduction",
    },
  ];

  return (
    <section id="clean-energy" className="py-24 bg-gradient-to-b from-white via-white to-mint dark:from-black dark:via-black dark:to-mint">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Engineering a Sustainable Future
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed font-medium">
            At Dasens, sustainability is built into everything we do. Through our venture{" "}
            <span className="font-semibold text-mint-selected">SmartSRED</span>, an AI-powered SR&ED tax credit 
            platform that streamlines claims, maximizes returns, and ensures audit-ready compliance for 
            Canadian companies, we help organizations optimize their R&D investments in clean energy 
            and sustainable technologies, enabling the global transition to renewable power.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-center mb-12 text-foreground">
            Impact Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black shadow-lg p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint/10 mb-4">
                  <area.icon className="w-8 h-8 text-mint-selected" />
                </div>
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

export default CleanEnergy;
