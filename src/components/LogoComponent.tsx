import React from "react";

export const LogoComponent = () => {
  return (
    <div className="flex justify-center w-[150px] shadow gap-1 px-2 py-1 rounded-lg bg-zinc-900 text-xl">
      <span className="text-zinc-100">Oscar</span>
      <span className="text-zinc-300">Olg</span>
      <span className="bg-zinc-200 h-5 text-zinc-900 text-xs font-semibold px-1 py-0.5 rounded">
        Photo
      </span>
    </div>
  );
};
