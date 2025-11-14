"use client";

import { Button } from "@/app/components/ui/button";
import {
  FileText,
  Wrench,
  Lightbulb,
  ArrowRight,
  DollarSign,
  Settings,
  Zap,
  Shield,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "R&D Consulting",
      icon: FileText,
      services: [
        "Grant and Proposal Writing",
        "R&D Tax Credit (SR&ED) Support via SmartSRED",
        "Technical Documentation and Roadmapping",
      ],
    },
    {
      title: "Engineering & Innovation",
      icon: Wrench,
      services: [
        "Vibration Analysis and Diagnostics",
        "Oil & Gas and Pipeline Engineering",
        "Sensor Design and Signal Processing",
        "Battery Systems and Energy Storage",
        "Clean Energy and Sustainable System Design",
      ],
    },
    {
      title: "Intellectual Property & Product Development",
      icon: Lightbulb,
      services: [
        "AI-Powered Patent Drafting via InventGenie",
        "Patent Strategy and IP Management",
        "Prototype and Proof-of-Concept Design",
        "Technology Commercialization",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-mint via-white to-white dark:from-mint dark:via-black dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            R&D and Engineering Services
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            We help organizations innovate smarter, combining technical depth with strategic insight. 
            Through our ventures <span className="font-semibold text-mint-selected">InventGenie</span> and{" "}
            <span className="font-semibold text-mint-selected">SmartSRED</span>, we provide AI-powered solutions 
            for patent drafting and SR&ED tax credit optimization, alongside comprehensive R&D and engineering services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black shadow-lg p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <category.icon className="w-12 h-12 text-mint-selected mb-6" />
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="success" size="lg" onClick={scrollToContact} className="group">
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
