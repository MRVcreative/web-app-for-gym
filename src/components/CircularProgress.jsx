
import React from "react";
import { motion } from "framer-motion";

export function CircularProgress({ value }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90 w-32 h-32">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-blue-500/20"
        />
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-blue-500"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold">{value}%</span>
        <span className="text-sm text-gray-400">Weekly Goal</span>
      </div>
    </div>
  );
}
