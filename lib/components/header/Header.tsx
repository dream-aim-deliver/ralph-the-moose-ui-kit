import { RalphLogo } from "../ralph-logo";
import { twMerge } from "tailwind-merge";
import { HeaderMobile } from "../header";
import { IconMenu, IconTwitter, IconTelegram } from "../icons";
import { DropdownTrigger } from "../dropdown";
import { NavLink } from "../nav-link";
/**
 * ViewModel for link component.
 * @typedef {Object} HeaderProps
 */

export interface HeaderProps {
  variant: "mobile" | "desktop";
  expanded: boolean;
}

const desktopHeaderStyle = twMerge(
  "hidden",
  "xl:flex",
  "flex-row",
  "w-full",
  "h-full",
  "relative",
  // "bg-base-colors/neutral-100",
  "items-center",
  "justify-between",
  "box-border",
  "pb-8",
  "gap-16",
);

export const Header = () => {
  return (
    <div>
      <div className={"xl:hidden"}>
        <HeaderMobile />
      </div>

      <div className={desktopHeaderStyle}>
        <RalphLogo variant="full-horizontal" />
        <div className="flex flex-row items-center w-full gap-2">
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
          <DropdownTrigger
            title="Network"
            expanded={false}
            selectedOption="Base"
          />
        </div>
      </div>
    </div>
  );
};
