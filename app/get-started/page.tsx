"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hardwareConfig: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for joining Echelon X Testers! We’ll get back to you soon.");
    setFormData({ name: "", email: "", hardwareConfig: "" });
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section className="container py-24 max-w-screen-2xl">
          <h1 className="text-4xl font-bold text-center mb-8">Join Echelon X Testers</h1>
          <div className="max-w-md mx-auto bg-background p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="hardwareConfig" className="block text-sm font-medium text-foreground mb-1">
                  Hardware Configuration
                </label>
                <textarea
                  id="hardwareConfig"
                  name="hardwareConfig"
                  value={formData.hardwareConfig}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Join
              </Button>
            </form>
          </div>
        </section>
        <Footer className="bg-background" />
      </div>
    </div>
  );
}