import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import { IconMooseHorn } from "..";

export const PageFooter = () => {
  return (
    <div
      className={twMerge(
        "w-full relative flex flex-col items-center justify-center",
        "gap-[16px]",
        "text-left text-text-inverted font-varela",
        "text-sm",
      )}
    >
      <div className="items-center">
        <RalphLogo variant="icon" />
      </div>
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <div className="relative leading-[14px]">{`Crafted with `}</div>
        <div className="self-stretch h-full">
          <IconMooseHorn size={4} />
        </div>
        <div className="relative leading-[14px]">by the Ralph team</div>
      </div>
    </div>
  );
};
