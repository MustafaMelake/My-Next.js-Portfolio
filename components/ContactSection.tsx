"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Copy } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Added for UX

  const copyEmail = () => {
    navigator.clipboard.writeText("mustafamelake@gmail.com"); // Updated to your real email
    alert("Email copied to clipboard!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Success! Message saved to MongoDB and sent to your Gmail.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please check your connection.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <FadeIn direction="right" className={""}>
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-mono font-bold tracking-widest uppercase mb-2">
                  Contact Me
                </h3>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  HAVE A <br />
                  <span className="text-slate-400">PROJECT?</span>
                </h2>
              </div>
              <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                I’m currently available for freelance work and full-time
                positions. If you have a project that needs a MERN stack expert,
                let’s talk.
              </p>
              <div className="space-y-6">
                <div
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={copyEmail}
                >
                  <div className="p-4 bg-white shadow-lg rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Email Me
                    </p>
                    <p className="text-xl font-bold flex items-center gap-2">
                      mustafamelake@gmail.com{" "}
                      <Copy
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white shadow-lg rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-xl font-bold">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn direction="left" delay={0.2} className={""}>
            <Card className="p-8 md:p-10 bg-white/40 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl">
              {/* FIX: Attached handleSubmit to onSubmit on the FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1">
                      Your Name
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="bg-white/50 border-white/20 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider ml-1">
                      Email Address
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="bg-white/50 border-white/20 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">
                    Subject
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Inquiry"
                    className="bg-white/50 border-white/20 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">
                    Message
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="bg-white/50 border-white/20 min-h-[150px]"
                  />
                </div>
                {/* FIX: Added type="submit" and loading state */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold rounded-xl shadow-xl hover:shadow-primary/20 transition-all gap-2 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
