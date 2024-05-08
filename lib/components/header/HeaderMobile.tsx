import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  IconMenu,
  IconTwitter,
  IconTelegram,
  IconNetworkBase,
  IconClose,
  IconMooseHorn,
} from "../icons";
import { NavLink } from "../nav-link/NavLink";
import { RalphLogo } from "../ralph-logo";
import { DropdownTrigger } from "../dropdown";

export interface HeaderMobileProps {}

const mobileHeaderStyle = twMerge(
  "flex",
  "flex-row",
  "justify-between",
  "w-full",
  "box-border",
  "pb-8",
);

const mobileHeaderExpandedStyle = twMerge(
  "w-screen",
  "h-screen",
  "flex",
  "flex-col",
  "items-center",
  "justify-between",
  "p-8",
  "text-text-inverted",
  "bg-base-colors/neutral-600",
  "z-20",
  "fixed",
  "top-0",
  "left-0",
);

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`${isOpen ? "hidden" : mobileHeaderStyle}`}>
        <RalphLogo variant="full-horizontal" />
        <div className="flex flex-row items-center gap-4">
          <DropdownTrigger
            title=""
            expanded={false}
            selectedOption=""
            variant="large"
            icon={<IconNetworkBase />}
            defaultColor="text-text-inverted"
          />
          <div onClick={handleOpenMenu}>
            <IconMenu />
          </div>
        </div>
      </div>

      <div className={`${isOpen ? mobileHeaderExpandedStyle : "hidden"}`}>
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
            isExternal={true}
            url="https://ralphthemoose.com/"
            icon={<IconMenu />}
          />
          <NavLink
            variant="medium"
            label="Swap"
            isExternal={true}
            url="https://app.elk.finance/swap/8453/ETH/ELK"
            icon={<IconMenu />}
          />
          <NavLink
            variant="medium"
            label="Farm"
            isExternal={true}
            url="https://app.elk.finance/farms/all/"
            icon={<IconMenu />}
          />
          <NavLink
            variant="medium"
            label="Twitter"
            isExternal={true}
            url="https://twitter.com/RalphTheMoose"
            icon={<IconTwitter />}
          />
          <NavLink
            variant="medium"
            label="Telegram"
            isExternal={true}
            url="https://t.me/RalphTheMoose"
            icon={<IconTelegram />}
          />
        </div>
        <div className="flex flex-row items-center gap-2 justify-center text-text-inverted">
          Crafted with {<IconMooseHorn />} by the Ralph team
        </div>
      </div>
    </div>
  );
};
