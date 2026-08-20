import React from 'react';
import { Check, Zap, Sparkles, Building2, Plus } from 'lucide-react';

interface PricingTier {
  name: string;
  icon: any;
  tagline: string;
  price: string;
  popular?: boolean;
  includesPrevious?: string;
  features: string[];
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    icon: Zap,
    tagline: "For individuals, portfolios and simple business websites.",
    price: "$100",
    popular: false,
    features: [
      "1–5 pages",
      "Custom responsive design",
      "Contact & inquiry forms",
      "Basic SEO setup"
    ],
    cta: "Get Started"
  },
  {
    name: "Professional",
    icon: Sparkles,
    tagline: "For growing businesses that need a more complete web presence.",
    price: "$250",
    popular: true,
    includesPrevious: "Everything in Starter, plus:",
    features: [
      "5–10+ pages",
      "Advanced UI/UX design",
      "CMS / Content management",
      "Analytics integration",
      "Third-party integrations",
      "30-day post-launch support"
    ],
    cta: "Start a Project"
  },
  {
    name: "Premium",
    icon: Building2,
    tagline: "For businesses that need advanced functionality or e-commerce.",
    price: "$500",
    popular: false,
    includesPrevious: "Everything in Professional, plus:",
    features: [
      "E-commerce functionality",
      "Local payment integration",
      "Customer accounts & portals",
      "Inventory & order management",
      "Custom business workflows",
      "Priority SLA support"
    ],
    cta: "Discuss Your Project"
  }
];

const sharedFeatures = [
  "Responsive design",
  "Mobile optimization",
  "SEO-ready structure",
  "Performance optimization",
  "Deployment & launch",
  "Basic post-launch assistance"
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple pricing. Built around your <span className="text-sky-600">needs.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose a starting point based on the complexity of your project. Every website is custom-built, so your final quote is based strictly on your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div 
                key={index} 
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-white border-2 border-sky-500 shadow-xl shadow-sky-500/10 md:-translate-y-2' 
                    : 'bg-white/80 border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 min-h-[40px]">{tier.tagline}</p>
                  
                  <div className="mb-6 pb-6 border-b border-slate-100 flex flex-col">
                    <span className="text-slate-500 text-sm font-semibold mb-1">Starting at</span>
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  </div>

                  {/* Progressive Hierarchy Label */}
                  {tier.includesPrevious && (
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-slate-800">
                      <Plus className="w-4 h-4 text-sky-600" />
                      <span>{tier.includesPrevious}</span>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all mt-auto ${
                    tier.popular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Included in Every Project Section */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 text-center shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Included in every project</h4>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-slate-600 font-medium">
            {sharedFeatures.map((feature, idx) => (
              <React.Fragment key={idx}>
                <span>{feature}</span>
                {idx < sharedFeatures.length - 1 && (
                  <span className="text-slate-300 hidden sm:inline-block">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}