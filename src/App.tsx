import { useState } from "react";
import StoryNavigation from "./components/layout/StoryNavigation";
import Footer from "./components/layout/Footer";
import AudioPlayer from "./components/layout/AudioPlayer";
import BeginningSection from "./components/beginning/BeginningSection";
import FirstDateSection from "./components/beginning/FirstDateSection";
import TimelineSection from "./components/timeline/TimelineSection";
import GallerySection from "./components/gallery/GallerySection";
import LittleThingsSection from "./components/memories/LittleThingsSection";
import ReflectionSection from "./components/reflection/ReflectionSection";
import DaysCounter from "./components/counter/DaysCounter";
import FinalInvitation from "./components/closing/FinalInvitation";
import HeroSection from "./components/hero/HeroSection";

export default function App() {
  const [audioVisible, setAudioVisible] = useState(true);

  return (
    <>
      <HeroSection />
      <StoryNavigation />
      <main>
        <BeginningSection />
        <FirstDateSection />
        <TimelineSection />
        <GallerySection />
        <LittleThingsSection />
        <ReflectionSection />
        <DaysCounter />
        <FinalInvitation />
      </main>
      {audioVisible ? (
        <AudioPlayer onClose={() => setAudioVisible(false)} />
      ) : (
        <button
          className="audio-open"
          type="button"
          onClick={() => setAudioVisible(true)}
          aria-label="Open optional music player"
        >
          <span aria-hidden="true">♫</span>
          <span>Background music</span>
        </button>
      )}
      <Footer />
    </>
  );
}
