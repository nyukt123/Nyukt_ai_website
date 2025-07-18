//components
import DepartmentSolutions from "../components/UseCasescom/DepartmentSolutions";
import UseCasesHero from "../components/UseCasescom/UseCaseHero";
import BusinessChallenges from "../components/UseCasescom/BusinessChallenges";
import AutomationLevels from "../components/UseCasescom/AutomationLevels";
import SupportHelpBox from "../components/HowItWorks/SupportHelpBox";

export const UseCases = () => {
  return (
    <>
      <UseCasesHero/>
      <DepartmentSolutions/>
      <BusinessChallenges/>
      <AutomationLevels/>
      <SupportHelpBox/>
    </>
  );
};

export default UseCases;
