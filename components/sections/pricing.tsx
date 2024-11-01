"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    features: ["100 AI Credits", "Basic Support", "1 Project", "Community Access"],
  },
  {
    name: "Pro",
    price: "$99",
    features: ["Unlimited AI Credits", "Priority Support", "10 Projects", "API Access", "Advanced Analytics"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "24/7 Support", "Unlimited Projects", "Dedicated Account Manager", "Custom Integration"],
  },
];

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}