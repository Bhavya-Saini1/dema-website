type LogoProps = {
  invert?: boolean;
};

export default function Logo({ invert = false }: LogoProps) {
  if (invert) {
    return (
      <div
        className="flex h-10 flex-col items-center justify-center gap-1 text-current"
        role="img"
        aria-label="DEMA"
      >
        <svg
          viewBox="4 0 42 40"
          className="h-4 w-auto shrink-0"
          aria-hidden="true"
        >
          <rect
            x="11.86"
            y="15"
            width="10"
            height="10"
            rx="2"
            fill="currentColor"
            transform="rotate(45 16.86 20)"
          />
          <path
            d="M20 4 L36 20 L20 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
          />
        </svg>
        <div className="flex flex-row items-center gap-[2px] font-sans text-lg font-bold leading-none tracking-widest">
          <span>D</span>
          <div className="flex h-[14px] w-[10px] flex-col justify-between">
            <div className="h-[2px] w-full bg-current" />
            <div className="h-[2px] w-full bg-current" />
            <div className="h-[2px] w-full bg-current" />
          </div>
          <span>M</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-10 flex-col items-center justify-center gap-1"
      role="img"
      aria-label="DEMA"
    >
      <svg
        viewBox="4 0 42 40"
        className="h-4 w-auto shrink-0"
        aria-hidden="true"
      >
        <rect
          x="11.86"
          y="15"
          width="10"
          height="10"
          rx="2"
          fill="#DF3D2C"
          transform="rotate(45 16.86 20)"
        />
        <path
          d="M20 4 L36 20 L20 36"
          fill="none"
          stroke="#DF3D2C"
          strokeWidth="10"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="8"
        />
      </svg>
      <div className="flex flex-row items-center gap-[2px] font-sans text-lg font-bold leading-none tracking-widest text-navy">
        <span>D</span>
        <div className="flex h-[14px] w-[10px] flex-col justify-between">
          <div className="h-[2px] w-full bg-navy" />
          <div className="h-[2px] w-full bg-navy" />
          <div className="h-[2px] w-full bg-navy" />
        </div>
        <span>M</span>
      </div>
    </div>
  );
}
