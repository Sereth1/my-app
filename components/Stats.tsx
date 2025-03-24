"use client";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: 40,
    unit: "%",
    label: "Average cost reduction",
    description:
      "Businesses implementing AI agents report significant operational cost savings",
  },
  {
    value: 70,
    unit: "%",
    label: "Faster response times",
    description:
      "AI-powered solutions dramatically improve customer service speed",
  },
  {
    value: 24,
    unit: "/7",
    label: "Availability",
    description:
      "Unlike human agents, AI assistants work around the clock without breaks",
  },
  {
    value: 90,
    unit: "%",
    label: "Customer satisfaction",
    description: "Higher resolution rates and consistent service quality",
  },
];

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter animation
  const animateCounter = (
    element: HTMLElement,
    end: number,
    duration: number
  ) => {
    let startTimestamp: number | null = null;
    const start = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      element.textContent = currentCount.toString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end.toString();
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // Only animate counters once
            if (!hasAnimated && entry.target.id === "stats-section") {
              const counters = entry.target.querySelectorAll(".counter");
              counters.forEach((counter, index) => {
                const value = stats[index].value;
                animateCounter(counter as HTMLElement, value, 1500);
              });
              setHasAnimated(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const revealElements = statsRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="stats"
      ref={statsRef}
      className="py-24 relative overflow-hidden bg-navy-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,255,218,0.07),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/20 to-transparent"></div>

      <div id="stats-section" className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
              Real Results
            </span>
          </div>

          <h2 className="heading-lg reveal delay-1">
            <span className="text-gradient">Measurable Impact</span> on Business
            Performance
          </h2>

          <p className="body-md text-white/70 mt-6 reveal delay-2">
            Our AI solutions deliver quantifiable improvements across all
            aspects of your customer interactions and internal processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal px-6 py-10 rounded-xl glass border border-white/5 hover:border-aqua-500/20 transition-all duration-300 text-center group"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                <span className="counter text-5xl font-bold text-white group-hover:text-aqua-500 transition-colors duration-300">
                  0
                </span>
                <span className="text-5xl font-bold text-aqua-500">
                  {stat.unit}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>

              <p className="text-white/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
