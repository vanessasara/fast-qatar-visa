"use client";

import { useState } from "react";
import { Search, Loader2, FileSearch, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackingFormProps {
  onTrack: (referenceNumber: string, email: string) => void;
  isLoading: boolean;
}

export default function TrackingForm({ onTrack, isLoading }: TrackingFormProps) {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ reference?: string; email?: string }>(
    {}
  );

  const validateForm = (): boolean => {
    const newErrors: { reference?: string; email?: string } = {};

    if (!referenceNumber.trim()) {
      newErrors.reference = "Reference number is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onTrack(referenceNumber, email);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-qatar-gold/10">
            <FileSearch className="h-8 w-8 text-qatar-gold" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Reference Number */}
          <div>
            <label
              htmlFor="referenceNumber"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Reference Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="referenceNumber"
              value={referenceNumber}
              onChange={(e) => {
                setReferenceNumber(e.target.value.toUpperCase());
                if (errors.reference) {
                  setErrors((prev) => ({ ...prev, reference: undefined }));
                }
              }}
              placeholder="e.g., QV-12345-2024"
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:outline-none focus:ring-2",
                errors.reference
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-qatar-maroon focus:ring-qatar-maroon/20"
              )}
            />
            {errors.reference && (
              <p className="mt-1 text-sm text-red-500">{errors.reference}</p>
            )}
          </div>

          {/* Email Address */}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder="Enter your email address"
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

          {/* Helper Text */}
          <p className="text-sm text-gray-500">
            Your reference number was sent to your email after submitting your
            application.
          </p>

          {/* Track Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-qatar-maroon px-6 py-4 font-semibold text-white transition-all hover:bg-qatar-maroon-800 focus:outline-none focus:ring-2 focus:ring-qatar-maroon focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Checking Status...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Track Status
              </>
            )}
          </button>
        </form>

        {/* Can't Find Reference */}
        <div className="mt-6 text-center">
          <a
            href="#tracking-help"
            className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-qatar-maroon"
          >
            <HelpCircle className="h-4 w-4" />
            Can&apos;t find your reference number?
          </a>
        </div>
      </div>
    </div>
  );
}
