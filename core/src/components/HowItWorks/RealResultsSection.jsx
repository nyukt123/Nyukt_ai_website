import ResultCard from "./ResultCard";
import customerSupport from "../../assets/customersupport.png";
import leadQualification from "../../assets/leadqualification.png";
import dataProcessing from "../../assets/dataprocessing.png";

const cardData = [
  {
    tags: ["Zendesk", "Email", "Slack"],
    title: "Customer Support",
    desc: "Automate ticket routing and response",
    metric: "75% faster response times",
    cta: "View Details",
    image: customerSupport,
  },
  {
    tags: ["Salesforce", "HubSpot", "CRM"],
    title: "Lead Qualification",
    desc: "Score and route leads automatically",
    metric: "3X more qualified leads",
    cta: "View Details",
    image: leadQualification,
  },
  {
    tags: ["PDF", "Excel", "APIs"],
    title: "Data Processing",
    desc: "Extract insights from documents",
    metric: "30% time savings",
    cta: "View Details",
    image: dataProcessing,
  },
];

export default function RealResultsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block mb-3 px-3 py-1 rounded bg-green-600 text-white text-[12px] font-semibold">
            Real Results
          </span>

          <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-slate-800 mb-2">
            See What’s Possible
          </h2>

          <p className="text-[14px] sm:text-[16px] text-slate-600 max-w-xl mx-auto">
            Real examples of AI Agents built by our customers
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardData.map((card, idx) => (
            <ResultCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
