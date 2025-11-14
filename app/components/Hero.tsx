"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-white via-white to-mint"
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Empowering Innovation.
            <br />
            <span className="text-mint font-extrabold">Engineering the Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Dasens is the parent company behind <span className="font-semibold text-mint-selected">InventGenie</span>, 
            an AI-powered patent drafting platform that transforms ideas into ready-to-file patent applications, 
            and <span className="font-semibold text-mint-selected">SmartSRED</span>, an AI-powered SR&ED tax credit platform 
            that streamlines claims, maximizes returns, and ensures audit-ready compliance for Canadian companies. 
            We drive innovation through R&D excellence, intellectual property, and advanced engineering consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("ventures")}
              className="group"
            >
              Our Ventures
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
            <Button
              variant="success"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mint/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mint/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
