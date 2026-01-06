import React from "react";

// Image icons
import brainw from "../../assets/icons/howitworksic/brain-w.png";
import usersw from "../../assets/icons/howitworksic/users-w.png";
import smsw from "../../assets/icons/howitworksic/sms-w.png";
import bookw from "../../assets/icons/howitworksic/book-w.png";

const supportItems = [
  {
    icon: bookw,
    title: "Documentation",
    desc: "Comprehensive guides and API references",
    bullets: [
      "Getting Started Guide",
      "API Documentation",
      "Best Practices",
      "Troubleshooting",
    ],
  },
  {
    icon: usersw,
    title: "Community",
    desc: "Connect with other users and experts",
    bullets: [
      "Community Forum",
      "Slack Workspace",
      "User Groups",
      "Events and Webinar",
    ],
  },
  {
    icon: smsw,
    title: "Support",
    desc: "Get help when you need it most",
    bullets: [
      "Live Chat Support",
      "Email Support",
      "Phone Support",
      "Success Manager",
    ],
  },
  {
    icon: brainw,
    title: "Learning",
    desc: "Master Nyukt with our training resources",
    bullets: [
      "Video Tutorials",
      "Certified Program",
      "Workshops",
      "Use Case Library",
    ],
  },
];

export default function SupportResourcesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-[#7C3AED] text-white text-xs px-3 py-1 rounded-[4px] mb-3">
          Support & Resources
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          We're Here to Help You Succeed
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Comprehensive resources and support to ensure your success with Nyukt
          and achieve your automation goals
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm flex flex-col justify-between p-5 hover:shadow-md transition-shadow h-full"
            >
              <div className="flex flex-col">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-10 h-10 mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="text-gray-500 text-sm space-y-1 mb-4">
                  {item.bullets.map((point, i) => (
                    <li key={i} className="list-disc list-inside">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto w-full flex justify-center items-center gap-2 h-[38px] px-6 py-1 rounded-lg border border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED] text-sm font-medium hover:bg-purple-50 transition-colors">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
