import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import MatchHighlights from "@/components/MatchHighlights";
import PointsTablePreview from "@/components/PointsTablePreview";
import SponsorsSection from "@/components/SponsorsSection";
import TeamsSection from "@/components/TeamsSection";
import TopPlayersSection from "@/components/TopPlayersSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <TeamsSection></TeamsSection>
      <TopPlayersSection></TopPlayersSection>
      <MatchHighlights></MatchHighlights>
      <PointsTablePreview></PointsTablePreview>
      <SponsorsSection></SponsorsSection>
    </main>
  );
}
