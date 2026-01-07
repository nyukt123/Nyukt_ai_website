import React from "react";
import nyuktacts from "../../assets/images/Nyuktacts1.png";

const products = [
    {
        id: "nyuktwork",
        title: "Nyuktwork",
        subtitle: "The Collaborative AI Ecosystem",
        color: "#4F46E5",
        description:
            "Nyuktwork is the dynamic and collaborative multi-agent network at the core of the Nyukt.AI ecosystem. It empowers NyukTRONs—intelligent AI agents—to seamlessly coordinate, share knowledge, exchange resources, and divide tasks in real time. By working together as a connected network, NyukTRONs can solve complex, multi-layered problems with speed and precision that go far beyond the capacity of individual agents. Designed for scalability and adaptability, Nyuktwork enables organizations to orchestrate intelligent workflows, unlock collective intelligence, and achieve mission-critical goals with unparalleled efficiency and resilience.",
        image: nyuktacts,
    },
    {
        id: "quantum-ml",
        title: "Quantum-Aware ML Simulator",
        subtitle: "Next-Gen Hybrid Intelligence",
        color: "#10B981",
        description:
            "Bring quantum into your ML stack—safely. Our simulator lets teams model qubits, gates, and decoherence; compose hybrid pipelines with classical learners; and benchmark against baselines. Features include QPU-agnostic execution, noise/latency modeling, auto-differentiation for VQCs, explainability artifacts, and CI-friendly reproducibility.",
        image: nyuktacts,
    },
];

const ResearchandDev = () => {
    return (
        <div className="w-full">

            {/* Hero */}
            <div className="bg-violet-50 py-28">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 mt-2">
                        Research & <span className="text-indigo-600">Development</span>
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
                        Nyukt.AI’s R&D drives persistent memory, federated learning,
                        explainable AI, and quantum-aware ML for a future-ready OS.
                    </p>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
                {products.map((product) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch md:min-h-[420px]">

                        {/* Image */}
                        <div className="order-1 md:order-2 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full max-h-[360px] md:max-h-full object-cover rounded-xl"
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
                        </div>

                    </div>


                ))}
            </div>
        </div>
    );
};

export default ResearchandDev;
