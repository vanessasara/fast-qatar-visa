"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TrackHero from "@/components/sections/TrackHero";
import TrackingForm from "@/components/sections/TrackingForm";
import StatusDisplay, {
  ApplicationStatus,
} from "@/components/sections/StatusDisplay";
import TrackingHelp from "@/components/sections/TrackingHelp";

// Mock data for demonstration
const mockStatus: ApplicationStatus = {
  referenceNumber: "QV-12345-2024",
  applicantName: "John Smith",
  visaType: "Tourist Visa",
  applicationDate: "January 15, 2024",
  currentStage: 2,
  estimatedCompletion: "January 18, 2024",
  stages: [
    { name: "Application Received", date: "Jan 15, 2024", completed: true },
    { name: "Under Review", date: "Jan 16, 2024", completed: false },
    { name: "Approved", date: null, completed: false },
    { name: "Visa Dispatched", date: null, completed: false },
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
    <Layout>
      <TrackHero />

      {/* Tracking Section */}
      <section className="bg-white py-12 md:py-16">
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
    </Layout>
  );
}
