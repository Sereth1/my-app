"use client";
import MessengerChat from "@/components/MessegeChat";
import { useEffect } from "react";
import AgentDemo from "../components/AgentDemo";
import Benefits from "../components/Benefits";
import CaseStudies from "../components/CaseStudies";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Stats from "../components/Stats";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Select all elements with the 'reveal' class and observe them
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-900 text-white">
      <Hero />
      <Benefits />
      <Stats />
      <AgentDemo />
      <CaseStudies />
      <Features />
      <Pricing />
      <MessengerChat />
    </div>
  );
};

export default Index;
