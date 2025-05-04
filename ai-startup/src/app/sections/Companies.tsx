'use client'
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import CelestialLogo from "../assets/images/celestial-logo.svg";
import SectionBorder from "../app/components/SectionBorder";
import SectionContent from "../app/components/SectionContent";
import { motion } from "framer-motion";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Pulse",
    logo: PulseLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return <section id="companies">
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent className="!pt-0">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mt-10 ">
            Empowering creators at leading companies
          </h2>
          <div className="flex overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{ translateX: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {[...companies, ...companies].map((company, index) => (
                <company.logo key={`${company.name}-${index}`} className="h-8 logo-ticker-logo" />
              ))}
            </motion.div>
          </div>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>
};

export default Companies;
