
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, ChevronRight, Utensils, Dumbbell } from "lucide-react";

export function AIRecommendations() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const workouts = [
    {
      id: 1,
      title: "HIIT Cardio Blast",
      duration: "30 mins",
      difficulty: "Intermediate",
      calories: "300-400",
      videoUrl: "https://example.com/workout1",
      exercises: [
        { name: "Burpees", sets: 3, reps: 12 },
        { name: "Mountain Climbers", sets: 3, reps: 20 },
        { name: "Jump Squats", sets: 3, reps: 15 },
      ],
    },
    {
      id: 2,
      title: "Strength Foundation",
      duration: "45 mins",
      difficulty: "Beginner",
      calories: "200-300",
      videoUrl: "https://example.com/workout2",
      exercises: [
        { name: "Bodyweight Squats", sets: 3, reps: 15 },
        { name: "Push-ups", sets: 3, reps: 10 },
        { name: "Dumbbell Rows", sets: 3, reps: 12 },
      ],
    },
  ];

  const meals = [
    {
      id: 1,
      title: "High-Protein Breakfast Bowl",
      calories: 450,
      protein: 35,
      carbs: 45,
      fats: 15,
      ingredients: [
        "2 eggs",
        "1/2 cup quinoa",
        "1 cup spinach",
        "1/4 avocado",
      ],
      image: "breakfast-bowl.jpg",
    },
    {
      id: 2,
      title: "Lean Chicken Stir-Fry",
      calories: 380,
      protein: 40,
      carbs: 35,
      fats: 12,
      ingredients: [
        "6oz chicken breast",
        "2 cups mixed vegetables",
        "1/2 cup brown rice",
        "1 tbsp olive oil",
      ],
      image: "stir-fry.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Tabs defaultValue="workouts" className="space-y-6">
          <TabsList className="bg-zinc-900">
            <TabsTrigger value="workouts" className="data-[state=active]:bg-primary">
              <Dumbbell className="w-4 h-4 mr-2" />
              Workouts
            </TabsTrigger>
            <TabsTrigger value="meals" className="data-[state=active]:bg-primary">
              <Utensils className="w-4 h-4 mr-2" />
              Meal Plan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workouts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workouts.map((workout) => (
                <Card key={workout.id} className="bg-black p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{workout.title}</h3>
                      <div className="space-y-1 text-sm text-zinc-400">
                        <p>Duration: {workout.duration}</p>
                        <p>Difficulty: {workout.difficulty}</p>
                        <p>Calories: {workout.calories}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setSelectedWorkout(workout)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Exercises:</h4>
                    {workout.exercises.map((exercise, index) => (
                      <div key={index} className="bg-zinc-900 p-3 rounded-lg">
                        <p className="font-medium">{exercise.name}</p>
                        <p className="text-sm text-zinc-400">
                          {exercise.sets} sets × {exercise.reps} reps
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meals">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meals.map((meal) => (
                <Card key={meal.id} className="bg-black p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-semibold">{meal.calories}</p>
                        <p className="text-xs text-zinc-400">calories</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">{meal.protein}g</p>
                        <p className="text-xs text-zinc-400">protein</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">{meal.carbs}g</p>
                        <p className="text-xs text-zinc-400">carbs</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">{meal.fats}g</p>
                        <p className="text-xs text-zinc-400">fats</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <div className="space-y-1">
                      {meal.ingredients.map((ingredient, index) => (
                        <div 
                          key={index}
                          className="bg-zinc-900 p-2 rounded-lg text-sm"
                        >
                          {ingredient}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
