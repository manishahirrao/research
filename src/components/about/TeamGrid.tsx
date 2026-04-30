'use client';

import React from 'react';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';

interface TeamMember {
  name: string;
  title: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: 'Rajesh Kumar',
    title: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/rajesh-kumar',
  },
  {
    name: 'Priya Sharma',
    title: 'Head of Research',
    linkedin: 'https://www.linkedin.com/in/priya-sharma',
  },
  {
    name: 'Amit Patel',
    title: 'Director of Analytics',
    linkedin: 'https://www.linkedin.com/in/amit-patel',
  },
  {
    name: 'Neha Gupta',
    title: 'Client Strategy Lead',
    linkedin: 'https://www.linkedin.com/in/neha-gupta',
  },
];

/**
 * Team Grid Component
 * Leadership profile cards
 */
export function TeamGrid() {
  return (
    <section className="py-24 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            Leadership Team
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            Experienced professionals committed to delivering research excellence and strategic
            impact.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <SlideIn key={index} direction="up">
                <div className="text-center">
                  {/* Photo Placeholder */}
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-neutral-border overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-light to-neutral-border">
                      <svg
                        className="w-16 h-16 text-neutral-muted"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-bold text-neutral-black mb-1">{member.name}</h3>
                  <p className="text-sm text-neutral-mid font-medium mb-3">{member.title}</p>

                  {/* LinkedIn Link */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-red hover:text-brand-red-dark transition-colors"
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              </SlideIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
