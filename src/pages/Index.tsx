
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { ConferenceIntro } from "@/components/ConferenceIntro";
import { Benefits } from "@/components/Benefits";
import { Audience } from "@/components/Audience";
import { Speaker } from "@/components/Speaker";
import { Registration } from "@/components/Registration";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PainPoints />
      <ConferenceIntro />
      <Benefits />
      <Audience />
      <Speaker />
      <Registration />
    </div>
  );
};

export default Index;
