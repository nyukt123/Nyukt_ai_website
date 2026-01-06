import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  {
    label: "Visual Workflow Builder",
    title: "Visual Workflow Builder",
    desc: "Drag-and-drop interface that makes complex automation simple",
    bullets: [
      "Intuitive drag-and-drop interface",
      "Real-time workflow preview",
      "Smart component suggestions",
      "Version control and rollback",
      "Collaborative editing",
    ],
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1400",
  },
  {
    label: "Powerful Integration",
    title: "Powerful Integration",
    desc: "Connect seamlessly with your existing tools",
    bullets: [
      "200+ integrations",
      "OAuth & API key support",
      "Bi-directional sync",
      "Webhook triggers",
      "Zero-code setup",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400",
  },
  {
    label: "AI Powered Intelligence",
    title: "AI Powered Intelligence",
    desc: "AI that understands context and automates smarter",
    bullets: [
      "Context-aware automation",
      "Auto-tagging & classification",
      "Built-in GPT integration",
      "Predictive suggestions",
      "Smart conflict resolution",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400",
  },
  {
    label: "Real-Time Monitoring",
    title: "Real-Time Monitoring",
    desc: "Track workflows and performance live",
    bullets: [
      "Live logs & alerts",
      "Execution timeline",
      "Usage analytics",
      "Audit trail",
      "Error tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const data = tabs[active];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[32px] font-bold text-slate-900 mb-3">
            Explore Nyukt's Powerful Features
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
            Take a closer look at the features that make Nyukt the most powerful
            AI automation platform
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex w-full bg-white p-1.5 rounded-xl border border-slate-200 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 min-w-[220px] px-6 py-3 rounded-lg text-sm sm:text-base font-medium
                transition text-center whitespace-nowrap
                ${
                  active === i
                    ? "bg-slate-100 text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

            {/* Image – Full Bleed */}
            <div
              className="relative
              h-[260px]
              sm:h-[320px]
              md:h-[380px]
              lg:h-[440px]
              xl:h-[480px]"
            >
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 mb-4">
                {data.title}
              </h3>

              <p className="text-slate-600 mb-6 max-w-xl">
                {data.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {data.bullets.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <Check className="w-5 h-5 text-green-600 mt-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-11 px-8 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition">
                  Try It Now
                </button>
                <button className="h-11 px-8 rounded-lg border border-violet-500 text-violet-600 text-sm font-medium hover:bg-violet-50 transition">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
