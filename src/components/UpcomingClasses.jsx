
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export function UpcomingClasses() {
  const classes = [
    {
      name: "HIIT Training",
      trainer: "Sarah Johnson",
      time: "10:00 AM",
      date: "Today",
    },
    {
      name: "Yoga Flow",
      trainer: "Mike Chen",
      time: "2:00 PM",
      date: "Today",
    },
    {
      name: "Strength Training",
      trainer: "Emma Davis",
      time: "11:00 AM",
      date: "Tomorrow",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-black p-6">
        <h2 className="text-xl font-bold mb-6">Upcoming Classes</h2>
        <div className="space-y-4">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-4 rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{classItem.name}</h3>
                  <p className="text-zinc-400 text-sm">with {classItem.trainer}</p>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex gap-4 text-sm text-zinc-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {classItem.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {classItem.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
