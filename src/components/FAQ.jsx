
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How does the AI-powered workout system work?",
      answer:
        "Our AI system analyzes your fitness level, goals, and progress to create personalized workout plans. It continuously adapts based on your performance and feedback.",
    },
    {
      question: "What types of membership plans do you offer?",
      answer:
        "We offer flexible plans including monthly, quarterly, and annual memberships. Each plan can be customized with add-ons like personal training or specialized classes.",
    },
    {
      question: "Are your trainers certified?",
      answer:
        "Yes, all our trainers are certified professionals with extensive experience. They undergo regular training to stay updated with the latest fitness trends and techniques.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Yes, you can freeze your membership for up to 3 months per year. This is perfect for vacations or busy periods in your life.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Frequently Asked Questions
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
