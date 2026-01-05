import React from "react";

const automationLevels = [
  {
    title: "Basic Automation",
    description: "Simple, rule-based responses and actions",
    complexity: "Low",
    duration: "1–2 weeks",
    examples: [
      "FAQ responses",
      "Form submissions",
      "Status updates",
      "Simple notifications",
    ],
    bestFor: "Teams new to AI automation, high-volume simple tasks",
    badgeColor: "bg-[#F0FDF4] text-[#22C55E] border-[#22C55E]",
    topBorder: "border-t-green-400",
  },
  {
    title: "Intelligent Automation",
    description: "Context-aware responses with decision making",
    complexity: "Medium",
    duration: "2–4 weeks",
    examples: [
      "Lead qualification",
      "Ticket routing",
      "Content recommendations",
      "Smart scheduling",
    ],
    bestFor: "Teams ready for AI-driven decisions, personalized interactions",
    badgeColor: "bg-[#FFF7ED] text-[#F97316] border-[#F97316]",
    topBorder: "border-t-orange-400",
  },
  {
    title: "Advanced Automation",
    description: "Complex workflows with multi-step processes",
    complexity: "High",
    duration: "4–8 weeks",
    examples: [
      "End-to-end onboarding",
      "Complex approval workflows",
      "Predictive analytics",
      "Multi-system integration",
    ],
    bestFor: "Mature teams, complex business processes, high-value use cases",
    badgeColor: "bg-[#FEF2F2] text-[#EF4444] border-[#EF4444]",
    topBorder: "border-t-red-400",
  },
];

const AutomationLevels = () => {
  return (
    <section
      className="
        px-4
        sm:px-8
        md:px-12
        lg:px-[120px]
        xl:px-[200px]
        pt-16
        sm:pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[60px]
        text-center
      "
    >
      {/* Chip */}
      <span className="mb-3 inline-flex items-center justify-center rounded-[4px] bg-[#E2E8F0] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#1E293B]">
        Automation Complexity
      </span>

      {/* Heading */}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[31px] font-bold text-[#1D293D]">
        Choose Your Automation Level
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-3 max-w-[700px] text-[14px] sm:text-[16px] lg:text-[17px] font-normal leading-normal text-[#1D293D]">
        Start simple and scale up. Choose the right level of automation based on
        your team's readiness and use case complexity.
      </p>

      {/* Cards */}
      <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {automationLevels.map((item, index) => (
          <div
            key={index}
            className={`
              rounded-xl
              border
              border-[#CBD5E1]
              border-t-4
              ${item.topBorder}
              bg-white
              p-5
              sm:p-6
              text-left
              transition-shadow
              hover:shadow-lg
            `}
          >
            {/* Title */}
            <h3 className="text-center text-[18px] sm:text-[20px] font-semibold leading-[26px] text-[#1D293D]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-1 text-center text-[13px] sm:text-[14px] font-normal leading-[22.4px] text-[#45556C]">
              {item.description}
            </p>

            {/* Meta */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] sm:text-[13px] font-semibold leading-5 text-[#1D293D]">
                  Complexity:
                </span>
                <span
                  className={`rounded-[4px] border px-3 py-0.5 text-[11px] sm:text-xs font-medium ${item.badgeColor}`}
                >
                  {item.complexity}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[12px] sm:text-[13px] font-semibold leading-5 text-[#1D293D]">
                  Time to implement:
                </span>
                <span className="text-[11px] sm:text-[12px] font-normal leading-[18px] text-[#475569]">
                  {item.duration}
                </span>
              </div>
            </div>

            {/* Examples */}
            <div className="mt-4">
              <p className="mb-2 text-[12px] sm:text-[13px] font-semibold leading-5 text-[#1D293D]">
                Examples:
              </p>

              <ul className="pr-0 sm:pr-8 text-[13px] sm:text-[14px] leading-[22.4px] font-normal">
                {item.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start gap-2 ml-2 sm:ml-3">
                    <span className="mt-[9px] h-1 w-1 rounded-full bg-[#45556C] shrink-0" />
                    <span className="text-[#45556C]">
                      {example}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="mt-6 border-t border-[#CBD5E1]" />

            {/* Best For */}
            <div className="mt-4 rounded-lg bg-[#F1F5F9] p-3 sm:p-4">
              <p className="text-[11px] sm:text-[12px] font-medium leading-[18px] text-[#334155]">
                Best For
              </p>
              <p className="mt-1 text-[10px] sm:text-[11px] font-normal leading-[14px] text-[#64748B]">
                {item.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomationLevels;
