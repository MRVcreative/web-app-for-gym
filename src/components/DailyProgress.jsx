
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DailyProgress() {
  const goals = [
    { name: "Steps", current: 8420, target: 10000, progress: 84 },
    { name: "Water", current: 6, target: 8, progress: 75 },
    { name: "Calories Burned", current: 420, target: 500, progress: 84 },
    { name: "Active Minutes", current: 45, target: 60, progress: 75 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-black p-6">
        <h2 className="text-xl font-bold mb-6">Daily Progress</h2>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-zinc-400">{goal.name}</span>
                <span>
                  {goal.current} / {goal.target}
                </span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
