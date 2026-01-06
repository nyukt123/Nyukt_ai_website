import React from "react";

// Sample icons
import openai from "../../assets/icons/howitworksic/openai.png";
import claude from "../../assets/icons/howitworksic/cluade.png";
import langchain from "../../assets/icons/howitworksic/langchain.png";
import vectordb from "../../assets/icons/howitworksic/database.png";
import aws from "../../assets/icons/howitworksic/aws.png";
import k8s from "../../assets/icons/howitworksic/k.png";
import redis from "../../assets/icons/howitworksic/redis.png";
import postgres from "../../assets/icons/howitworksic/psql.png";
import aes from "../../assets/icons/howitworksic/lockk.png";
import oauth from "../../assets/icons/howitworksic/oauth.png";
import soc2 from "../../assets/icons/howitworksic/soc2.png";
import gdpr from "../../assets/icons/howitworksic/gdpr.png";

const techData = [
  {
    category: "AI & ML",
    items: [
      { icon: openai, label: "OpenAI GPT-4", desc: "Advanced language models" },
      { icon: claude, label: "Claude", desc: "Anthropic’s AI Assistant" },
      { icon: langchain, label: "Langchain", desc: "LLM Application Framework" },
      { icon: vectordb, label: "Vector DB", desc: "Semantic Search & Memory" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { icon: aws, label: "AWS", desc: "Cloud Infrastructure" },
      { icon: k8s, label: "Kubernetes", desc: "Container Orchestration" },
      { icon: redis, label: "Redis", desc: "High Performance Caching" },
      { icon: postgres, label: "PostgreSQL", desc: "Reliable Database" },
    ],
  },
  {
    category: "Security",
    items: [
      { icon: aes, label: "AES-256", desc: "End-to-End Encryption" },
      { icon: oauth, label: "OAuth 2.0", desc: "Secure Authentication" },
      { icon: soc2, label: "SOC 2", desc: "Compliance Certified" },
      { icon: gdpr, label: "GDPR", desc: "Privacy Compliant" },
    ],
  },
];

const EnterpriseTechSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 bg-gray-50 mb-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-[4px] mb-3">
          Enterprises Technology
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Built on Cutting-Edge Technology
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Our platform leverages the latest AI models and enterprise-grade
          infrastructure to deliver reliable, scalable automation
        </p>
      </div>

      {/* Tech cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {techData.map((block) => (
          <div
            key={block.category}
            className="bg-white rounded-2xl p-6 border border-gray-200 w-full max-w-md flex flex-col"
          >
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              {block.category}
            </h3>
            <div className="flex flex-col gap-3">
              {block.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold text-sm">
                      {item.label}
                    </span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnterpriseTechSection;
