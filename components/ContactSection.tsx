"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Copy, Database, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for success UI

  const copyEmail = () => {
    navigator.clipboard.writeText("mustafamelake@gmail.com");
    // ممكن تستخدم toast هنا لو عندك shadcn/ui toast
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
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
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
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-slate-50/30"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: INSPIRATION */}
          <FadeIn direction="right" className={""}>
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-mono font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary inline-block"></span>
                  Get In Touch
                </h3>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
                  READY TO <br />
                  <span className="text-slate-300">SCALE?</span>
                </h2>
              </div>

              <p className="text-xl text-slate-600 max-w-md leading-relaxed">
                Whether you need a **Next.js Architect** for a new MVP or a
                **Prisma/MongoDB** expert to scale your backend, I&apos;m here
                to help.
              </p>

              <div className="space-y-6 pt-4">
                <div
                  className="flex items-center gap-5 group cursor-pointer"
                  onClick={copyEmail}
                >
                  <div className="p-4 bg-white shadow-xl rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Email Me
                    </p>
                    <p className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                      mustafamelake@gmail.com
                      <Copy
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400"
                      />
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-4 bg-white shadow-xl rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-xl font-bold">
                      Cairo, Egypt{" "}
                      <span className="text-slate-400 font-medium">
                        | Remote Worldwide
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE: THE FORM */}
          <FadeIn direction="left" delay={0.2} className={""}>
            <Card className="p-8 md:p-10 bg-white shadow-2xl rounded-[2rem] border-none relative overflow-hidden">
              {/* Success Overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-6"
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold">Message Received!</h3>
                  <p className="text-slate-600 mt-2">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                      Name
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="bg-slate-50 border-none h-12 focus-visible:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      className="bg-slate-50 border-none h-12 focus-visible:ring-primary rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Subject
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="What project are you thinking of?"
                    className="bg-slate-50 border-none h-12 focus-visible:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Message
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your vision..."
                    className="bg-slate-50 border-none min-h-[120px] focus-visible:ring-primary rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold rounded-xl shadow-lg transition-all gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Syncing to Database..." : "Send Proposal"}
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </Button>

                {/* Technical Trust Bar */}
                <div className="flex items-center justify-center gap-2 opacity-40 pt-2">
                  <Database size={12} />
                  <p className="text-[10px] font-mono uppercase tracking-tighter">
                    Powered by Next.js API & MongoDB via Prisma 7
                  </p>
                </div>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
