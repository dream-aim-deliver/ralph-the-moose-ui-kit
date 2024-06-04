import { twMerge } from "tailwind-merge";
import { RalphLogo } from "../ralph-logo";
import { IconClose, IconMenu } from "..";
import { useState } from "react";

export interface PageHeaderProps {
  menu: React.ReactNode;
  networkSelector: React.ReactNode;
  callbacks?: {
    onMenuTrigger: (status: boolean) => void;
  };
}
export const PageHeader = (props: PageHeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    props.callbacks?.onMenuTrigger(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    props.callbacks?.onMenuTrigger(false);
  };
  return (
    <div
      className={twMerge(
        "relative flex w-full flex-row items-center justify-between",
        "text-left font-gluten",
        "text-[23.64px]",
        "text-text-inverted ",
        "gap-[16px]",
      )}
    >
      <div
        id="header-content-sm"
        className="xl:hidden flex w-full flex-row items-center justify-between gap-[16px] "
      >
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <RalphLogo variant="full-horizontal" />
        </div>
        <div
          id="header-content-sm-network-menu"
          className={twMerge(
            "flex flex-col items-center justify-between",
            "bg-base-colors/neutral-600",
          )}
        >
          <div
            id="menu-small"
            className="flex flex-row items-start justify-start p-2"
          >
            {isMenuOpen ? (
              <div className="flex cursor-pointer flex-row">
                <div
                  className="cursor-pointer hover:text-text-primary"
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  <IconClose size={10} />
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                {props.networkSelector}

                <div
                  onClick={() => {
                    openMenu();
                  }}
                  className="cursor-pointer text-text-inverted hover:text-text-primary"
                >
                  <IconMenu size={10} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        id="header-content-xl"
        className="hidden xl:flex w-full flex-row items-start justify-between "
      >
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <RalphLogo variant="full-horizontal" />
        </div>
        <div className="ml-40 mr-40 text-base">{props.menu}</div>
        <div className="cursor-pointer">{props.networkSelector}</div>
      </div>
    </div>
  );
};
