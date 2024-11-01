"use client";

import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <Cpu className="h-12 w-12 text-primary animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Next-Gen AI Solutions
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Harness the power of artificial intelligence to transform your business with our cutting-edge SaaS platform.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}