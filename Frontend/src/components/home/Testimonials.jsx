import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Voices From The Trail
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Read what passionate travelers and adventurers from around the world have to say about their expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-sky-200 mb-4" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-sky-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <span className="text-[11px] font-semibold text-sky-600 block mt-0.5">
                    Expedition: {item.trip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

