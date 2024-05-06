// import { IconMenu } from "../icons/IconMenu";
import { RalphLogo } from "../ralph-logo";
import { twMerge } from "tailwind-merge";
import { NavLink, HeaderMobile } from "../header";
import { IconMenu, IconTwitter, IconTelegram, IconNetworkBase } from "../icons";
import { DropdownTrigger } from "../dropdown";
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
            label="Website"
            isExternal={true}
            link="https://ralphthemoose.com/"
            leftIcon={false}
            icon={<IconMenu />}
          />
          <NavLink
            label="Swap"
            isExternal={true}
            link="https://app.elk.finance/swap/8453/ETH/ELK"
            leftIcon={false}
            icon={<IconMenu />}
          />
          <NavLink
            label="Farm"
            isExternal={true}
            link="https://app.elk.finance/farms/all/"
            leftIcon={false}
            icon={<IconMenu />}
          />
          <NavLink
            label="Twitter"
            isExternal={true}
            link="https://twitter.com/RalphTheMoose"
            leftIcon={true}
            icon={<IconTwitter />}
          />
          <NavLink
            label="Telegram"
            isExternal={true}
            link="https://t.me/RalphTheMoose"
            leftIcon={true}
            icon={<IconTelegram />}
          />
          <DropdownTrigger
            title="Network"
            expanded={false}
            selectedOption="Base"
            variant="large"
            icon={<IconNetworkBase />}
            defaultColor="text-base-colors/neutral-900"
          />
        </div>
      </div>
    </div>
  );
};
