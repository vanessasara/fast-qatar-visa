"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const visaTypes = [
  { value: "", label: "Select visa type" },
  { value: "tourist", label: "Tourist Visa" },
  { value: "business", label: "Business Visa" },
  { value: "transit", label: "Transit Visa" },
  { value: "family", label: "Family Visa" },
  { value: "work", label: "Work Visa" },
  { value: "not-sure", label: "Not Sure" },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  visaType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        visaType: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
      <p className="mt-2 text-gray-600">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p>Thank you! We&apos;ll respond within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p>Something went wrong. Please try again later.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:outline-none focus:ring-2",
              errors.fullName
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-qatar-maroon focus:ring-qatar-maroon/20"
            )}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:outline-none focus:ring-2",
              errors.email
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-qatar-maroon focus:ring-qatar-maroon/20"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+974 XXXX XXXX"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-qatar-maroon focus:outline-none focus:ring-2 focus:ring-qatar-maroon/20"
          />
        </div>

        {/* Visa Type */}
        <div>
          <label
            htmlFor="visaType"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Visa Type
          </label>
          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-qatar-maroon focus:outline-none focus:ring-2 focus:ring-qatar-maroon/20"
          >
            {visaTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us how we can help you..."
            className={cn(
              "w-full resize-none rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:outline-none focus:ring-2",
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-qatar-maroon focus:ring-qatar-maroon/20"
            )}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-qatar-maroon px-6 py-4 font-semibold text-white transition-all hover:bg-qatar-maroon-800 focus:outline-none focus:ring-2 focus:ring-qatar-maroon focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
