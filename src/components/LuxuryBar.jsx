import React from 'react';
import { LUXURY_COMMITMENTS } from '../data/products';
import { Truck, ShieldCheck, Sparkles, Headphones } from 'lucide-react';

const iconMap = {
  Truck: Truck,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Headphones: Headphones,
};

export default function LuxuryBar() {
  return (
    <section className="bg-brand-surface border-b border-brand-border py-8 sm:py-10">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LUXURY_COMMITMENTS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-brand-bg/50 border border-brand-border/60 transition-colors hover:bg-brand-bg"
              >
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary flex-shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
