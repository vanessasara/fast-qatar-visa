"use client";

import { useState } from "react";
import TrackHero from "@/components/sections/TrackHero";
import TrackingForm from "@/components/sections/TrackingForm";
import StatusDisplay, {
  ApplicationStatus,
} from "@/components/sections/StatusDisplay";
import TrackingHelp from "@/components/sections/TrackingHelp";

// Mock data for demonstration
const mockStatus: ApplicationStatus = {
  referenceNumber: "FQV-12345-2026",
  applicantName: "John Smith",
  visaType: "Tourist Visa",
  applicationDate: "January 15, 2026",
  currentStage: 2,
  estimatedCompletion: "January 18, 2026",
  estimatedRemaining: "2-3 days remaining",
  stages: [
    {
      name: "Application Received",
      date: "Jan 15, 2026, 10:30 AM",
      completed: true,
      message: "Your application has been received and verified"
    },
    {
      name: "Under Review",
      date: "Jan 16, 2026",
      completed: false,
      message: "Our team is processing your documents"
    },
    {
      name: "Approved",
      date: null,
      completed: false,
      message: "Awaiting approval"
    },
    {
      name: "Visa Issued",
      date: null,
      completed: false,
      message: "Visa will be sent to your email"
    },
  ],
};

export default function TrackPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] =
    useState<ApplicationStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (referenceNumber: string, email: string) => {
    setIsLoading(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, show mock data
      // In production, this would be an actual API call
      console.log("Tracking:", referenceNumber, email);
      setApplicationStatus({
        ...mockStatus,
        referenceNumber: referenceNumber || mockStatus.referenceNumber,
      });
    } catch {
      setError("Unable to find application. Please check your details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setApplicationStatus(null);
    setError(null);
  };

  return (
    <>
      <TrackHero />

      {/* Tracking Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mx-auto mb-8 max-w-lg rounded-lg bg-red-50 p-4 text-center text-red-700">
              {error}
            </div>
          )}

          {applicationStatus ? (
            <StatusDisplay status={applicationStatus} onReset={handleReset} />
          ) : (
            <TrackingForm onTrack={handleTrack} isLoading={isLoading} />
          )}
        </div>
      </section>

      <TrackingHelp />
    </>
  );
}
