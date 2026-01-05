import React from "react";
import { Clock } from "lucide-react";

// image icons
import deic1 from "../../assets/icons/usecases/deic1.png";
import deic2 from "../../assets/icons/usecases/deic2.png";
import deic3 from "../../assets/icons/usecases/deic3.png";
import deic4 from "../../assets/icons/usecases/deic4.png";
import deic5 from "../../assets/icons/usecases/deic5.png";
import deic6 from "../../assets/icons/usecases/deic6.png";

const levelStyles = {
  Low: "w-[60px] text-center rounded-[4px] border border-[#22C55E] text-[#22C55E] bg-[#F0FDF4] flex items-center justify-center gap-1 px-2 py-px text-xs font-medium leading-4",
  Medium: "w-[60px] text-center rounded-[4px] border border-[#F97316] text-[#F97316] bg-[#FFF7ED] flex items-center justify-center gap-1 px-2 py-px text-xs font-medium leading-4",
  High: "w-[60px] text-center rounded-[4px] border border-[#EF4444] text-[#EF4444] bg-[#FEF2F2] flex items-center justify-center gap-1 px-2 py-px text-xs font-medium leading-4",
};

const DepartmentCard = ({ title, icon, items = [] }) => {
  if (!items || !Array.isArray(items)) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">

        <img src={icon} alt={title} className="w-10 h-10 object-contain rounded-[8px]" />

        <h3 className="text-lg font-semibold text-[#1D293D] leading-6">{title}</h3>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-lg p-3 flex items-center justify-between"
          >
            {/* LEFT CONTENT (Title + Time) */}
            <div className="flex flex-col gap-1">
              <p className="text-[13px] font-semibold text-[#1D293D] leading-5">
                {item.title}
              </p>

              <div className="flex items-center gap-1.5 text-[#475569] text-xs leading-[18px]">
                <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                {item.time}
              </div>
            </div>

            {/* RIGHT CONTENT (LEVEL TAG – CENTERED) */}
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-md self-center ${levelStyles[item.level]}`}
            >
              {item.level}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

const departments = [
  {
    title: "Finance",
    icon: deic5,

    items: [
      { title: "Invoice Management", time: "1-2 weeks", level: "Low" },
      { title: "Expense Processing", time: "2-3 weeks", level: "Medium" },
      { title: "Financial Reporting", time: "4-6 weeks", level: "High" },
      { title: "Budget Planning Assistance", time: "6-8 weeks", level: "High" },
    ],
  },
  {
    title: "Human Resources",

    icon: deic3,
    items: [
      { title: "Resume Screening", time: "3-4 weeks", level: "Medium" },
      { title: "Employee Onboarding", time: "1-2 weeks", level: "Low" },
      { title: "Benefits Q&A Assistant", time: "1-2 weeks", level: "Low" },
      { title: "Performance Review Automation", time: "4-6 weeks", level: "High" },
    ],
  },
  {
    title: "Sales & Marketing",
    icon: deic2,
    items: [
      { title: "Lead Qualification", time: "2-4 weeks", level: "Medium" },
      { title: "Email Campaign Automation", time: "1-2 weeks", level: "Low" },
      { title: "Social Media Management", time: "2-3 weeks", level: "Medium" },
      { title: "Content Generation", time: "4-6 weeks", level: "High" },
    ],
  },
  {
    title: "Operations",
    icon: deic4,
    items: [
      { title: "Inventory Management", time: "2-4 weeks", level: "Medium" },
      { title: "Process Documentation", time: "1-2 weeks", level: "Low" },
      { title: "Quality Assurance", time: "4-8 weeks", level: "High" },
      { title: "Vendor Communication", time: "2-3 weeks", level: "Medium" },
    ],
  },
  {
    title: "Customer Service",
    icon: deic1,
    items: [
      { title: "Support Ticket Automation", time: "1-2 weeks", level: "Low" },
      { title: "Live Chat Assistance", time: "2-3 weeks", level: "Medium" },
      { title: "Customer Feedback Analysis", time: "3-4 weeks", level: "Medium" },
      { title: "Knowledge Base Management", time: "1-2 weeks", level: "Low" },
    ],
  },
  {
    title: "IT & Technology",
    icon: deic6,
    items: [
      { title: "Helpdesk Automation", time: "1-2 weeks", level: "Low" },
      { title: "System Monitoring", time: "3-4 weeks", level: "Medium" },
      { title: "Code Review Assistant", time: "4-6 weeks", level: "High" },
      { title: "Documentation Generation", time: "2-3 weeks", level: "Medium" },
    ],
  },
];

const DepartmentSolutions = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xl:px-[200px] py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded mb-4">
          Department Solutions
        </span>

        <h2 className="text-[26px] sm:text-[32px] font-semibold text-slate-900">
          AI Agents by Business Function
        </h2>

        <p className="mt-3 text-slate-600 text-base leading-relaxed">
          Discover specific use cases tailored to each department with
          implementation complexity and time-to-value estimates.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <DepartmentCard key={idx} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSolutions;
