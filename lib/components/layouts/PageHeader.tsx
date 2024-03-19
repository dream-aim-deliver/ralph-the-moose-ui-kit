import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import { DropdownTrigger, IconClose, IconMenu, IconNetworkBase } from "..";
import { Signal } from "@preact/signals-react";
import { Menu } from "./Menu";

export interface SupportedNetworkProps {
  name: string;
  chainId: number;
  icon: React.ReactNode;
}

export interface PageHeaderProps {
  networks: SupportedNetworkProps[];
  activeNetwork: SupportedNetworkProps;
  onNetworkChange: (network: SupportedNetworkProps) => void;
  menuOpenSignal: Signal<boolean>;
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
      <div
        id="header-content-sm"
        className="w-full flex flex-row items-center justify-between gap-[16px] xl:hidden"
      >
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <RalphLogo variant="full-horizontal" />
        </div>
        <div id="header-content-sm-network-menu" className="flex">
          <div
            id="menu-small"
            className="flex flex-row items-start justify-start p-2"
          >
            {!props.menuOpenSignal.value ? (
              <div
                onClick={() => {
                  props.menuOpenSignal.value = true;
                }}
                className="flex flex-row gap-4 cursor-pointer hover:text-text-primary"
              >
                <DropdownTrigger
                  title=""
                  variant="small"
                  expanded={false}
                  selectedOption="Base"
                  icon={<IconNetworkBase />}
                />
                <IconMenu size={10} />
              </div>
            ) : (
              <div>
                <div
                  onClick={() => {
                    props.menuOpenSignal.value = false;
                  }}
                  className="text-text-inverted cursor-pointer hover:text-text-primary"
                >
                  <IconClose />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        id="header-content-xl"
        className="hidden xl:flex w-full flex-row items-start justify-between"
      >
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <RalphLogo variant="full-horizontal" />
        </div>
        <div className="flex flex-row items-center justify-between text-base ml-40 mr-40">
          <Menu />
        </div>
        <div className="cursor-pointer">
          <DropdownTrigger
            title=""
            variant="large"
            expanded={false}
            selectedOption="Base"
            icon={<IconNetworkBase />}
          />
        </div>
      </div>
    </div>
  );
};
