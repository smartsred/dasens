"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/app/components/ui/card";
import { ExternalLink } from "lucide-react";
import inventGenieLogo from "@/app/assets/inventgenie_logo.png";
import smartSREDLogo from "@/app/assets/smartsred_logo.png";

const Ventures = () => {
  const ventures = [
    {
      name: "InventGenie",
      logo: inventGenieLogo,
      description:
        "AI-powered patent drafting platform that transforms ideas into ready-to-file patent applications. From concept to IP, instantly.",
      url: "https://www.inventgenie.com/",
    },
    {
      name: "SmartSRED",
      logo: smartSREDLogo,
      description:
        "AI-powered SR&ED tax credit platform that streamlines claims, maximizes returns, and ensures audit-ready compliance for Canadian companies.",
      url: "https://www.smartsred.ca/",
    },
  ];

  return (
    <section id="ventures" className="py-24 bg-gradient-to-b from-white via-white to-mint">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Our Ventures
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto font-medium">
            Transforming industries through innovation and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <a
              key={index}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="border-0 hover:border-2 hover:border-mint/40 transition-all duration-300 bg-white hover:-translate-y-2 cursor-pointer h-full group"
              >
                <CardHeader>
                  <div className="flex flex-col items-center mb-6">
                    <img 
                      src={venture.logo.src} 
                      alt={`${venture.name} logo`}
                      className="h-20 w-auto mb-4"
                    />
                  </div>
                  <CardDescription className="text-lg leading-relaxed text-center">
                    {venture.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-mint-hover font-medium group-hover:text-mint-button-hover transition-colors">
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
