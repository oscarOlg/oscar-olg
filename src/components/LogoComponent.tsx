import React from "react";

export const LogoComponent = () => {
  return (
    <div className="flex justify-center w-[150px] shadow gap-1 px-2 py-1 rounded-lg bg-slate-900 text-xl">
      <span className="text-slate-100">Oscar</span>
      <span className="text-slate-300">Olg</span>
      <span className="bg-slate-200 h-5 text-slate-900 text-xs font-semibold px-1 py-0.5 rounded">
        Photo
      </span>
    </div>
  );
};
