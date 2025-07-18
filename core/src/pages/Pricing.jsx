//components
import PricingHero from "../components/Pricing/PricingHero";
import PricingPlans from "../components/Pricing/PricingPlans";
import SupportHelpBox from "../components/HowItWorks/SupportHelpBox";
import FeatureComparison from "../components/Pricing/FeatureComparison";
import FAQSection from "../components/Pricing/FAQSection";

export const Pricing = () => {
  return (
    <>
      <PricingHero/>
      <PricingPlans/>
      <FeatureComparison/>
      <FAQSection/>
      <SupportHelpBox/>
    </>
  );
};

export default Pricing;
