import { twMerge } from "tailwind-merge";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";
import { IconNetworkBase, Menu } from "..";
import { useSignal, useSignals } from "@preact/signals-react/runtime";

export const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  useSignals();
  const menuOpenSignal = useSignal<boolean>(false);
  return (
    <div
      className={twMerge(
        "w-screen h-full relative",
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
        <div
          id="content-container"
          className="grid grid-col-3 xl:grid xl:grid-col-2 xl:divide-y items-center justify-center gap-[16px]"
        >
          {menuOpenSignal.value && <Menu />}
          {children}
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <PageFooter menuOpenSignal={menuOpenSignal} />
        </div>
      </div>
    </div>
  );
};
