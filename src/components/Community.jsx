
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, MessageSquare, Heart, Share2 } from "lucide-react";

export function Community() {
  const [activeChallenge, setActiveChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "30 Days of HIIT",
      participants: 1248,
      progress: 68,
      reward: "Gold Badge",
      endDate: "Oct 15, 2023",
    },
    {
      id: 2,
      title: "10K Steps Daily",
      participants: 892,
      progress: 45,
      reward: "Silver Badge",
      endDate: "Oct 20, 2023",
    },
  ];

  const discussions = [
    {
      id: 1,
      user: {
        name: "Sarah J.",
        avatar: "https://github.com/shadcn.png",
      },
      content: "Just completed my first 5K! Thanks everyone for the support and motivation!",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Mike C.",
        avatar: "https://github.com/shadcn.png",
      },
      content: "Any tips for improving deadlift form? Currently working on my technique.",
      likes: 15,
      comments: 12,
      time: "4 hours ago",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Challenges Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-1"
      >
        <Card className="bg-black p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Active Challenges</h2>
            <Trophy className="h-5 w-5 text-yellow-500" />
          </div>
          
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-zinc-900 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
                onClick={() => setActiveChallenge(challenge)}
              >
                <h3 className="font-semibold mb-2">{challenge.title}</h3>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>{challenge.participants} participants</p>
                  <p>Ends {challenge.endDate}</p>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Discussion Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2"
      >
        <Card className="bg-black p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Community Feed</h2>
            <Button variant="outline" size="sm">
              New Post
            </Button>
          </div>

          <div className="space-y-6">
            {discussions.map((post) => (
              <div key={post.id} className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={post.user.avatar} />
                    <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{post.user.name}</h3>
                      <span className="text-sm text-zinc-400">{post.time}</span>
                    </div>
                    <p className="mt-2">{post.content}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Input
              placeholder="Write a comment..."
              className="bg-zinc-900 border-zinc-800"
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
