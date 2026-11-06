import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-700 to-sky-900 text-white p-8 sm:p-12 shadow-2xl">
          {/* Subtle background circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-sky-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>Trail Digest</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get Expedition Updates & Exclusive Gear Guides
            </h2>

            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-xl mx-auto">
              Join 30,000+ mountain lovers. We share seasonal packing lists, permit updates, and private group early-access codes.
            </p>

            {isSubmitted ? (
              <div className="pt-4 flex items-center justify-center gap-2 text-emerald-300 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are subscribed! Welcome to the Sherpa community.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm shadow-md"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto shrink-0 bg-slate-900 hover:bg-slate-800 text-white py-3 px-6"
                >
                  Join Us
                </Button>
              </form>
            )}

            <p className="text-[11px] text-sky-200/70 pt-2">
              No spam, ever. Unsubscribe with one click anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

