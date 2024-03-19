import { twMerge } from "tailwind-merge";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeaderSmall";

export const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={twMerge(
        "w-full relative",
        "flex flex-col w-full self-stretch justify-start bg-base-colors/neutral-600",
        "box-border",
        "pt-2 px-4 pb-6",
        "gap-[50px]",
      )}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <PageHeader />
      </div>
      <div className="flex flex-row items-center justify-start gap-[16px]">
        {children}
      </div>
      <div className="flex flex-row items-center justify-center gap-[16px]">
        <PageFooter />
      </div>
    </div>
  );
};

