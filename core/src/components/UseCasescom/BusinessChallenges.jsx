import React from "react";
import { Check } from "lucide-react";

// icons
import bc1 from "../../assets/icons/usecases/bc1.png";
import bc2 from "../../assets/icons/usecases/bc2.png";
import bc3 from "../../assets/icons/usecases/bc3.png";
import checkcircleg from "../../assets/icons/check-circle-g.png";

/* -------------------------------------------------------------------------- */
/*                                Section Block                                */
/* -------------------------------------------------------------------------- */

const SectionBlock = ({ icon, label, title, points }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img src={icon} alt={label} className="w-10 h-10" />
        <span className="text-[18px] font-semibold text-[#1D293D]">
          {label}
        </span>
      </div>

      <p className="text-[13px] font-semibold text-[#1D293D] leading-5 max-w-[360px]">
        {title}
      </p>

      {label === "Problem" ? (
        <span className="text-xs text-[#475569]">{points.join(", ")}</span>
      ) : (
        <div className="space-y-2">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              {label === "Solution" ? (
                <img src={checkcircleg} alt="" className="w-4 h-4 mt-0.5" />
              ) : (
                <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
              )}
              <span className="text-xs text-[#475569]">{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Challenge Item                                */
/* -------------------------------------------------------------------------- */

const ChallengeItem = ({ problem, solution, useCases }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Problem */}
        <SectionBlock
          icon={solution.icon}
          label="Problem"
          title={problem.title}
          points={problem.points}
        />

        {/* Solution */}
        <SectionBlock
          icon={problem.icon}
          label="Solution"
          title={solution.title}
          points={solution.points}
        />

        {/* Use Cases */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={useCases.icon} alt="Use Cases" className="w-10 h-10" />
            <span className="text-[18px] font-semibold text-[#1D293D]">
              Use Cases
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {useCases.useCasesdetai.map((uc, index) => (
              <span
                key={index}
                className="text-xs font-medium leading-4 flex items-center gap-1 px-3 py-[2px] rounded border border-slate-500 bg-slate-50 text-slate-500 text-center"
              >
                {uc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Data Source                                    */
/* -------------------------------------------------------------------------- */

const challenges = [
  {
    problem: {
      icon: bc1,
      title: "High Volume of Repetitive Inquiries",
      points: ["Team burden", "Slow response times", "Missed support SLAs"],
    },
    solution: {
      icon: bc2,
      title: "Deploy AI agents to handle common questions automatically",
      points: [
        "24/7 availability",
        "Reduced resolution time",
        "Free up human agents for complex issues",
      ],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: [
        "Customer Support Bot",
        "IT Helpdesk",
        "HR Q&A Assistant",
      ],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Manual Data Entry and Processing",
      points: ["Human errors", "Slow results", "Delayed decision-making"],
    },
    solution: {
      icon: bc2,
      title: "Automate data extraction, validation, and entry processes",
      points: ["99%+ accuracy", "Faster processing", "Real-time insights"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: [
        "Document Processing",
        "Expense Tracker",
        "Invoice Management",
      ],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Inconsistent Lead Follow-up",
      points: ["Lost opportunities", "Low conversions", "Revenue leakage"],
    },
    solution: {
      icon: bc2,
      title: "AI-powered lead scoring and automated nurturing",
      points: [
        "Faster response",
        "Personalized engagement",
        "Higher conversion rates",
      ],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: [
        "Lead Generation Agent",
        "Email Automation",
        "CRM Integration",
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                           Business Challenges                               */
/* -------------------------------------------------------------------------- */

const BusinessChallenges = () => {
  return (
    <section className="w-full bg-[#F6F5FE] px-4 sm:px-8 lg:px-20 xl:px-[200px] py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded mb-4">
          Problem–Solution Mapping
        </span>

        <h2 className="text-[26px] sm:text-[32px] font-bold text-[#1D293D]">
          Common Business Challenges
        </h2>

        <p className="mt-3 text-[#4B5563] text-base max-w-xl mx-auto">
          Identify your specific business challenge and discover how AI agents
          can provide effective solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 space-y-6 max-w-[1200px] mx-auto">
        {challenges.map((item, index) => (
          <ChallengeItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BusinessChallenges;
