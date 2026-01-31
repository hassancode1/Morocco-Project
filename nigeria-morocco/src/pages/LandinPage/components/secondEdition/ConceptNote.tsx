

// --- SECTION IMPORTS ---
// Adjusting paths to point to your new "Conceptnote-Sections" folder
import WelcomeSection from "./Conceptnote-Sections/WelcomeSection";
import StrategicObjectives from "./Conceptnote-Sections/StrategicObjectives";
import SectoralFocus from "./Conceptnote-Sections/SectoralFocus";
import EventSchedule from "./Conceptnote-Sections/EventSchedule";
import TradeProducts from "./Conceptnote-Sections/TradeProducts";
import ExpectedOutcomes from "./Conceptnote-Sections/ExpectedOutcomes";

export default function ConceptNote() {
  return (
      <div className="bg-[#0D1210] overflow-hidden min-h-screen">

        {/* 1. Welcome Section (Dark Theme) */}
        <WelcomeSection />

        {/* 2. Strategic Objectives (White/Clean) */}
        <StrategicObjectives />

        {/* 3. Sectoral Focus (Grid of Cards) */}
        <SectoralFocus />

        {/* 4. Event Programme (Timeline/Schedule) */}
        <EventSchedule />

        {/* 5. Trade Products (Export Lists) */}
        <TradeProducts />

        {/* 6. Expected Outcomes (Dark Conclusion) */}
        <ExpectedOutcomes />

      </div>
  );
}