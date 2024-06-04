import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";

export const PageFooter = ({ content }: { content: string }) => {
  return (
    <div
      className={twMerge(
        "relative flex w-full flex-col items-center justify-center",
        "gap-[16px]",
        "text-left font-varela text-text-inverted",
        "text-sm",
      )}
    >
      <div className="relative flex w-full flex-col items-center justify-center text-center font-varela mb-8 mt-16">
        {content}
      </div>
      <div className="items-center">
        <RalphLogo variant="icon" />
      </div>
    </div>
  );
};
