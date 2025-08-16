
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  CreditCard, 
  Lock, 
  Mail, 
  Smartphone,
  Globe,
  Moon,
  Sun
} from "lucide-react";

export function Settings() {
  const sections = [
    {
      title: "Account",
      icon: Lock,
      items: [
        { label: "Email", value: "john.doe@example.com", type: "email" },
        { label: "Password", value: "••••••••", type: "password" },
        { label: "Phone", value: "+1 234 567 890", type: "tel" },
      ],
    },
    {
      title: "Membership & Billing",
      icon: CreditCard,
      items: [
        { label: "Current Plan", value: "Premium ($49/month)" },
        { label: "Card ending in", value: "••••4242" },
        { label: "Billing cycle", value: "Monthly on the 1st" },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      toggles: [
        { label: "Email notifications", enabled: true },
        { label: "Push notifications", enabled: true },
        { label: "SMS notifications", enabled: false },
      ],
    },
    {
      title: "Preferences",
      icon: Globe,
      toggles: [
        { label: "Dark mode", enabled: true },
        { label: "Show calendar events", enabled: true },
        { label: "Show progress metrics", enabled: true },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-black p-6">
            <div className="flex items-center gap-2 mb-6">
              <section.icon className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.items?.map((item, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-sm text-zinc-400">{item.label}</label>
                  <div className="flex gap-2">
                    <Input
                      type={item.type || "text"}
                      value={item.value}
                      className="bg-zinc-900 border-zinc-800"
                      readOnly
                    />
                    <Button variant="outline">Change</Button>
                  </div>
                </div>
              ))}

              {section.toggles?.map((toggle, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-2">
                    <span>{toggle.label}</span>
                  </div>
                  <Switch checked={toggle.enabled} />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-black p-6">
          <h2 className="text-xl font-bold text-red-500 mb-6">Danger Zone</h2>
          <div className="space-y-4">
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
