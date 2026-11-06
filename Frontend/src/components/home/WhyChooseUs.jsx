import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Leaf, Compass, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Local Guides',
    description: 'Every trek is led by licensed native guides and veteran high-altitude Sherpas with deep local lore and expertise.',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Safety Protocols',
    description: 'We carry satellite communications, oxygen, and full medical gear on every high-altitude route with 24/7 rescue readiness.',
  },
  {
    icon: Leaf,
    title: 'Strict Eco & Ethical Standards',
    description: 'Committed to Leave No Trace, eco-friendly lodges, fair porter wages, and ethical treatment guaranteed across all operations.',
  },
  {
    icon: HeartHandshake,
    title: 'Small Groups & Personal Care',
    description: 'Small groups capped at 8-10 trekkers ensure individualized acclimatization pacing and meaningful cultural connections.',
  },
  {
    icon: Compass,
    title: 'Custom Curated Itineraries',
    description: 'Carefully planned acclimatization profiles and buffer days to maximize safety, comfort, and summit success rates.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge Support',
    description: 'From pre-departure fitness planning and visa advice to airport welcome, our team is always just a quick message away.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
            The Sherpa Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Explore With Us?
          </h2>
          <p className="mt-3 text-base text-slate-400">
            For over two decades, we have set the gold standard in high-altitude adventure, sustainable trekking, and authentic wilderness hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

