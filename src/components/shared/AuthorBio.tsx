import React from 'react';

interface AuthorBioProps {
  name: string;
  title: string;
  bio?: string;
}

/**
 * Author Bio Component
 * Displays author information at the end of articles
 */
export function AuthorBio({ name, title, bio }: AuthorBioProps) {
  const defaultBio = `${name} is ${title} at Sugoi Insights, bringing deep expertise in market research and consumer insights to help clients make data-driven strategic decisions.`;

  return (
    <div className="flex items-start gap-6 p-6 bg-neutral-light rounded-card">
      {/* Author Photo Placeholder */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-neutral-border flex items-center justify-center">
          <svg
            className="w-10 h-10 text-neutral-mid"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      {/* Author Info */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-neutral-black mb-1">{name}</h3>
        <p className="text-sm font-medium text-neutral-mid mb-3">{title}</p>
        <p className="text-body-sm text-neutral-mid leading-relaxed">{bio || defaultBio}</p>
      </div>
    </div>
  );
}
