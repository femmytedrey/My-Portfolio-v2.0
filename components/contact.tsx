"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear status when user starts typing
    if (status.message) {
      setStatus({});
    }
  };

  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;

    if (!formData.firstName.trim() || /^\d+$/.test(formData.firstName.trim())) {
      return "Please enter a valid first name";
    }
    if (!formData.lastName.trim() || /^\d+$/.test(formData.lastName.trim())) {
      return "Please enter a valid last name";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address";
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      return "Please enter a valid phone number";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return "Please enter a message (at least 10 characters)";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ success: false, message: validationError });
      return;
    }

    setIsSubmitting(true);
    setButtonText("Sending...");
    setStatus({});

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus({
        success: true,
        message:
          "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      setButtonText("Message Sent!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset button after 3 seconds
      setTimeout(() => {
        setButtonText("Send Message");
        setStatus({});
      }, 4000);
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again or email me directly.",
      });
      setButtonText("Send Message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white"
      id="connect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contact Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[550px]">
              <Image
                src="/assets/img/contact-img.svg"
                alt="Let's work together"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Let's work together
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send me a
                message and let's create something amazing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 ">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, goals, timeline, or anything else you'd like to discuss..."
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 resize-none"
                disabled={isSubmitting}
              />

              {/* Status Message */}
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 200 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    className={`p-4 rounded-xl border flex items-center ${
                      status.success
                        ? "bg-green-500/20 border-green-400/50 text-green-300"
                        : "bg-red-500/20 border-red-400/50 text-red-300"
                    }`}
                  >
                    {status.success ? (
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#aa367c] px-8 py-5 font-bold text-lg rounded-xl hover:bg-white/95 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                <span className="flex items-center justify-center">
                  {buttonText}
                  {!isSubmitting && buttonText === "Send Message" && (
                    <Send className="ml-3 w-5 h-5" />
                  )}
                  {isSubmitting && (
                    <div className="ml-3 w-5 h-5 border-2 border-[#aa367c]/30 border-t-[#aa367c] rounded-full animate-spin" />
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
