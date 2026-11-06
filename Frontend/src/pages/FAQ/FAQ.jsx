import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/common/Button';
import { faqData } from '../../data/faqData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQ = () => {
  const [openIds, setOpenIds] = useState([1]); // First FAQ opened by default

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer size="sm">
        <Breadcrumb items={[{ name: 'FAQ' }]} />

        <SectionHeader
          badge="Frequently Asked Questions"
          title="Everything You Need to Know Before You Trek"
          subtitle="Answers to common questions regarding high-altitude fitness, gear, mountain logistics, and safety protocols."
        />

        <div className="space-y-4 my-8">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900 pr-4 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 animate-fadeIn">
                    <p className="pl-8">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="my-12 p-8 rounded-3xl bg-sky-900 text-white text-center space-y-4">
          <MessageSquare className="w-10 h-10 text-sky-400 mx-auto" />
          <h3 className="text-xl font-bold">Have a question that is not answered here?</h3>
          <p className="text-xs sm:text-sm text-sky-200 max-w-md mx-auto">
            Our expedition specialists are ready to discuss your specific fitness level, gear choices, or custom dates.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                Speak With an Expedition Expert
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default FAQ;

