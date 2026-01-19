"use client";

import {
  FileText,
  Search,
  CheckCircle,
  Send,
  Calendar,
  Download,
  Printer,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ApplicationStatus {
  referenceNumber: string;
  applicantName: string;
  visaType: string;
  applicationDate: string;
  currentStage: number; // 1-4
  estimatedCompletion: string;
  stages: {
    name: string;
    date: string | null;
    completed: boolean;
  }[];
}

interface StatusDisplayProps {
  status: ApplicationStatus;
  onReset: () => void;
}

const stageIcons = [FileText, Search, CheckCircle, Send];

export default function StatusDisplay({ status, onReset }: StatusDisplayProps) {
  const getStatusBadge = () => {
    switch (status.currentStage) {
      case 1:
        return { text: "RECEIVED", color: "bg-blue-100 text-blue-700" };
      case 2:
        return { text: "UNDER REVIEW", color: "bg-qatar-gold/20 text-qatar-gold-700" };
      case 3:
        return { text: "APPROVED", color: "bg-green-100 text-green-700" };
      case 4:
        return { text: "DISPATCHED", color: "bg-green-100 text-green-700" };
      default:
        return { text: "PROCESSING", color: "bg-gray-100 text-gray-700" };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <div className="mx-auto max-w-3xl animate-fade-in">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Application Status
            </h2>
            <p className="mt-1 text-gray-500">
              Reference: <span className="font-mono font-semibold text-qatar-maroon">{status.referenceNumber}</span>
            </p>
          </div>
          <span
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold",
              statusBadge.color
            )}
          >
            {statusBadge.text}
          </span>
        </div>

        {/* Applicant Information */}
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">Applicant Name</p>
            <p className="font-semibold text-gray-900">{status.applicantName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Visa Type</p>
            <p className="font-semibold text-gray-900">{status.visaType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Application Date</p>
            <p className="font-semibold text-gray-900">{status.applicationDate}</p>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="mb-8">
          <h3 className="mb-6 font-semibold text-gray-900">Progress Timeline</h3>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-0 right-0 top-6 h-1 bg-gray-200">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-qatar-gold transition-all duration-500"
                  style={{ width: `${((status.currentStage - 1) / 3) * 100}%` }}
                />
              </div>

              {/* Stages */}
              <div className="relative flex justify-between">
                {status.stages.map((stage, index) => {
                  const Icon = stageIcons[index];
                  const isCompleted = stage.completed;
                  const isCurrent = index + 1 === status.currentStage;

                  return (
                    <div key={stage.name} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-full border-4 transition-all",
                          isCompleted
                            ? "border-green-500 bg-green-500 text-white"
                            : isCurrent
                            ? "border-qatar-gold bg-qatar-gold text-white animate-pulse-subtle"
                            : "border-gray-300 bg-white text-gray-400"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p
                        className={cn(
                          "mt-3 text-center text-sm font-medium",
                          isCompleted || isCurrent
                            ? "text-gray-900"
                            : "text-gray-400"
                        )}
                      >
                        {stage.name}
                      </p>
                      {stage.date && (
                        <p className="text-xs text-gray-500">{stage.date}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="md:hidden">
            <div className="relative">
              {status.stages.map((stage, index) => {
                const Icon = stageIcons[index];
                const isCompleted = stage.completed;
                const isCurrent = index + 1 === status.currentStage;
                const isLast = index === status.stages.length - 1;

                return (
                  <div key={stage.name} className="relative flex gap-4 pb-8">
                    {/* Vertical Line */}
                    {!isLast && (
                      <div
                        className={cn(
                          "absolute left-6 top-12 h-full w-0.5 -translate-x-1/2",
                          isCompleted ? "bg-green-500" : "bg-gray-200"
                        )}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={cn(
                        "relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4",
                        isCompleted
                          ? "border-green-500 bg-green-500 text-white"
                          : isCurrent
                          ? "border-qatar-gold bg-qatar-gold text-white animate-pulse-subtle"
                          : "border-gray-300 bg-white text-gray-400"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <p
                        className={cn(
                          "font-medium",
                          isCompleted || isCurrent
                            ? "text-gray-900"
                            : "text-gray-400"
                        )}
                      >
                        {stage.name}
                      </p>
                      {stage.date && (
                        <p className="text-sm text-gray-500">{stage.date}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Estimated Completion */}
        <div className="mb-8 flex items-center gap-3 rounded-lg bg-qatar-gold/10 p-4">
          <Calendar className="h-6 w-6 text-qatar-gold" />
          <div>
            <p className="text-sm text-qatar-gold-700">Estimated Completion</p>
            <p className="font-semibold text-qatar-gold-800">
              {status.estimatedCompletion}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Download Receipt
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <Printer className="h-4 w-4" />
            Print Status
          </button>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Support
          </a>
        </div>

        {/* Track Another */}
        <div className="mt-6 border-t border-gray-100 pt-6 text-center">
          <button
            onClick={onReset}
            className="text-sm font-medium text-qatar-maroon hover:underline"
          >
            Track Another Application
          </button>
        </div>
      </div>
    </div>
  );
}
