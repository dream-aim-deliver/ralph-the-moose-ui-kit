import { twMerge } from "tailwind-merge";
import { PageFooter } from "./PageFooter";
import { Menu, PageHeader } from "./PageHeader";
import { IconNetworkBase } from "..";
import { useSignal, useSignals } from "@preact/signals-react/runtime";

export const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  useSignals();
  const menuOpenSignal = useSignal<boolean>(false);
  return (
    <div
      className={twMerge(
        "w-full h-full relative",
        "flex flex-col w-full self-stretch justify-start bg-base-colors/neutral-600",
        "box-border",
        "pt-2 px-4 pb-6",
      )}
    >
      <div className="space-y-16 items-center">
        <PageHeader
          networks={[
            {
              name: "Base",
              chainId: 1,
              icon: <IconNetworkBase />,
            },
          ]}
          activeNetwork={{
            name: "Base",
            chainId: 1,
            icon: <IconNetworkBase />,
          }}
          onNetworkChange={() => {}}
          menuOpenSignal={menuOpenSignal}
        />
        <div className="flex flex-col items-center justify-start gap-[16px]">
          {menuOpenSignal.value ? <Menu /> : children}
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <PageFooter menuOpenSignal={menuOpenSignal} />
        </div>
      </div>
    </div>
  );
};
