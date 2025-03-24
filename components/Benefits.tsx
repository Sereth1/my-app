import React, { useEffect, useRef } from "react";
import { Clock, DollarSign, Award, ChartBar } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Efficiency Improvement",
    description:
      "Automate routine tasks and queries, allowing your team to focus on strategic initiatives that drive business growth.",
    color: "from-blue-500 to-accent",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "Minimize operational expenses by implementing AI agents that operate 24/7 without requiring breaks, benefits, or overtime.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Award,
    title: "Enhanced Accuracy",
    description:
      "Eliminate human error with intelligent agents that deliver consistent, precise responses and solutions every time.",
    color: "from-purple-500 to-violet-400",
  },
  {
    icon: ChartBar,
    title: "Scalable Operations",
    description:
      "Easily handle volume fluctuations without hiring additional staff or compromising service quality.",
    color: "from-amber-500 to-orange-400",
  },
];

const Benefits = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = benefitsRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="benefits"
      ref={benefitsRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-aqua-500/5 via-transparent to-transparent opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
              Why Choose AI Agents
            </span>
          </div>

          <h2 className="heading-lg reveal delay-1">
            Transform Your Business Operations with{" "}
            <span className="text-gradient">Intelligent Automation</span>
          </h2>

          <p className="body-md text-white/70 mt-6 reveal delay-2">
            AI chat-bot agents powered by n8n deliver tangible advantages that
            positively impact your bottom line while enhancing customer and
            employee experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="reveal delay-1 p-8 rounded-xl glass hover:shadow-glow transition-all duration-500 group"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${benefit.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="heading-md mb-4 group-hover:text-aqua-500 transition-colors duration-300">
                {benefit.title}
              </h3>

              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal delay-4">
          <a href="#stats" className="btn-outline">
            See the Numbers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
