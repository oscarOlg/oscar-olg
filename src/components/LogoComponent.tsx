import React from "react";

export const LogoComponent = () => {
  return (
    <div className="flex justify-center w-[150px] shadow gap-1 px-2 py-1 rounded-lg bg-stone-900 text-xl">
      <span className="text-stone-100">Oscar</span>
      <span className="text-stone-300">Olg</span>
      <span className="bg-stone-200 h-5 text-stone-900 text-xs font-semibold px-1 py-0.5 rounded">
        Photo
      </span>
    </div>
  );
};
