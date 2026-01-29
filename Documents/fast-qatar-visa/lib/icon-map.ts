// Icon mapping for work visa components
// This enables tree-shaking by importing only the icons we actually use
import {
  Award,
  Bike,
  Briefcase,
  Building,
  Calculator,
  Calendar,
  Clock,
  Globe,
  GraduationCap,
  HardHat,
  Home,
  Laptop,
  RefreshCw,
  Shield,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

export const ICON_MAP = {
  Award,
  Bike,
  Briefcase,
  Building,
  Calculator,
  Calendar,
  Clock,
  Globe,
  GraduationCap,
  HardHat,
  Home,
  Laptop,
  RefreshCw,
  Shield,
  Sparkles,
  Users,
  Wrench,
} as const;

export type IconName = keyof typeof ICON_MAP;
