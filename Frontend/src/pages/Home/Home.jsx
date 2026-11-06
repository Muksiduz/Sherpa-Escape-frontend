import React from 'react';

// 13 Modular Homepage Components
import HeroSection from '../../components/home/HeroSection';
import AboutPreview from '../../components/home/AboutPreview';
import ExperiencesSection from '../../components/home/ExperiencesSection';
import ApproachSection from '../../components/home/ApproachSection';
import FeaturedJourneys from '../../components/home/FeaturedJourneys';
import TeamPreview from '../../components/home/TeamPreview';
import StoryBehindName from '../../components/home/StoryBehindName';
import BeyondKnown from '../../components/home/BeyondKnown';
import OutdoorEducation from '../../components/home/OutdoorEducation';
import ProjectsSection from '../../components/home/ProjectsSection';
import StoriesSection from '../../components/home/StoriesSection';
import InstagramSection from '../../components/home/InstagramSection';
import FinalCTA from '../../components/home/FinalCTA';

export const Home = () => {
  return (
    <div className="flex flex-col bg-slate-950">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Core Experiences */}
      <ExperiencesSection />

      {/* 4. Mountain Approach & Values */}
      <ApproachSection />

      {/* 5. Featured Journeys */}
      <FeaturedJourneys />

      {/* 6. Team Leadership Preview */}
      <TeamPreview />

      {/* 7. Why Sherpa Story */}
      <StoryBehindName />

      {/* 8. Beyond the Known Exploration */}
      {/* <BeyondKnown /> */}

      {/* 9. Outdoor Education */}
      <OutdoorEducation />

      {/* 10. Projects Archive */}
      <ProjectsSection />

      {/* 11. Dispatches / Stories */}
      <StoriesSection />

      {/* 12. Instagram Visual Notes */}
      <InstagramSection />

      {/* 13. Final Call to Action */}
      <FinalCTA />
    </div>
  );
};

export default Home;
