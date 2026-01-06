import visionic from "../../assets/icons/visionic.png";
import checkg from "../../assets/icons/check-circle-g.png";
import playb from "../../assets/icons/playb.png";
import desyv from "../../assets/images/desyv.png";

export default function StepDetailCard() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 mb-5">
      <div className="w-full max-w-[1280px] bg-white border border-slate-200 rounded-2xl
                      p-6 sm:p-8 lg:p-12
                      flex flex-col lg:flex-row gap-8">

        {/* Left Content */}
        <div className="flex-1 text-left">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-4">
            <img src={visionic} alt="Vision Icon" className="w-[48px] h-[48px]" />
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-slate-800 leading-snug">
                Describe Your Vision
              </h3>
              <p className="text-[12px] text-slate-500">
                Tell us what you want to achieve
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed mb-4">
            Simply describe your business process in natural language. Our AI
            understands context and helps you map out the perfect automation
            strategy.
          </p>

          {/* Feature List */}
          <ul className="space-y-2 mb-6">
            {[
              "Natural language processing",
              "Semantic mapping",
              "Insightful suggestions",
              "Context understanding",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-[14px] text-slate-600"
              >
                <img src={checkg} alt="check" className="w-[18px] h-[18px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button className="h-[38px] w-full sm:w-auto px-6 rounded-lg
                               bg-violet-600 text-white text-[15px] font-medium
                               hover:bg-violet-700 transition">
              Try this Step →
            </button>

            <button className="h-[38px] w-full sm:w-auto px-5 rounded-lg
                               border border-violet-600 bg-slate-100
                               text-violet-600 text-[15px] font-semibold
                               flex items-center justify-center gap-2
                               hover:bg-violet-50 transition">
              <img src={playb} alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[40%]
                        min-h-[220px] sm:min-h-[260px]
                        bg-slate-50 rounded-xl
                        flex items-center justify-center
                        mx-auto">
          <img
            src={desyv}
            alt="Step Visual"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
