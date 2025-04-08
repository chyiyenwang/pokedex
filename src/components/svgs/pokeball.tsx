import React from 'react';

interface PokeballProps {
  fill?: string;
}

const Pokeball: React.FC<PokeballProps> = ({ fill = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width="72"
      height="72"
    >
      <mask id="pokeball-mask">
        {/* <!-- Full Circle (Mask Background) --> */}
        <rect width="36" height="36" fill="white" />
        
        {/* horizontal line */}
        <rect x="3" y="16.5" width="30" height="3" fill={fill} />
        
        {/* inner circle outline */}
        <circle cx="18" cy="18" r="4" fill={fill} />
      </mask>

      {/* <!-- Pokéball Shape with Mask Applied --> */}
      <circle cx="18" cy="18" r="15" fill={fill} mask="url(#pokeball-mask)" />

      {/* inner dot */}
      <circle cx="18" cy="18" r="2.25" fill={fill} />
    </svg>
  );
};

export default Pokeball;
