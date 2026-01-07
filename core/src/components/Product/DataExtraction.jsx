import React from "react";
import { Link } from "react-router-dom";
import dataextraction from "../../assets/images/dataextraction.png";

const products = [
  {
    id: "dataextraction",
    title: "Data Extraction Agent",
    subtitle: "Accurate & Scalable Extraction",
    color: "#4F46E5",
    description:
      "Nyuktwork is the dynamic and collaborative multi-agent network at the core of the Nyukt.AI ecosystem. It empowers NyukTRONs—intelligent AI agents—to seamlessly coordinate, share knowledge, exchange resources, and divide tasks in real time. By working together as a connected network, NyukTRONs can solve complex, multi-layered problems with speed and precision that go far beyond the capacity of individual agents. Designed for scalability and adaptability, Nyuktwork enables organizations to orchestrate intelligent workflows, unlock collective intelligence, and achieve mission-critical goals with unparalleled efficiency and resilience.",
    image: dataextraction,
  },
];

const ResearchandDev = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-[#f5f3ff] py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 mt-2">
            Research & <span className="text-indigo-600">Development</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Nyukt.AI’s R&D drives persistent memory, federated learning,
            explainable AI, and quantum-aware ML for a future-ready OS.
          </p>
        </div>
      </div>

      {/* Product Section */}
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

              {/* Left Content (Text) */}
              <div className="
    px-6 py-5 sm:px-8 sm:py-6 
    flex flex-col justify-center space-y-4
    order-2 md:order-1
  ">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p
                  className="text-lg font-medium"
                  style={{ color: product.color }}
                >
                  {product.subtitle}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-5">
                  {product.description}
                </p>

                <div className="pt-3">
                  <Link
                    to="https://daxtron.nyukt.ai/login"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-2.5 
        rounded-lg bg-slate-900 text-white text-sm font-medium
        hover:bg-slate-800 transition"
                  >
                    Try It Now
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full h-full order-1 md:order-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] md:h-[500px] object-cover"
                />
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ResearchandDev;
