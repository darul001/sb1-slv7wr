"use client";

import { Card } from "@/components/ui/card";
import { MessageSquare, ImageIcon, VideoIcon, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Advanced Chat AI",
    description: "Engage with our sophisticated AI chatbot for natural conversations and support.",
  },
  {
    icon: <ImageIcon className="h-6 w-6" />,
    title: "Image Generation",
    description: "Create stunning visuals and artwork using our AI-powered image generator.",
  },
  {
    icon: <VideoIcon className="h-6 w-6" />,
    title: "Video Analysis",
    description: "Extract insights and data from videos with our advanced AI analysis.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Code Assistant",
    description: "Get help with coding and debugging from our specialized AI assistant.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-background/50 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}