import HowItWorksHero from "../components/HowItWorks/HowItWorksHero";
import StepperProcess from "../components/HowItWorks/StepperProcess";
import StepDetailCard from "../components/HowItWorks/StepDetailCard";
import RealResultsSection from "../components/HowItWorks/RealResultsSection";
import FeatureShowcase from "../components/HowItWorks/FeatureShowcase";
import SupportResourcesSection from "../components/HowItWorks/SupportResourcesSection";
import EnterpriseTechSection from "../components/HowItWorks/EnterpriseTechSection";
import SupportHelpBox from "../components/HowItWorks/SupportHelpBox";

export default function HowItWorksPage() {
  return (
    <>
        <section>
            <HowItWorksHero/>
            <StepperProcess/>
            <StepDetailCard/>
            <RealResultsSection/>
            <FeatureShowcase/>
            <SupportResourcesSection/>
            <EnterpriseTechSection/>
            <SupportHelpBox/>

        </section>
    </>
  );
}
