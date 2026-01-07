import React from "react";
import smarthire from "../../assets/images/Smarthire.png";
import chikitai from "../../assets/images/chikitai.png";

const products = [
  {
    id: "smarthireai",
    title: "SmartHireAI",
    subtitle: "Smart Recruitment Platform",
    color: "#4F46E5",
    description:
      "SmartHireAI delivers complete recruitment automation tailored for MSMEs and startups. Our AI-powered platform streamlines the entire hiring journey—from creating optimized job descriptions and screening candidates to conducting intelligent virtual interviews and generating personalized offer letters. By eliminating repetitive manual tasks, SmartHireAI helps growing businesses save time, reduce costs, and hire top talent faster with the efficiency of advanced artificial intelligence.",
    image: smarthire,
    url: "https://smarthireai.nyukt.ai/",
  },
  {
    id: "Chikit.AI",
    title: "Chikit.AI",
    subtitle: "Smarter Symptom Assessment",
    color: "#10B981",
    description:
      "Chikit.ai is an AI-powered self-symptom assessment platform that transforms healthcare delivery by offering enterprises a clinical-grade, multilingual, and quantum-secure automation system, while providing individuals with intuitive AI-guided tools for simplified self-assessment, personalized health insights, and proactive decision-making—bridging enterprise-grade automation with patient-friendly solutions to ensure accessible, secure, and reliable healthcare experiences.",
    image: chikitai,
    url: "https://chikithainew3-474045188621.europe-west1.run.app/",
  },
];

const Mass = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-violet-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 mt-2">
            Multi-Agent <span className="text-indigo-600">AI System</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            Our Multi-Agent AI system combines specialized AI agents that collaborate seamlessly to handle complex workflows—optimizing decisions, automating tasks, and ensuring intelligent coordination across every process in real time.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">

              {/* Image (first on mobile) */}
              <div className="order-1 md:order-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[240px] sm:h-[320px] md:h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="order-2 md:order-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center gap-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p
                  className="text-lg sm:text-xl font-medium"
                  style={{ color: product.color }}
                >
                  {product.subtitle}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-4">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 
                               rounded-lg bg-slate-900 text-white text-sm font-medium
                               hover:bg-slate-800 transition"
                  >
                    Try It Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mass;
