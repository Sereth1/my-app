import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, BarChart, Check, Clock, Shield } from "lucide-react";
import React, { useEffect, useRef } from "react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential AI agent capabilities for small businesses",
    monthly: 29,
    yearly: 290,
    features: [
      "Single AI chat-bot agent",
      "5,000 messages per month",
      "Basic analytics dashboard",
      "Email support",
      "Regular updates",
    ],
    color: "border-blue-500",
    icon: Clock,
    recommended: false,
  },
  {
    name: "Professional",
    description: "Advanced capabilities for growing businesses",
    monthly: 79,
    yearly: 790,
    features: [
      "3 custom AI chat-bot agents",
      "25,000 messages per month",
      "Advanced analytics & reporting",
      "Priority email support",
      "Custom integrations",
      "Workflow automation",
    ],
    color: "border-aqua-500",
    icon: BarChart,
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organizations",
    monthly: 199,
    yearly: 1990,
    features: [
      "Unlimited AI chat-bot agents",
      "100,000 messages per month",
      "Enterprise analytics suite",
      "24/7 dedicated support",
      "Custom development",
      "Advanced security features",
      "SLA guarantees",
    ],
    color: "border-purple-500",
    icon: Shield,
    recommended: false,
  },
];

const featureComparison = [
  {
    category: "Agents",
    features: [
      {
        name: "AI Agent Deployment",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom Agent Training",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Agent Templates",
        basic: "5 templates",
        professional: "20 templates",
        enterprise: "Unlimited",
      },
      {
        name: "Multi-language Support",
        basic: "3 languages",
        professional: "10 languages",
        enterprise: "50+ languages",
      },
    ],
  },
  {
    category: "Capabilities",
    features: [
      {
        name: "Natural Language Processing",
        basic: "Basic",
        professional: "Advanced",
        enterprise: "Enterprise-grade",
      },
      {
        name: "Data Processing Capacity",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Integration Capabilities",
        basic: "Limited",
        professional: "Advanced",
        enterprise: "Unlimited",
      },
      {
        name: "Workflow Automation",
        basic: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Security",
    features: [
      {
        name: "Customer Support",
        basic: "Email",
        professional: "Priority Email",
        enterprise: "24/7 Dedicated",
      },
      {
        name: "Security Features",
        basic: "Standard",
        professional: "Advanced",
        enterprise: "Enterprise-grade",
      },
      {
        name: "SLA Guarantees",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Training & Onboarding",
        basic: "Self-service",
        professional: "Guided setup",
        enterprise: "Full onboarding",
      },
    ],
  },
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

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

    const revealElements = pricingRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={pricingRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,200,255,0.05),transparent_70%)] opacity-70"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/20 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
              Pricing Plans
            </span>
          </div>

          <h2 className="heading-lg reveal delay-1">
            Choose the Perfect Plan for Your{" "}
            <span className="text-gradient">Business Needs</span>
          </h2>

          <p className="body-md text-white/70 mt-6 reveal delay-2">
            Flexible pricing options designed to scale with your business. From
            startups to enterprises, we have a solution that fits your
            requirements.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8 reveal delay-2">
            <TabsList className="bg-navy-800/50 border border-white/10">
              <TabsTrigger
                value="monthly"
                className="text-white data-[state=active]:bg-aqua-500 data-[state=active]:text-navy-900"
              >
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="text-white data-[state=active]:bg-aqua-500 data-[state=active]:text-navy-900"
              >
                Yearly Billing{" "}
                <span className="ml-1.5 text-xs bg-aqua-500/20 px-2 py-0.5 rounded-full text-aqua-500">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`reveal delay-${
                    index + 2
                  } bg-navy-800/30 border-t-4 ${
                    plan.color
                  } hover:shadow-glow transition-all duration-300`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  {plan.recommended && (
                    <div className="bg-aqua-500 text-navy-900 text-xs font-semibold px-3 py-1 rounded-b-md inline-block mx-auto -mt-px">
                      RECOMMENDED
                    </div>
                  )}

                  <CardHeader>
                    <div className="w-12 h-12 bg-aqua-500/10 rounded-lg flex items-center justify-center mb-4">
                      <plan.icon className="h-6 w-6 text-aqua-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">
                          ${plan.monthly}
                        </span>
                        <span className="text-white/70 ml-2">/month</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-aqua-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? "bg-aqua-500 text-navy-900 hover:bg-aqua-400"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`reveal delay-${
                    index + 2
                  } bg-navy-800/30 border-t-4 ${
                    plan.color
                  } hover:shadow-glow transition-all duration-300`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  {plan.recommended && (
                    <div className="bg-aqua-500 text-navy-900 text-xs font-semibold px-3 py-1 rounded-b-md inline-block mx-auto -mt-px">
                      RECOMMENDED
                    </div>
                  )}

                  <CardHeader>
                    <div className="w-12 h-12 bg-aqua-500/10 rounded-lg flex items-center justify-center mb-4">
                      <plan.icon className="h-6 w-6 text-aqua-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">
                          ${plan.yearly}
                        </span>
                        <span className="text-white/70 ml-2">/year</span>
                      </div>
                      <div className="text-aqua-500 text-sm mt-1">
                        ${Math.round(plan.yearly / 12)} per month, billed
                        annually
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-aqua-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? "bg-aqua-500 text-navy-900 hover:bg-aqua-400"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-24 reveal delay-5">
          <h3 className="heading-md text-center mb-12">Feature Comparison</h3>

          <div className="overflow-x-auto glass border border-white/10 rounded-xl">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-navy-800/50 border-b border-white/10">
                  <TableHead className="text-white font-medium w-1/3">
                    Feature
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Basic
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Professional
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Enterprise
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {featureComparison.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <TableRow className="bg-aqua-500/5 border-b border-white/5">
                      <TableCell
                        colSpan={4}
                        className="font-semibold text-aqua-500"
                      >
                        {category.category}
                      </TableCell>
                    </TableRow>

                    {category.features.map((feature, featureIndex) => (
                      <TableRow
                        key={featureIndex}
                        className="border-b border-white/5"
                      >
                        <TableCell className="font-medium">
                          {feature.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof feature.basic === "boolean" ? (
                            feature.basic ? (
                              <Check className="h-5 w-5 text-aqua-500 mx-auto" />
                            ) : (
                              <span className="text-white/40">—</span>
                            )
                          ) : (
                            feature.basic
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="h-5 w-5 text-aqua-500 mx-auto" />
                            ) : (
                              <span className="text-white/40">—</span>
                            )
                          ) : (
                            feature.professional
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-aqua-500 mx-auto" />
                            ) : (
                              <span className="text-white/40">—</span>
                            )
                          ) : (
                            feature.enterprise
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-16 text-center reveal delay-6">
          <div className="glass border border-white/10 rounded-xl p-8 max-w-3xl mx-auto">
            <BadgeCheck className="h-12 w-12 text-aqua-500 mx-auto mb-4" />
            <h3 className="heading-md mb-4">Need a Custom Solution?</h3>
            <p className="text-white/70 mb-6">
              Contact our sales team to discuss a customized plan tailored to
              your organization&apos;s specific requirements and scale.
            </p>
            <Button className="bg-aqua-500 text-navy-900 hover:bg-aqua-400">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
