//components
import DepartmentSolutions from "../components/UseCasescom/DepartmentSolutions";
import UseCasesHero from "../components/UseCasescom/UseCaseHero";
import BusinessChallenges from "../components/UseCasescom/BusinessChallenges";
import AutomationLevels from "../components/UseCasescom/AutomationLevels";
import SupportHelpBox from "../components/HowItWorks/SupportHelpBox";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";

export const UseCases = () => {
  return (
    <>
      <UseCasesHero />
      <DepartmentSolutions />
      <BusinessChallenges />
      <AutomationLevels />
      <SupportHelpBox />
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>
  );
};

export default UseCases;
