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
    <section className="bg-brand-bg border-b border-brand-border py-12 sm:py-16">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {LUXURY_COMMITMENTS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="flex flex-col space-y-2 border-t border-brand-border/80 pt-5 sm:pt-6"
              >
                <div className="flex items-center gap-2.5 text-brand-dark">
                  <IconComponent className="w-4 h-4 text-brand-dark stroke-[1.25] flex-shrink-0" />
                  <h4 className="font-serif text-base sm:text-lg tracking-wide text-brand-dark font-medium">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-[13px] text-brand-textMuted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
