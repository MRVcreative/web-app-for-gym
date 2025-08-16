
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, Phone, MapPin, Edit } from "lucide-react";

export function Profile() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    membership: "Premium",
    joinDate: "January 2023",
    goals: ["Weight Loss", "Muscle Gain", "Better Endurance"],
    preferences: ["Morning Workouts", "Group Classes", "High Intensity"],
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/40 rounded-lg" />
        <div className="absolute -bottom-12 left-8 flex items-end gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-black">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-2">
            <h2 className="text-2xl font-bold">{userProfile.name}</h2>
            <p className="text-zinc-400">{userProfile.membership} Member</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="bg-black p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-400">Email</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-4 w-4 text-zinc-400" />
                    <span>{userProfile.email}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Phone</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="h-4 w-4 text-zinc-400" />
                    <span>{userProfile.phone}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-zinc-400">Location</label>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  <span>{userProfile.location}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Membership Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-6">Membership</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400">Current Plan</label>
                <p className="text-lg font-semibold text-primary">
                  {userProfile.membership}
                </p>
              </div>
              <div>
                <label className="text-sm text-zinc-400">Member Since</label>
                <p>{userProfile.joinDate}</p>
              </div>
              <Button className="w-full">Upgrade Plan</Button>
            </div>
          </Card>
        </motion.div>

        {/* Fitness Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-6">Fitness Goals</h3>
            <div className="space-y-2">
              {userProfile.goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 px-4 py-2 rounded-lg text-sm"
                >
                  {goal}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-6">Preferences</h3>
            <div className="space-y-2">
              {userProfile.preferences.map((pref, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 px-4 py-2 rounded-lg text-sm"
                >
                  {pref}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
