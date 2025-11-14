import { TrendingUp, FileCheck, Award, Rocket } from "lucide-react";

const InnovationSupport = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Manage R&D Projects",
      description: "Streamline research workflows and documentation",
    },
    {
      icon: TrendingUp,
      title: "Optimize Tax Credits",
      description: "Maximize SR&ED and innovation incentives",
    },
    {
      icon: Award,
      title: "Strengthen IP Portfolios",
      description: "Build valuable intellectual property assets",
    },
    {
      icon: Rocket,
      title: "Long-term Value",
      description: "Transform research into sustainable growth",
    },
  ];

  return (
    <section id="innovation-support" className="py-24 bg-gradient-to-b from-mint via-white to-white dark:from-mint dark:via-black dark:to-mint">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Fueling R&D Success
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed font-medium">
            Innovation doesn't stop at ideas, it's built through systems. Using{" "}
            <span className="font-semibold text-mint-selected">InventGenie</span>, an AI-powered patent drafting 
            platform that transforms ideas into ready-to-file patent applications. From concept to IP, instantly. 
            We help organizations manage R&D, optimize tax credits, and strengthen intellectual property portfolios, 
            turning research into long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black shadow-lg p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint/10 mb-4">
                <feature.icon className="w-8 h-8 text-mint-selected" />
              </div>
              <h4 className="font-heading text-lg font-bold text-card-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSupport;
