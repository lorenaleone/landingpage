interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: { icon: 28, text1: 13, text2: 7 },
  md: { icon: 36, text1: 17, text2: 9 },
  lg: { icon: 52, text1: 24, text2: 12 },
};

export function Logo({ variant = 'default', size = 'md', showText = true }: LogoProps) {
  const s = sizes[size];
  const primaryColor = variant === 'light' ? '#FBF7EE' : '#1F6584';
  const accentColor = variant === 'light' ? 'rgba(251,247,238,0.65)' : '#3F829B';
  const textColor = variant === 'light' ? '#FBF7EE' : '#11171C';
  const subColor = variant === 'light' ? 'rgba(251,247,238,0.6)' : '#4A5560';

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* Icon mark */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        {/* Wave base */}
        <path
          d="M4 36 C10 32 14 40 20 36 C26 32 30 40 36 36 C40 33 43 34 44 36"
          stroke={primaryColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M4 40 C10 36 14 44 20 40 C26 36 30 44 36 40 C40 37 43 38 44 40"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Palm trunk */}
        <path
          d="M24 34 C23.5 28 22 22 24 16"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Palm leaves */}
        <path
          d="M24 16 C20 12 14 11 12 14 C16 14 20 17 24 16Z"
          fill={primaryColor}
        />
        <path
          d="M24 16 C28 11 34 10 36 13 C32 14 27 17 24 16Z"
          fill={primaryColor}
        />
        <path
          d="M24 16 C21 9 22 4 24 3 C25 7 25 12 24 16Z"
          fill={accentColor}
        />
        <path
          d="M24 16 C28 13 31 9 30 6 C27 9 25 13 24 16Z"
          fill={accentColor}
        />
        {/* Sun */}
        <circle cx="36" cy="12" r="4" fill={variant === 'light' ? 'rgba(251,247,238,0.5)' : '#C2A063'} />
      </svg>

      {showText && (
        <span className="leading-none" style={{ lineHeight: 1 }}>
          <span
            className="block font-display font-medium"
            style={{ fontSize: s.text1, color: textColor, letterSpacing: '-0.01em' }}
          >
            Brisa Azul
          </span>
          <span
            className="block font-sans uppercase tracking-widest"
            style={{ fontSize: s.text2, color: subColor, marginTop: 2 }}
          >
            Viagens
          </span>
        </span>
      )}
    </span>
  );
}
