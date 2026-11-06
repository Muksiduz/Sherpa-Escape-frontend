import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { aboutData } from '../../data/aboutData';

// Modular About Components
import AboutHero from '../../components/about/AboutHero';
import OurExperience from '../../components/about/OurExperience';
import Qualifications from '../../components/about/Qualifications';
import PeopleBehindName from '../../components/about/PeopleBehindName';
import TeamSection from '../../components/about/TeamSection';
import MoreThanQualifications from '../../components/about/MoreThanQualifications';

export const About = () => {
  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'About Us' }]} />

        {/* A. Page Introduction */}
        <AboutHero data={aboutData.introduction} />

        {/* B. Our Experience */}
        <OurExperience data={aboutData.experience} />

        {/* C. Qualified to Lead */}
        <Qualifications data={aboutData.qualifiedToLead} />

        {/* D. The People Behind the Name */}
        <PeopleBehindName data={aboutData.peopleBehindName} />

        {/* E. Our Team */}
        <TeamSection data={aboutData.team} />

        {/* F. More Than Qualifications */}
        <MoreThanQualifications data={aboutData.moreThanQualifications} />
      </PageContainer>
    </div>
  );
};

export default About;
