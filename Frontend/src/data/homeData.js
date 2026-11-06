/**
 * Centralized Data File for the Sherpa Escapes Homepage
 * 
 * Every heading, paragraph, button, image path, list, and metadata field
 * is defined here to ensure separation of content and presentation.
 */

import heroVideo from "../assets/videos/hero.mp4";

export const heroData = {
  eyebrow: "SHERPA ESCAPES",

  heading: [
    "THE MOUNTAINS ARE NOT A DESTINATION.",
    "THEY ARE AN EXPERIENCE."
  ],

  description:
    "Sherpa Escapes is led by a team of professional mountain guides, climbers, outdoor educators and explorers. We create experiences across the Himalayas that go beyond simply reaching a destination — helping people explore, learn, challenge themselves and discover something within.",

  backgroundImage: "/images/home/hero/hero-poster.jpg",

  backgroundVideo: heroVideo,

  primaryButton: {
    label: "EXPLORE EXPERIENCES",
    link: "/experiences"
  },

  secondaryButton: {
    label: "OUR STORY",
    link: "/about"
  }
};




export const aboutPreviewData = {
  eyebrow: "OUR PHILOSOPHY",

  heading: "MORE THAN A TRAVEL COMPANY",

  introduction:
    "Sherpa Escapes is a community of mountain guides, climbers, educators and explorers.",

  storyBeats: [
    {
      id: 1,
      number: "01",
      title: "A COMMUNITY OF EXPLORERS",
      text: "Sherpa Escapes is a community of mountain guides, climbers, educators and explorers.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Hikers exploring a mountain trail",
      imageCaption: "The people who make the journey"
    },
    {
      id: 2,
      number: "02",
      title: "THE MOUNTAINS TEACH US",
      text: "We believe the mountains have something to teach every person who enters them. Sometimes it is resilience. Sometimes it is patience. Sometimes it is simply the ability to slow down, observe and listen.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Mountain peaks",
      imageCaption: "Learning to slow down and observe"
    },
    {
      id: 3,
      number: "03",
      title: "EXPERIENCES THAT STAY",
      text: "Our journeys are created not just to take people somewhere, but to help them experience the mountains with greater awareness, confidence and respect.",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Natural mountain landscape",
      imageCaption: "Beyond reaching a destination"
    },
    {
      id: 4,
      number: "04",
      title: "THE PEOPLE BEHIND THE JOURNEY",
      text: "Sherpa Escapes is not just a name. It is a tribute to the people who make mountain journeys possible — the guides who work tirelessly behind the scenes, helping people experience the mountains, pursue their dreams and return with stories of their own.",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Mountain climber on an expedition",
      imageCaption: "Guiding, learning and exploring together"
    }
  ],

  statements: [
    "A PLACE TO EXPLORE.",
    "A COMMUNITY TO BELONG TO.",
    "AN EXPERIENCE TO CARRY HOME."
  ],

  closingLabel: "THIS IS SHERPA ESCAPES."
};



export const experiencesData = {

  heading: "OUR EXPERIENCES",

  experiences: [

    // =====================================
    // 01. TREKKING
    // =====================================

    {
      id: "trekking",
      title: "TREKKING",
      eyebrow: "WALK DEEPER INTO THE HIMALAYAS",

      shortDescription:
        "Discover remote trails, alpine lakes, high mountain passes and landscapes that stay with you long after the journey ends.",

      image: "/images/home/experiences/trekking.jpg",
      imageAlt: "Trekkers exploring a Himalayan mountain trail",

      link: "/experiences/trekking",

      journeys: [

        {
          id: "beas-kund",
          title: "BEAS KUND",
          location: "Himachal Pradesh",

          description:
            "Journey through the beautiful alpine landscapes of the Beas Kund valley, surrounded by dramatic mountain scenery and the high peaks of the Pir Panjal range.",

          image:
            "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Hikers on a mountain trail",

          link: "/experiences/beas-kund"
        },

        {
          id: "hampta-pass",
          title: "HAMPTA PASS",
          location: "Himachal Pradesh",

          description:
            "Experience a dramatic Himalayan crossing through changing landscapes, from green valleys and forests to the stark mountain terrain beyond the pass.",

          image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Snow-covered mountain peaks",

          link: "/experiences/hampta-pass"
        },

        {
          id: "kuari-pass",
          title: "KUARI PASS",
          location: "Uttarakhand",

          description:
            "Explore high Himalayan trails and expansive mountain views through one of Uttarakhand's celebrated trekking regions.",

          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Mountain landscape",

          link: "/experiences/kuari-pass"
        },

        {
          id: "kagbhusandi-tal",
          title: "KAGBHUSANDI TAL",
          location: "Uttarakhand",

          description:
            "Discover a remote Himalayan lake and its surrounding mountain landscape through a journey into a less-travelled region.",

          image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Remote mountain landscape",

          link: "/experiences/kagbhusandi-tal"
        }

      ]
    },


    // =====================================
    // 02. MOUNTAINEERING
    // =====================================

    {
      id: "mountaineering",
      title: "MOUNTAINEERING",
      eyebrow: "LEARN. CLIMB. EXPERIENCE.",

      shortDescription:
        "From your first high-altitude climb to demanding expedition objectives, experience mountaineering with professional mountain guides.",

      image: "/images/home/experiences/mountaineering.jpg",
      imageAlt: "High altitude Himalayan mountaineering",

      link: "/experiences/mountaineering",

      journeys: [

        {
          id: "yunam-peak",
          title: "YUNAM PEAK",
          location: "Lahaul, Himachal Pradesh",

          description:
            "An opportunity to experience high-altitude mountaineering in the remote mountain landscapes of Lahaul.",

          image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Snow-covered mountain peaks",

          link: "/experiences/yunam-peak"
        },

        {
          id: "kang-yatse",
          title: "KANG YATSE",
          location: "Markha Valley, Ladakh",

          description:
            "Explore the high mountain environment of Ladakh through a challenging mountaineering expedition.",

          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85",

          imageAlt: "High mountain summit",

          link: "/experiences/kang-yatse"
        },

        {
          id: "friendship-peak",
          title: "FRIENDSHIP PEAK",
          location: "Himachal Pradesh",

          description:
            "Experience high-altitude climbing in the dramatic mountain environment surrounding the Solang region.",

          image:
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Himalayan mountain expedition",

          link: "/experiences/friendship-peak"
        },

        {
          id: "ut-kangri",
          title: "UT KANGRI",
          location: "Ladakh",

          description:
            "Discover a demanding high-altitude mountain environment. Sherpa Escapes has a particular connection to UT Kangri through its team's winter ascent.",

          image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Mountain summit in winter",

          link: "/experiences/ut-kangri"
        }

      ]
    },


    // =====================================
    // 03. OUTDOOR EDUCATION
    // =====================================

    {
      id: "outdoor-education",
      title: "OUTDOOR EDUCATION",
      eyebrow: "THE MOUNTAINS ARE OUR CLASSROOM",

      shortDescription:
        "Learn beyond the classroom through mountain-based activities that develop leadership, teamwork, confidence and responsibility.",

      image: "/images/home/experiences/outdoor-education.jpg",
      imageAlt: "Outdoor learning in the mountains",

      link: "/experiences/outdoor-education",

      journeys: [

        {
          id: "outdoor-camps",
          title: "OUTDOOR CAMPS",
          location: "Himalayan regions",

          description:
            "Experience nature through outdoor camps that introduce participants to mountain environments, teamwork and outdoor living.",

          image:
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Outdoor mountain camping",

          link: "/experiences/outdoor-camps"
        },

        {
          id: "leadership-programmes",
          title: "LEADERSHIP PROGRAMMES",
          location: "Outdoor learning environments",

          description:
            "Build communication, teamwork, confidence and decision-making skills through shared outdoor experiences.",

          image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Group outdoor activities",

          link: "/experiences/leadership"
        },

        {
          id: "navigation",
          title: "NAVIGATION & SURVIVAL",
          location: "Mountain environments",

          description:
            "Develop an understanding of navigation, terrain awareness, outdoor equipment and responsible movement in nature.",

          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Outdoor exploration landscape",

          link: "/experiences/navigation"
        }

      ]
    },


    // =====================================
    // 04. EXPLORATION
    // =====================================

    {
      id: "exploration",
      title: "EXPLORATION",
      eyebrow: "BEYOND THE KNOWN",

      shortDescription:
        "Go beyond established routes. Discover remote valleys, lesser-known landscapes and new possibilities across the Himalayas.",

      image: "/images/home/experiences/exploration.jpg",
      imageAlt: "Remote Himalayan valley",

      link: "/experiences/exploration",

      journeys: [

        {
          id: "r1-peak",
          title: "R1 PEAK",
          location: "Raru Valley, Zanskar",

          description:
            "A landmark exploration project in the remote Raru Valley of Zanskar, where the team successfully climbed a virgin peak through route-finding and mountaineering.",

          image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Remote Himalayan mountain landscape",

          link: "/projects/r1-peak"
        },

        {
          id: "remote-valleys",
          title: "REMOTE VALLEYS",
          location: "Himalayas",

          description:
            "Explore lesser-known mountain regions, understand their landscapes and experience places beyond the familiar trekking routes.",

          image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Remote mountain valley",

          link: "/experiences/remote-valleys"
        },

        {
          id: "exploration-projects",
          title: "EXPLORATION PROJECTS",
          location: "Indian Himalayas",

          description:
            "Discover ongoing exploration initiatives, new routes and mountain projects driven by curiosity and a deeper understanding of the landscape.",

          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85",

          imageAlt: "Mountain exploration",

          link: "/projects"
        }

      ]
    }

  ],


  // =====================================
  // ADDITIONAL EXPERIENCES
  // =====================================

  additionalExperiences: [

    {
      id: "custom-expeditions",
      title: "Custom Expeditions",
      link: "/experiences/custom-expeditions"
    },

    {
      id: "outdoor-camps",
      title: "Outdoor Camps",
      link: "/experiences/outdoor-camps"
    },

    {
      id: "cycling-bike-tours",
      title: "Cycling & Bike Tours",
      link: "/experiences/cycling"
    },

    {
      id: "adventure-activities",
      title: "Adventure Activities",
      link: "/experiences/adventure-activities"
    },

    {
      id: "cultural-outdoor-festivals",
      title: "Cultural & Outdoor Festivals",
      link: "/experiences/festivals"
    }

  ],


  // =====================================
  // SECTION BUTTON
  // =====================================

  button: {
    label: "VIEW ALL EXPERIENCES",
    link: "/experiences"
  }

};


export const approachData = {
  heading: "WE DON'T JUST TAKE YOU TO THE MOUNTAINS.\nWE TEACH YOU HOW TO BE IN THEM.",
  values: [
    {
      id: "learn",
      number: "01",
      title: "LEARN",
      description: "Understand the environment, terrain, weather, equipment and yourself.",
      image: "/images/home/approach/learn.jpg",
    },
    {
      id: "experience",
      number: "02",
      title: "EXPERIENCE",
      description: "Slow down. Observe. Walk. Climb. Connect with the landscape and its people.",
      image: "/images/home/approach/experience.jpg",
    },
    {
      id: "explore",
      number: "03",
      title: "EXPLORE",
      description: "Go beyond the familiar and discover new valleys, trails and mountains.",
      image: "/images/home/approach/explore.jpg",
    },
    {
      id: "respect",
      number: "04",
      title: "RESPECT",
      description: "Leave the mountains with greater awareness than when you entered them.",
      image: "/images/home/approach/respect.jpg",
    },
  ],
};

export const featuredJourneysData = {
  heading: "CHOOSE YOUR NEXT EXPERIENCE",
  categories: [
    {
      id: "high-altitude-expeditions",
      title: "HIGH-ALTITUDE EXPEDITIONS",
      description: "Yunam Peak, Kang Yatse, Friendship Peak, UT Kangri and other high-altitude climbs.",
      image: "/images/home/journeys/high-altitude.jpg",
      link: "/packages",
      featuredDestinationNames: ["Yunam Peak", "Kang Yatse", "Friendship Peak", "UT Kangri"],
    },
    {
      id: "himalayan-treks",
      title: "HIMALAYAN TREKS",
      description: "Beas Kund, Hampta Pass, Kuari Pass, Kagbhusandi Tal and other Himalayan journeys.",
      image: "/images/home/journeys/himalayan-treks.jpg",
      link: "/packages",
      featuredDestinationNames: ["Beas Kund", "Hampta Pass", "Kuari Pass", "Kagbhusandi Tal"],
    },
    {
      id: "remote-unexplored",
      title: "REMOTE & UNEXPLORED",
      description: "Less-travelled valleys, traverses and exploration projects.",
      image: "/images/home/journeys/remote-unexplored.jpg",
      link: "/packages",
      featuredDestinationNames: ["Zanskar Traverses", "Miyar Valley", "Pin Bhaba"],
    },
    {
      id: "custom-experiences",
      title: "CUSTOM EXPERIENCES",
      description: "Private expeditions, customised treks and outdoor programmes.",
      image: "/images/home/journeys/custom-experiences.jpg",
      link: "/contact",
      featuredDestinationNames: ["Private Expeditions", "Youth Programmes", "Corporate Traverses"],
    },
  ],
};



export const teamPreviewData = {
  heading: "THE PEOPLE WHO LEAD THE WAY",

  description:
    "Behind every mountain journey is someone who understands the terrain, respects the mountains and takes responsibility for the people walking beside them.",

  image: "/images/team/expedition-team.jpg",

  buttonText: "MEET THE TEAM",
  buttonLink: "/about",

  teamMembers: [
    {
      id: "rajesh-giri",
      name: "RAJESH GIRI",
      designation: "Founder · Expedition Leader",
      speciality: "High-altitude expeditions and exploration.",
      image: "/images/team/rajesh-giri.jpg"
    },
    {
      id: "team-member-2",
      name: "TEAM MEMBER",
      designation: "Mountain Guide",
      speciality: "Trekking and mountain guiding.",
      image: "/images/team/guide.jpg"
    },
    {
      id: "team-member-3",
      name: "TEAM MEMBER",
      designation: "Mountaineer",
      speciality: "Technical climbing and expeditions.",
      image: "/images/team/mountaineer.jpg"
    },
    {
      id: "team-member-4",
      name: "TEAM MEMBER",
      designation: "Outdoor Educator",
      speciality: "Outdoor learning and leadership.",
      image: "/images/team/educator.jpg"
    }
  ]
};



export const storyBehindNameData = {
  heading: "WHY SHERPA?",
  paragraphs: [
    "The name Sherpa Escapes was inspired by a meeting between Rajesh and Pasang Sherpa from Nepal.",
    "After a long conversation about mountains, guiding, people and the Sherpa community, Rajesh was deeply inspired by the culture, dedication and contribution of Sherpa mountain guides.",
    "The name Sherpa Escapes was therefore chosen as a tribute to the entire guiding community — the people who put in immense effort to help others experience the mountains, achieve their dreams and safely reach places that once seemed impossible."
  ],
  closingStatement: [
    "THE SUMMIT MAY BE VISIBLE.",
    "THE PEOPLE WHO MAKE THE JOURNEY POSSIBLE OFTEN AREN'T."
  ],
  image: "/images/home/story/why-sherpa.jpg",
  imageCaption: "Himalayan Ridge Line & Guiding Legacy",
};

export const beyondKnownData = {
  heading: "BEYOND THE KNOWN",
  paragraphs: [
    "Exploration is an important part of Sherpa Escapes.",
    "Rajesh is particularly drawn towards remote regions, unexplored valleys and places that are still beyond the usual routes and maps.",
    "For him, exploration is not simply about reaching a new place. It is about understanding the landscape, learning from it and creating meaningful experiences in places that few people have experienced before."
  ],
  statementLines: [
    "NEW VALLEYS.",
    "NEW ROUTES.",
    "NEW STORIES."
  ],
  explorationProjects: [],
};

export const outdoorEducationData = {
  heading: "THE MOUNTAINS ARE OUR CLASSROOM",
  paragraphs: [
    "Sherpa Escapes also works with students and young people through outdoor education programmes.",
    "Through trekking, camping, navigation, climbing and mountain-based activities, participants develop teamwork, leadership, decision-making, resilience and responsibility."
  ],
  closingStatement: "Because some lessons are better learned while walking uphill.",
  image: "/images/home/education/outdoor-classroom.jpg",
  cta: {
    label: "Learn About Programmes",
    link: "/contact",
  },
};


export const projectsData = {
  heading: "BEYOND THE SUMMIT",

  projects: [
    {
      id: "r1-peak",
      title: "R1 PEAK",
      category: "FIRST ASCENT / ZANSKAR",
      description:
        "An expedition into the remote Raru Valley, where the team climbed a virgin peak through exploration and route-finding.",
      image: "/images/home/projects/r1-peak.jpg",
      imageAlt: "Remote Himalayan mountain expedition",
      link: "/projects/r1-peak",
    },
    {
      id: "ashes-to-summit",
      title: "ASHES TO SUMMIT",
      category: "EXPEDITION PROJECT",
      description:
        "A journey of determination, exploration and the enduring connection between people and mountains.",
      image: "/images/home/projects/ashes-to-summit.jpg",
      imageAlt: "Mountain expedition landscape",
      link: "/projects/ashes-to-summit",
    },
    {
      id: "ut-kangri",
      title: "UT KANGRI",
      category: "WINTER ASCENT / LADAKH",
      description:
        "A successful winter summit undertaken in demanding high-altitude conditions.",
      image: "/images/home/projects/ut-kangri.jpg",
      imageAlt: "Snow-covered Himalayan peak",
      link: "/projects/ut-kangri",
    },
    {
      id: "exploration",
      title: "BEYOND THE KNOWN",
      category: "EXPLORATION",
      description:
        "Discovering remote valleys, unfamiliar terrain and lesser-known mountain routes.",
      image: "/images/home/projects/exploration.jpg",
      imageAlt: "Remote Himalayan valley",
      link: "/projects/exploration",
    },
    {
      id: "high-altitude",
      title: "HIGH ALTITUDE",
      category: "EXPEDITION ARCHIVE",
      description:
        "A collection of high-altitude expeditions across Himachal Pradesh, Uttarakhand and Ladakh.",
      image: "/images/home/projects/high-altitude.jpg",
      imageAlt: "High-altitude mountain landscape",
      link: "/projects",
    },
  ],
};


export const storiesData = {
  heading: "FROM THE FIELD",

  articles: [
    {
      id: "himalayan-expeditions",
      title: "Beyond the Known Trails",
      category: "EXPEDITION REPORTS",
      excerpt:
        "Stories from the high Himalayas, where challenging terrain, changing weather and the spirit of exploration shape every expedition.",

      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",

      imageAlt: "Snow-covered Himalayan mountain peaks",

      link: "/blog/himalayan-expeditions",
    },

    {
      id: "mountain-knowledge",
      title: "Understanding the Mountains",
      category: "MOUNTAIN KNOWLEDGE",
      excerpt:
        "Learn about mountain environments, high-altitude conditions, weather patterns and the knowledge required to travel responsibly.",

      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",

      imageAlt: "Mountain landscape beneath a starry sky",

      link: "/blog/mountain-knowledge",
    },

    {
      id: "lessons-from-the-field",
      title: "Every Journey Teaches Something",
      category: "LESSONS FROM THE FIELD",
      excerpt:
        "The mountains teach patience, resilience and teamwork. Discover the lessons that stay with us long after returning home.",

      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85",

      imageAlt: "Trekkers walking along a mountain trail",

      link: "/blog/lessons-from-the-field",
    },

    {
      id: "exploration-journals",
      title: "Into the Unexplored",
      category: "EXPLORATION JOURNALS",
      excerpt:
        "Discover remote landscapes, lesser-known routes and the experiences that make exploring beyond familiar trails worthwhile.",

      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85",

      imageAlt: "Remote wilderness landscape",

      link: "/blog/exploration-journals",
    },
  ],

  categories: [
    "Expedition Reports",
    "Mountain Knowledge",
    "Lessons From The Field",
    "Route Stories",
    "Exploration Journals",
    "Team Experiences",
  ],

  button: {
    label: "READ OUR STORIES",
    link: "/blog",
  },
};



export const instagramData = {
  heading: "FOLLOW THE JOURNEY",

  description:
    "Expeditions. Training. Mountains. People. Stories from the field.",

  handle: "@INDIAHIKES",

  url: "https://www.instagram.com/indiahikes/",

  reels: [
    {
      id: "reel-1",
      title: "Say Yes to the Mountains",
      category: "TREKKING",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-2",
      title: "Into the Himalayas",
      category: "EXPLORATION",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-3",
      title: "Life on the Trail",
      category: "ADVENTURE",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-4",
      title: "Mountain Experiences",
      category: "MOUNTAIN LIFE",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-1",
      title: "Say Yes to the Mountains",
      category: "TREKKING",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-2",
      title: "Into the Himalayas",
      category: "EXPLORATION",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-3",
      title: "Life on the Trail",
      category: "ADVENTURE",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
    {
      id: "reel-4",
      title: "Mountain Experiences",
      category: "MOUNTAIN LIFE",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85",
      reelUrl:
        "https://www.instagram.com/reel/DRfCEmlEsNU/",
    },
  ],
};



export const finalCTAData = {
  heading: "WHERE DO YOU WANT THE MOUNTAINS TO TAKE YOU?",
  description:
    "Whether you're taking your first Himalayan trail, preparing for your first high-altitude expedition or looking for a valley beyond the usual routes, we'll help you find the right experience.",

  buttons: [
    {
      label: "EXPLORE EXPERIENCES",
      link: "/experiences",
      variant: "primary",
    },
    {
      label: "TALK TO OUR TEAM",
      link: "/contact",
      variant: "secondary",
    },
  ],
};

export const homeData = {
  hero: heroData,
  aboutPreview: aboutPreviewData,
  experiences: experiencesData,
  approach: approachData,
  featuredJourneys: featuredJourneysData,
  teamPreview: teamPreviewData,
  storyBehindName: storyBehindNameData,
  beyondKnown: beyondKnownData,
  outdoorEducation: outdoorEducationData,
  projects: projectsData,
  stories: storiesData,
  instagram: instagramData,
  finalCTA: finalCTAData,
};

export default homeData;

