import Image from 'next/image';

interface LogoProps {
  height?: number;
  variant?: 'default' | 'white';
  className?: string;
}

/**
 * Sugoi Insights Logo Component
 * Uses the actual logo from /public/logo.png
 */
export function Logo({ height = 24, variant = 'default', className = '' }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Sugoi Insights"
      width={height * 3}
      height={height}
      className={`${variant === 'white' ? 'brightness-0 invert' : ''} ${className}`}
      priority
    />
  );
}
