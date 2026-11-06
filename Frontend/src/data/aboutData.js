/**
 * Centralized Data File for the Sherpa Escapes About Us Page
 * 
 * Every piece of text, heading, subheading, milestone, qualification,
 * and team member profile is managed through this file.
 */

export const aboutData = {
  // ==========================================
  // A. Page Introduction
  // ==========================================
  introduction: {
    badge: "Sherpa Escapes",
    mainHeading: "ABOUT US",
    subheading: "PEOPLE OF THE MOUNTAINS",
    paragraphs: [
      "Born from a profound reverence for the high Himalayas, Sherpa Escapes is an adventure, mountaineering, and outdoor education collective dedicated to authentic high-altitude journeys. We operate not as mere tour organizers, but as custodians of the ancient mountain spirit—bridging ambitious explorers with the raw grandeur and spiritual silence of the world's most formidable terrain.",
      "Founded in 2015, our mission is rooted in the belief that the mountains are not obstacles to be conquered, but timeless sanctuaries to be understood. We guide with humility, travel with respect, and build expeditions where safety, resilience, and ethical companionship lead every single stride."
    ],
  },

  // ==========================================
  // B. Our Experience
  // ==========================================
  experience: {
    sectionHeading: "Our Experience",
    subheading: "TESTED ON THE HIGHEST PASSES",
    introduction: "Our foundation is built upon thousands of vertical meters climbed, weeks spent weathering extreme blizzards, and intimate knowledge of remote Himalayan valleys. From technical peak ascents to arduous winter reconnaissance, our experience is forged through real, uncompromising mountain reality.",
    milestones: [
      {
        id: "ut-kangri-winter",
        title: "WINTER ASCENT OF UT KANGRI",
        location: "Ladakh Himalayas (6,070m / 19,910 ft)",
        description: "A landmark winter mountaineering expedition confronting brutal sub-zero temperatures dropping to -38°C, treacherous blue ice, and relentless winds. Successfully led to the summit through disciplined acclimatization profiles, synchronized team rope work, and resilient local crew leadership.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        stats: "6,070m Peak • Sub-zero Winter Ascent",
      },
      {
        id: "r1-peak-zanskar",
        title: "R1 PEAK — ZANSKAR",
        location: "Zanskar Range, Ladakh",
        description: "An exploratory alpine-style climb in the heart of Zanskar's rugged, glacial geography. Navigating unmapped crevassed terrain, steep couloirs, and isolated approaches requiring complete logistical self-sufficiency and tactical route-finding.",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
        stats: "Remote Alpine Exploration • High Glacial Pass",
      },
      {
        id: "high-altitude-expeditions",
        title: "HIGH-ALTITUDE EXPEDITIONS",
        location: "Indian & Greater Himalayas",
        description: "A sustained track record of leading high-altitude alpine traverses, technical 6,000m+ peak climbs (including Mt. Yunam and Himalayan high passes), camping routes, and wilderness survival modules with an immaculate safety standard.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        stats: "10+ Years Continuous Expeditions • 100% Safety Focus",
      },
    ],
  },

  // ==========================================
  // C. Qualified to Lead
  // ==========================================
  qualifiedToLead: {
    sectionHeading: "Qualified to Lead",
    subheading: "INSTITUTIONAL MASTERY & CERTIFICATIONS",
    introduction: "In high-risk alpine environments, good intentions are never a substitute for certified competence. Every Sherpa Escapes expedition is anchored by leaders trained and certified by premier mountaineering institutes and international wilderness safety bodies.",
    qualifications: [
      {
        id: "mountaineering-certification",
        title: "Basic & Advanced Mountaineering",
        description: "Certified with top grades from India's premier mountaineering institutions (NIM, HMI, ABVIMAS), covering technical ice craft, rock climbing, crevasse rescue, and high-altitude navigation.",
      },
      {
        id: "wilderness-first-response",
        title: "Wilderness First Response",
        description: "Comprehensive medical and trauma protocols for remote backcountry environments, high-altitude pulmonary/cerebral edema (HAPE/HACE) diagnostics, and emergency vital stabilization.",
      },
      {
        id: "search-and-rescue",
        title: "Search & Rescue",
        description: "Rigorous technical rope rescue systems, avalanche victim detection, stretcher evacuations, and helicopter landing zone coordination in severe alpine weather.",
      },
      {
        id: "expedition-leadership",
        title: "High-altitude expedition leadership",
        description: "Decade-long experience managing expedition logistics, weather window forecasting, team acclimatization pacing, and crisis decision-making above 5,000 meters.",
      },
      {
        id: "safety-and-risk-management",
        title: "Mountain safety and risk management",
        description: "Continuous dynamic risk assessment, terrain hazard analysis, technical gear inspection protocols, and proactive contingency planning for extreme environments.",
      },
      {
        id: "outdoor-education",
        title: "Outdoor education",
        description: "Dedicated curriculum in wilderness ethics, youth outdoor leadership, environmental stewardship, and Leave No Trace (LNT) principles.",
      },
    ],
    closingParagraph: "These credentials are not decorative accolades—they are operational baselines that govern how we inspect our ropes, how we pace our clients, and how we ensure every participant returns home stronger and safer.",
  },

  // ==========================================
  // D. The People Behind the Name
  // ==========================================
  peopleBehindName: {
    sectionHeading: "The People Behind the Name",
    subheading: "HONORING A LEGENDARY SPIRIT",
    paragraphs: [
      "The word 'Sherpa' carries a legendary weight across the world. Beyond its ethnic origin, it has become synonymous with resilience, quiet courage, and boundless loyalty to those navigating harsh mountain terrain. At Sherpa Escapes, we honor this name by striving to embody these exact principles in every journey we curate.",
      "Our team brings together native Himalayan climbers, certified guides, and wilderness educators who have spent their lives listening to the rhythms of wind, snow, and altitude. We don't view the mountains as adversaries to defeat, but as profound teachers that strip away the superficial and reveal character.",
      "When you trek with us, you are not a client in a commercial convoy; you are a fellow traveler welcomed into a close-knit mountain family."
    ],
    highlightQuote: "THE MOUNTAINS BELONG TO NO ONE — BUT THEY HAVE SOMETHING TO TEACH EVERYONE.",
  },

  // ==========================================
  // E. Our Team
  // ==========================================
  team: {
    sectionHeading: "Our Team",
    subheading: "THE EXPEDITION LEADERSHIP",
    introduction: "Our expeditions are led by seasoned mountain professionals who combine rigorous mountaineering credentials with decades of backcountry intuition. Meet the people who guide your steps into the wild.",
    members: [
      {
        id: "rajesh-giri",
        name: "Rajesh Giri",
        designation: "Founder & Lead Expedition Leader",
        shortDescription: "Experienced mountain guide, expedition leader, and founder of Sherpa Escapes with over a decade of technical high-altitude Himalayan experience.",
        biography: "Rajesh Giri is an accomplished mountain guide, expedition leader, and the founder of Sherpa Escapes. With over a decade of technical high-altitude climbing across the Indian Himalayas, Rajesh has spearheaded challenging ascents including the extreme winter expedition to Mt. UT Kangri (6,070m) and explorations through the rugged terrain of Zanskar. Committed to authentic mountain stewardship, he personally leads expeditions to ensure uncompromising safety protocols, proper acclimatization, and genuine wilderness immersion.",
        origin: "Mumbai / Indian Himalayas",
        experience: "10+ Years High-Altitude Guiding",
        qualifications: [
          "Basic Mountaineering Course (BMC)",
          "Advanced Mountaineering Course (AMC)",
          "Wilderness First Responder (WFR)",
          "High-Altitude Search & Rescue"
        ],
        speciality: "High-Altitude Mountaineering, Winter Ascents, Alpine Expedition Leadership",
        image: "/images/team/rajesh-giri.jpg",
        slug: "rajesh-giri",
      },
    ],
  },

  // ==========================================
  // F. More Than Qualifications
  // ==========================================
  moreThanQualifications: {
    sectionHeading: "More Than Qualifications",
    subheading: "WHERE TECHNICAL SKILL MEETS MOUNTAIN INTUITION",
    paragraphs: [
      "Certificates can teach you how to tie a figure-eight knot, calculate rope load factors, or read an altimeter. But the true essence of a mountain guide lives in the intangibles: the intuitive sense to turn back twenty minutes before a storm breaks, the patience to match a struggling trekker's breath, and the humility to bow before nature's power.",
      "We believe that technical competence is only the entry requirement. What truly safeguards an expedition is emotional calm, situational clarity, and an abiding respect for every life entrusted to our care."
    ],
    highlightStatements: [
      "TRAINING BUILDS THE FOUNDATION.",
      "EXPERIENCE BUILDS THE GUIDE."
    ],
    closingStatement: "And the mountains continue to be our greatest teacher.",
  },
};

/**
 * ============================================================================
 * TEAM MEMBER PROFILE TEMPLATE & SPECIFICATION
 * ============================================================================
 * 
 * To add a new team member to aboutData.team.members, duplicate the template
 * below and append it to the `members` array.
 * 
 * Biography Format Guidelines:
 * - Length: 60 to 100 words.
 * - Structure:
 *   1. Full Name, role, and mountaineering background.
 *   2. Notable expeditions, summits, or technical achievements.
 *   3. Guiding philosophy, safety mindset, and leadership commitment.
 * - Tone: Grounded, authentic, respectful of mountain culture.
 * 
 * Expected Fields:
 * @typedef {Object} TeamMember
 * @property {string} id - Unique lowercase kebab-case identifier (e.g., 'tashi-namgyal')
 * @property {string} name - Full Name of the team member
 * @property {string} designation - Official title (e.g., 'Senior Mountain Guide & Medic')
 * @property {string} shortDescription - 1-2 sentence quick summary for cards
 * @property {string} biography - 60–100 word comprehensive bio
 * @property {string} origin - Place of birth or regional base (e.g., 'Leh, Ladakh' or 'Kathmandu, Nepal')
 * @property {string} experience - Years in mountaineering or numbers of expeditions
 * @property {string[]} qualifications - Array of certified courses, degrees, and licenses
 * @property {string} speciality - Core strengths (e.g., 'Rock Craft, Glacial Crevasse Rescue, High Passes')
 * @property {string} image - Path to portrait image in public directory or remote URL
 * @property {string} slug - URL-friendly slug for profile linking
 */
export const teamMemberTemplate = {
  id: "member-slug",
  name: "Full Name",
  designation: "Role / Title",
  shortDescription: "A concise 1-2 sentence overview of the guide's expertise and role.",
  biography: "Full biography between 60 and 100 words detailing technical background, significant summits, leadership experience, and personal commitment to client safety and environmental stewardship.",
  origin: "City, Region / Country",
  experience: "X+ Years in High-Altitude Guiding",
  qualifications: [
    "Basic Mountaineering Course (BMC)",
    "Advanced Mountaineering Course (AMC)",
    "Wilderness First Responder (WFR)"
  ],
  speciality: "Key focus areas (e.g. Winter Treks, Rock Climbing, Navigation)",
  image: "/images/team/member-slug.jpg",
  slug: "member-slug",
};

export default aboutData;

