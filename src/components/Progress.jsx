
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Calendar, TrendingUp, Weight, Ruler } from "lucide-react";

export function Progress() {
  const weightData = [
    { date: "Jan", value: 85 },
    { date: "Feb", value: 83 },
    { date: "Mar", value: 82 },
    { date: "Apr", value: 80 },
    { date: "May", value: 78 },
    { date: "Jun", value: 77 },
  ];

  const strengthData = [
    { date: "Jan", value: 100 },
    { date: "Feb", value: 110 },
    { date: "Mar", value: 115 },
    { date: "Apr", value: 120 },
    { date: "May", value: 125 },
    { date: "Jun", value: 130 },
  ];

  const measurements = [
    { label: "Weight", value: "77 kg", change: "-8 kg", icon: Weight },
    { label: "Body Fat", value: "18%", change: "-4%", icon: Ruler },
    { label: "Muscle Mass", value: "35%", change: "+3%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      {/* Measurements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {measurements.map((stat, index) => (
          <Card key={index} className="bg-black p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-primary" />
              <span className={`text-sm ${
                stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-zinc-400 text-sm">{stat.label}</div>
          </Card>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weight Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-6">Weight Progress</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000",
                      border: "1px solid #333",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Strength Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-6">Strength Progress</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={strengthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000",
                      border: "1px solid #333",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Progress Photos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-black p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Progress Photos</h3>
            <Button>Upload New Photo</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-zinc-900 rounded-lg flex items-center justify-center">
              <Calendar className="h-8 w-8 text-zinc-700" />
            </div>
            <div className="aspect-square bg-zinc-900 rounded-lg flex items-center justify-center">
              <Calendar className="h-8 w-8 text-zinc-700" />
            </div>
            <div className="aspect-square bg-zinc-900 rounded-lg flex items-center justify-center">
              <Calendar className="h-8 w-8 text-zinc-700" />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
