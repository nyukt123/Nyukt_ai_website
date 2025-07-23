//components
import PricingHero from "../components/Pricing/PricingHero";
import PricingPlans from "../components/Pricing/PricingPlans";
import SupportHelpBox from "../components/HowItWorks/SupportHelpBox";
import FeatureComparison from "../components/Pricing/FeatureComparison";
import FAQSection from "../components/Pricing/FAQSection";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";

export const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <FeatureComparison />
      <FAQSection />
      <SupportHelpBox />
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>
  );
};

export default Pricing;
