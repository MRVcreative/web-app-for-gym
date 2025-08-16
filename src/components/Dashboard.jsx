
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart, 
  Calendar, 
  Home, 
  Settings, 
  User, 
  LogOut,
  TrendingUp,
  Target,
  Dumbbell,
  Users,
  MessageSquare,
  Brain,
  Utensils,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { DailyProgress } from "@/components/DailyProgress";
import { UpcomingClasses } from "@/components/UpcomingClasses";
import { AIRecommendations } from "@/components/AIRecommendations";
import { Community } from "@/components/Community";
import { Profile } from "@/components/Profile";
import { Progress } from "@/components/Progress";
import { Schedule } from "@/components/Schedule";
import { Settings as SettingsComponent } from "@/components/Settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsDesktop(window.innerWidth > 768);
      
      // Add resize listener
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
  };

  const stats = [
    { label: "Workouts", value: "12", change: "+2", icon: Dumbbell },
    { label: "Calories", value: "1,248", change: "+248", icon: Target },
    { label: "Progress", value: "68%", change: "+4%", icon: TrendingUp },
  ];

  const motivationalQuotes = [
    "Every rep brings you closer to your goals!",
    "Your only competition is yourself yesterday.",
    "Small progress is still progress.",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "ai", label: "AI Coach", icon: Brain },
    { id: "community", label: "Community", icon: Users },
    { id: "profile", label: "Profile", icon: User },
    { id: "progress", label: "Progress", icon: BarChart },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || isDesktop) && (
          <motion.aside 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className={`
              fixed md:relative z-40 h-full w-64 bg-black p-6 flex flex-col
              ${isSidebarOpen ? 'block' : 'hidden md:flex'}
            `}
          >
            <div className="flex items-center gap-3 mb-10">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FitTech</span>
            </div>

            <nav className="flex-1">
              {navigationItems.map((item) => (
                <Button 
                  key={item.id}
                  variant={activeTab === item.id ? "secondary" : "ghost"} 
                  className="w-full justify-start mb-2"
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </nav>

            <Button 
              variant="ghost" 
              className="w-full justify-start mt-auto text-red-400 hover:text-red-500 hover:bg-red-500/10"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 md:ml-0">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between mb-8 mt-12 md:mt-0"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-sm md:text-base text-zinc-400">{randomQuote}</p>
              </div>
            </div>
          </motion.div>

          {/* Content Tabs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "dashboard" && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <Card key={index} className="bg-black p-6">
                        <div className="flex items-center justify-between mb-4">
                          <stat.icon className="h-6 w-6 text-primary" />
                          <span className="text-sm text-green-500">{stat.change}</span>
                        </div>
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-zinc-400 text-sm">{stat.label}</div>
                      </Card>
                    ))}
                  </div>

                  {/* Progress and Classes */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <DailyProgress />
                    <UpcomingClasses />
                  </div>
                </div>
              )}

              {activeTab === "ai" && <AIRecommendations />}
              {activeTab === "community" && <Community />}
              {activeTab === "profile" && <Profile />}
              {activeTab === "progress" && <Progress />}
              {activeTab === "schedule" && <Schedule />}
              {activeTab === "settings" && <SettingsComponent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
