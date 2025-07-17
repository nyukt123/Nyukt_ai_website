import { Container } from "@mui/material";
import HowItWorksHero from "../components/HowItWorks/HowItWorksHero";
import StepperProcess from "../components/HowItWorks/StepperProcess";
import StepDetailCard from "../components/HowItWorks/StepDetailCard";

export default function HowItWorksPage() {
  return (
    // <Container maxWidth="lg" disableGutters>
    //   <HowItWorksHero />
    //   <StepperProcess />
    //   <StepDetailCard />
    // </Container>
    <>
        <section>
            <HowItWorksHero/>
            <StepperProcess/>
            <StepDetailCard/>
        </section>
    </>
  );
}
