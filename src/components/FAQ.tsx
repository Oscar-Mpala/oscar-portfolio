import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "It depends on the scope of your project, but I believe in transparent pricing. Simple, professional websites start at $100. Growing businesses that need content management and custom design usually invest around $250, while complex e-commerce or custom web applications start at $500. After our initial consultation, I will provide a fixed quote so there are no surprise fees."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on complexity. A Starter website usually takes 1 to 2 weeks. A Professional multi-page site with a CMS might take 3 to 4 weeks, while complex Premium applications or e-commerce platforms can take 6+ weeks. We will establish a clear, mutually agreed-upon timeline and milestones before any work begins."
  },
  {
    question: "What do you need from me to get started?",
    answer: "To kick things off, I typically need a brief overview of your business goals, any existing brand assets (like logos, colors, or fonts), and a general idea of the content (text and images) you want to include. Don't worry if you don't have everything perfectly organized yet—part of my job is to guide you through structuring your content effectively."
  },
  {
    question: "What if I don't know exactly what I want yet?",
    answer: "That is completely fine! Many clients start with just a general idea or a business problem they need solved. During our initial discovery phase, we'll discuss your goals, target audience, and pain points. I will then propose a strategic solution and design direction tailored specifically to your business."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Absolutely. If your project requires regular updates (like a blog, portfolio, or store inventory), I build the site with a user-friendly Content Management System (CMS) or a custom admin dashboard. You will be able to edit text, add images, and manage products without needing to write a single line of code."
  },
  {
    question: "Can you integrate third-party services and custom functionality?",
    answer: "Yes. As a full-stack developer, I can integrate a wide variety of third-party tools into your website. This includes payment gateways (like Stripe, PayPal, Paynow, and EcoCash), CRM systems, email marketing software, analytics, and custom APIs to ensure your website operates seamlessly with your existing business processes."
  },
  {
    question: "What happens after my website is launched?",
    answer: "I don't just launch your site and disappear. All of my packages include a period of post-launch support to ensure everything runs smoothly and to handle any immediate questions. For ongoing peace of mind, I also offer monthly maintenance retainers for continuous updates, security monitoring, and performance optimization."
  },
  {
    question: "Will I receive documentation and full project access?",
    answer: "Yes, 100%. Upon completion and final payment, you fully own the website. I will transfer all source code, domain configurations, and hosting accounts over to you. I also provide comprehensive documentation and guides on how to manage, use, and scale your new digital platform."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Got Questions? <span className="text-sky-600">I've Got Answers</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about working together, project processes, and deliverables.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}