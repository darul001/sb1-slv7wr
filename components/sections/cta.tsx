"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already transforming their operations with our AI solutions.
        </p>
        <Button size="lg" variant="secondary" className="group">
          Start Your Free Trial
          <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition" />
        </Button>
      </div>
    </section>
  );
}