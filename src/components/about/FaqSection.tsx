'use client';

import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We specialize in 16 key industries: FMCG, Media & Entertainment, Cosmetics & Personal Care, Automotive, Real Estate, Fashion & Apparel, Machine Tools & Manufacturing, Aerospace, Food & Beverage, Sports Equipment, Woodcutting Machinery, Furniture, Oil & Gas, Plastics, Ceramics & Glass, and Jewellery. Our deep domain expertise in these industries allows us to deliver insights that are both strategically relevant and actionable.',
  },
  {
    question: 'How long does a typical research project take?',
    answer:
      'Project timelines vary based on scope, methodology, and sample size. A typical quantitative study takes 4-6 weeks from design to final report, while qualitative research can be completed in 2-4 weeks. We work closely with clients to establish realistic timelines that balance speed with research rigor.',
  },
  {
    question: 'What methodologies do you use?',
    answer:
      'We employ a comprehensive mix of qualitative and quantitative methodologies. This includes in-depth interviews, focus groups, ethnographic research, online and offline surveys, conjoint analysis, segmentation studies, brand tracking, and advanced statistical modeling. We select the optimal methodology based on your specific research objectives.',
  },
  {
    question: 'Do you work with startups or only established companies?',
    answer:
      'We work with organizations of all sizes, from startups to Fortune 500 companies. Our flexible engagement models and scalable solutions ensure that businesses at any stage can access high-quality market research. We tailor our approach and pricing to match your budget and business needs.',
  },
  {
    question: 'How do you ensure data quality and reliability?',
    answer:
      'Data quality is paramount to our work. We implement rigorous quality control measures including multi-stage validation, attention checks, logical consistency tests, and statistical outlier detection. Our fieldwork teams are extensively trained, and we conduct regular audits throughout the data collection process.',
  },
  {
    question: 'Can you conduct research in multiple markets or regions?',
    answer:
      'Yes, we have experience conducting research across India and can coordinate multi-market studies. We work with trusted local partners when needed to ensure cultural relevance and linguistic accuracy while maintaining consistent quality standards across all markets.',
  },
  {
    question: 'What deliverables can we expect?',
    answer:
      'Our standard deliverables include a comprehensive research report with executive summary, detailed findings, data visualizations, strategic recommendations, and an appendix with methodology and questionnaires. We also provide presentation decks and can conduct workshops to help your team internalize and act on the insights.',
  },
  {
    question: 'How do you handle confidentiality and data security?',
    answer:
      'We take confidentiality extremely seriously. All client information and research data are protected by strict NDAs and stored on secure, encrypted servers. Our team members sign confidentiality agreements, and we follow industry best practices for data protection and privacy compliance.',
  },
];

/**
 * FAQ Section Component
 * Accordion-style frequently asked questions
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-display-md font-bold text-neutral-black">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-body-md text-neutral-mid">
              Get answers to common questions about our research services and approach.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-neutral-border rounded-card overflow-hidden bg-white hover:shadow-card transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-light/50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="font-semibold text-body-lg text-neutral-black pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-brand-red flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-body-md text-neutral-mid leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* CTA below FAQ */}
        <FadeIn>
          <div className="mt-12 text-center">
            <p className="text-body-md text-neutral-mid mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-brand-red hover:text-brand-red-dark font-semibold transition-colors"
            >
              Contact Our Team
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
