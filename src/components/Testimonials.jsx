
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member since 2023",
      content:
        "The AI-powered workouts have completely transformed my fitness journey. I've seen more progress in 3 months than I did in a year at my old gym!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Member since 2022",
      content:
        "The trainers here are exceptional. They're knowledgeable, supportive, and truly care about helping you achieve your goals.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Member since 2023",
      content:
        "I love the flexibility of the membership options. Whether you're a beginner or advanced, there's a perfect plan for everyone.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-8 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
