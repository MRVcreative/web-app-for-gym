
import React from "react";
import { motion } from "framer-motion";

export function WorkoutChart() {
  const data = [65, 59, 80, 81, 56, 55, 40];
  const maxValue = Math.max(...data);

  return (
    <div className="h-64 flex items-end gap-4">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        return (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full bg-blue-500/20 rounded-lg relative group"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute bottom-0 w-full bg-blue-500 rounded-lg"
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {value}
              </div>
            </motion.div>
            <span className="text-sm text-gray-400">{days[index]}</span>
          </div>
        );
      })}
    </div>
  );
}
