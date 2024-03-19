import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import {
  DropdownTrigger,
  IconClose,
  IconMenu,
  IconNetworkBase,
  IconTelegram,
  IconTwitter,
} from "..";
import { NavLink } from "../nav-link";
import { Signal } from "@preact/signals-react";

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

export const Menu = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-center xl:gap-4 xl:shrink">
      <NavLink
        variant="medium"
        label="Website"
        url="https://ralphthemoose.com/"
        className="text-text-inverted"
      />
      <NavLink
        variant="medium"
        label="Swap"
        url="https://app.elk.finance/swap/8453/ETH/ELK"
        className="text-text-inverted"
      />
      <NavLink
        variant="medium"
        label="Farm"
        url="https://app.elk.finance/farms/all/"
        className="text-text-inverted"
      />
      <NavLink
        variant="medium"
        label="Twitter"
        url="https://twitter.com/RalphTheMoose"
        icon={<IconTwitter />}
        className="text-text-inverted"
      />
      <NavLink
        variant="medium"
        label="Telegram"
        url="https://t.me/RalphTheMoose"
        icon={<IconTelegram />}
        className="text-text-inverted"
      />
    </div>
  );
};
