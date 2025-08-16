
import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Calendar, 
  TrendingUp, 
  Activity,
  Dumbbell,
  Apple,
  ChevronRight,
  Bell
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { WorkoutChart } from "@/components/WorkoutChart";
import { CircularProgress } from "@/components/CircularProgress";
import { useToast } from "@/components/ui/use-toast";

export function UserDashboard() {
  const { toast } = useToast();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleWorkoutStart = () => {
    toast({
      title: "Workout Started! 💪",
      description: "Let's crush those goals today!",
    });
  };

  const upcomingClasses = [
    {
      name: "HIIT Training",
      time: "10:00 AM",
      trainer: "Alex Smith",
      spots: 3,
    },
    {
      name: "Yoga Flow",
      time: "2:00 PM",
      trainer: "Emma Davis",
      spots: 5,
    },
  ];

  const stats = [
    { label: "Workouts", value: "22", total: "30" },
    { label: "Hours", value: "45", total: "60" },
    { label: "Calories", value: "12.5k", total: "15k" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <User className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, David</h1>
            <p className="text-gray-400">Let's check your progress</p>
          </div>
        </div>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1C1C1E] p-4 rounded-xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-sm text-gray-500">
                    Goal: {stat.total}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <Progress value={(parseInt(stat.value) / parseInt(stat.total)) * 100} />
              </motion.div>
            ))}
          </div>

          {/* Workout Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1C1C1E] p-6 rounded-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Workout Progress</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
              </div>
            </div>
            <WorkoutChart />
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1C1C1E] p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Today's Workout</h3>
                  <p className="text-sm text-gray-400">Upper Body Focus</p>
                </div>
              </div>
              <Button onClick={handleWorkoutStart} className="w-full">
                Start Workout
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1C1C1E] p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Apple className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Nutrition</h3>
                  <p className="text-sm text-gray-400">1,200 / 2,000 kcal</p>
                </div>
              </div>
              <Progress value={60} className="mb-2" />
              <p className="text-sm text-gray-400">60% of daily goal</p>
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1C1C1E] p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img 
                  className="w-16 h-16 rounded-xl object-cover"
                  alt="User profile picture"
                 src="https://images.unsplash.com/photo-1599270514441-242889f01862" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1C1C1E]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">David Chen</h2>
                <p className="text-gray-400">Premium Member</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400 mb-1">Weight</p>
                <p className="text-xl font-semibold">75 kg</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Height</p>
                <p className="text-xl font-semibold">180 cm</p>
              </div>
            </div>

            <CircularProgress value={progress} />
          </motion.div>

          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1C1C1E] p-6 rounded-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
            <div className="space-y-4">
              {upcomingClasses.map((class_, index) => (
                <div
                  key={index}
                  className="bg-[#2C2C2E] p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{class_.name}</h3>
                      <p className="text-sm text-gray-400">with {class_.trainer}</p>
                    </div>
                    <span className="text-blue-500">{class_.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {class_.spots} spots left
                    </span>
                    <Button variant="ghost" size="sm">
                      Join <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
