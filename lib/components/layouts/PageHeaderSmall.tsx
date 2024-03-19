import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import { IconClose, IconMenu, IconTelegram, IconTwitter } from "..";
import { useState } from "react";
import { NavLink } from "../nav-link";
import { PageFooter } from "./PageFooter";

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
          <Menu />
        </div>
      </div>
    </div>
  );
};

// const mobileHeaderExpandedStyle = twMerge(
//   "w-parent",
//   "h-parent",
//   "flex",
//   "flex-col",
//   "items-center",
//   "justify-between",
//   "p-8",
//   "text-text-inverted",
//   "bg-base-colors/neutral-600",
//   "z-20",
//   "fixed",
//   "top-0",
//   "left-0",
// );

const mobileHeaderExpandedStyle = twMerge(
  "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
);
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpenMenu}>
        <IconMenu />
      </div>
      <nav className={`${isOpen ? mobileHeaderExpandedStyle : "hidden"}`}>
        <div className="flex flex-row justify-between w-full">
          <RalphLogo variant="full-horizontal" />
          <div onClick={handleCloseMenu}>
            <IconClose />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <NavLink
            variant="medium"
            label="Website"
            url="https://ralphthemoose.com/"
          />
          <NavLink
            variant="medium"
            label="Swap"
            url="https://app.elk.finance/swap/8453/ETH/ELK"
          />
          <NavLink
            variant="medium"
            label="Farm"
            url="https://app.elk.finance/farms/all/"
          />
          <NavLink
            variant="medium"
            label="Twitter"
            url="https://twitter.com/RalphTheMoose"
            icon={<IconTwitter />}
          />
          <NavLink
            variant="medium"
            label="Telegram"
            url="https://t.me/RalphTheMoose"
            icon={<IconTelegram />}
          />
        </div>
        <PageFooter />
      </nav>
    </div>
  );
};
