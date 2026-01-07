import React from "react";
import { Link } from "react-router-dom";
import prd1 from "../../assets/images/prd1.png";
import prd2 from "../../assets/images/prd2.png";
import prd3 from "../../assets/images/prd3.png";
import prd4 from "../../assets/images/prd4.png";
import ccc from "../../assets/icons/ccc.png";

const products = [
  {
    id: "nyuktron",
    title: "NyukTRON",
    subtitle: "Single Function Agentic AI",
    color: "#4F46E5",
    description:
      "NyukTRONs are the most advanced Agentic AIs in the industry, powered by state-of-the-art technologies like Large Language Models (LLMs), Reinforcement Learning (RL), Retrieval-Augmented Generation (RAG), and Generative AI. These intelligent AI agents are capable of dynamic adaptability, multi-modal processing, and real-time decision-making.",
    features: [
      "LLM Integration",
      "RAG Technology",
      "Explainable AI",
      "Reinforcement Learning",
      "Multi-Modal Processing",
      "Real-time Decision Making",
    ],
    metrics: [
      { value: "99.9%", label: "Accuracy" },
      { value: "10x Faster", label: "Speed" },
      { value: "50+", label: "Models" },
    ],
    image: prd1,
    tryItLink: "/DataExtraction",
  },
  {
    id: "nyuktact",
    title: "MAAS",
    subtitle: "AI Infra as a Service",
    color: "#10B981",
    description:
      "NyukTACT is more than just a no-code platform for building NyukTRONs—it's the next step in revolutionizing human-machine interaction. Seamlessly integrating with state-of-the-art technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and advanced AI frameworks.",
    features: [
      "No-Code Platform",
      "LLM Integration",
      "RAG Framework",
      "Workflow Orchestration",
      "Human-Machine Interface",
      "Advanced AI Frameworks",
    ],
    metrics: [
      { value: "5 Min Setup", label: "Deployment" },
      { value: "100+ APIs", label: "Reliability" },
      { value: "80% Faster", label: "Efficiency" },
    ],
    image: prd2,
    tryItLink: "/product/mass",
  },
  {
    id: "nyuktics",
    title: "Research & Development",
    color: "#F59E0B",
    description:
      "Nyuktics are the foundational building blocks of intelligence within Nyukt.AI, enabling seamless execution of specialized tasks by NyukTRONs (Agentic AIs). Each Nyuktic is a preconfigured, modular skill designed to handle specific actions such as data analysis, decision-making, automation, or creative generation.",
    features: [
      "Data Analysis",
      "Automation",
      "Creative Generation",
      "Explainable AI",
      "Proprietary IP",
      "System Architecture",
      "Trustworthy AI",
      "Advanced Automation",
      "Future-Ready OS",
    ],
    metrics: [],
    image: prd3,
    tryItLink: "https://nyukt.org/",
  },
  {
    id: "nyuktwork",
    title: "Upcoming Products",
    subtitle: "Nyuktrium",
    sub_subtitle: "Agent Discovery Network",
    color: "#8B5CF6",
    description:
      "Nyuktwork is the collaborative multi-agent network within the Nyukt.AI ecosystem. It enables NyukTRONs to share resources, insights, and tasks seamlessly. Designed to manage complex workflows and cross-functional operations, Nyuktwork ensures AI agents work as a unified system.",
    features: [
      "Multi-Agent Collaboration",
      "Resource Sharing",
      "Efficiency",
      "Pre-Built Agentic AIs",
      "Tailored Deployment",
      "AI Democratization",
      "Developer-Friendly",
      "Business Acceleration",
      "Innovator Ecosystem",
    ],
    metrics: [],
    image: prd4,
    tryItLink: null,
  },
];

const ProductCards = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 space-y-8">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="bg-white rounded-[20px] overflow-hidden shadow-lg flex flex-col lg:flex-row border border-[#E2E8F0]"
        >
          {/* Left Content */}
          <div className="flex-1 p-5 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1 space-y-4">
            <h3 className="text-gray-900 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              {product.title}
            </h3>

            {product.subtitle && (
              <p
                className="text-lg sm:text-xl font-semibold"
                style={{ color: product.color }}
              >
                {product.subtitle}
              </p>
            )}

            {product.sub_subtitle && (
              <p className="text-lg sm:text-xl font-semibold text-amber-700">
                {product.sub_subtitle}
              </p>
            )}

            <p className="text-gray-600 text-sm sm:text-base lg:text-base">
              {product.description}
            </p>



            {/* Metrics */}
            {product.metrics && product.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {product.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl 
                   px-4 py-3 text-center"
                  >
                    <div className="text-sm sm:text-base font-semibold text-slate-900">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg 
                 bg-[#F1F5F9] border border-[#CBD5E1] text-slate-700 w-full"
                >
                  {/* Check Icon */}
                  <img 
                    src={ccc} 
                    alt="checkmark" 
                    className="w-4 h-4"
                  />

                  {/* Feature Text */}
                  <span className="text-sm font-medium leading-none">
                    {feature}
                  </span>
                </div>
              ))}
            </div>


            {/* Button */}
            {product.tryItLink && (
              product.tryItLink.startsWith("http") ? (
                <a
                  href={product.tryItLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-[160px] h-[38px] px-6 py-1 rounded-[8px] border border-[#3A3F40] hover:bg-gray-100 transition-colors"
                >
                  Try It Now
                </a>
              ) : (
                <Link
                  to={product.tryItLink}
                  className="inline-flex items-center justify-center w-[160px] h-[38px] px-6 py-1 rounded-[8px] border border-[#3A3F40] hover:bg-gray-100 transition-colors"
                >
                  Try It Now
                </Link>
              )
            )}
          </div>

          {/* Right Image */}
          <div className="flex-1 relative order-1 lg:order-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
