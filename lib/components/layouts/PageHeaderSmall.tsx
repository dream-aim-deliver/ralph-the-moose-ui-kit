import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import { IconMenu, IconNetworkBase } from "..";

export interface SupportedNetworkProps {
  name: string;
  chainId: number;
  icon: React.ReactNode;
}

export interface PageHeaderProps {
  networks: SupportedNetworkProps[];
  activeNetwork: SupportedNetworkProps;
  onNetworkChange: (network: SupportedNetworkProps) => void;
  menuItems: React.ReactNode;
}
export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div
      className={twMerge(
        "w-full relative flex flex-row items-center justify-between",
        "text-left font-gluten",
        "text-[23.64px]",
        "text-text-inverted ",
        "gap-[16px]",
      )}
    >
      <div className="flex flex-row items-center justify-start gap-[9px]">
        <RalphLogo variant="full-horizontal" />
      </div>
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <div className="rounded-[54px] box-border h-10 flex flex-row items-center justify-start py-2.5 px-2 border-t-[1px] border-solid border-text-inverted border-r-[1px] border-b-[3px] border-l-[1px]">
          <div className="flex flex-row items-center justify-start">
            {props.activeNetwork.icon}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start p-2">
          <IconMenu />
        </div>
      </div>
    </div>
  );
};
