
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { format } from "date-fns";

export function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const classes = [
    {
      id: 1,
      name: "HIIT Training",
      trainer: {
        name: "Sarah Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      time: "10:00 AM",
      duration: "45 min",
      location: "Studio A",
      spots: 8,
      maxSpots: 12,
    },
    {
      id: 2,
      name: "Yoga Flow",
      trainer: {
        name: "Mike Chen",
        avatar: "https://github.com/shadcn.png",
      },
      time: "2:00 PM",
      duration: "60 min",
      location: "Studio B",
      spots: 5,
      maxSpots: 15,
    },
    {
      id: 3,
      name: "Personal Training",
      trainer: {
        name: "Emma Davis",
        avatar: "https://github.com/shadcn.png",
      },
      time: "4:00 PM",
      duration: "60 min",
      location: "Training Area",
      spots: 1,
      maxSpots: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-1"
      >
        <Card className="bg-black p-6">
          <h2 className="text-xl font-bold mb-6">Select Date</h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border border-zinc-800"
          />
        </Card>
      </motion.div>

      {/* Available Classes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2"
      >
        <Card className="bg-black p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Available Classes for {format(selectedDate, "MMMM d, yyyy")}
            </h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {classes.map((classItem) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-zinc-900 p-4 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={classItem.trainer.avatar} />
                      <AvatarFallback>
                        {classItem.trainer.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{classItem.name}</h3>
                      <p className="text-sm text-zinc-400">
                        with {classItem.trainer.name}
                      </p>
                      <div className="flex gap-4 mt-2 text-sm text-zinc-400">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {classItem.time} ({classItem.duration})
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {classItem.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {classItem.spots}/{classItem.maxSpots} spots
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
