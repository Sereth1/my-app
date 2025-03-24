"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Stats from "../components/Stats";
import CaseStudies from "../components/CaseStudies";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import MessengerChat from "@/components/MessegeChat";
import AgentDemo from "../components/AgentDemo";

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
      <Navbar />
      <Hero />
      <Benefits />
      <Stats />
      <AgentDemo />
      <CaseStudies />
      <Features />
      <Pricing />
      <Footer />
      <MessengerChat />
    </div>
  );
};

export default Index;
