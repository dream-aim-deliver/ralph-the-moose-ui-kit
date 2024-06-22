"use client";
import { TChainViewModelWithIcon } from "../../core";
import { DropdownContent, DropdownItem } from "../dropdown";
import { IconCaretUp, IconCaretDown } from "../icons";
import { useState, useEffect, useRef } from "react";

export interface NetworkSelectorProps {
  supportedNetworks: TChainViewModelWithIcon[];
  activeNetwork: TChainViewModelWithIcon;
  onNetworkChange: (network: TChainViewModelWithIcon) => void;
}

export const NetworkSelector = (props: NetworkSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const networkSelectorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        networkSelectorRef.current &&
        !(
          networkSelectorRef.current as unknown as {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            contains: (arg0: any) => any;
          }
        ).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const dropdownItems = props.supportedNetworks.map((network) => (
    <div
      key={network.name}
      onClick={() => {
        setIsOpen(false);
        props.onNetworkChange(network);
      }}
      className="w-full"
    >
      <DropdownItem
        title={network.name}
        icon={network.icon}
        selected={network.name === props.activeNetwork.name}
      />
    </div>
  ));

  const largeTrigger = (
    <div
      className={[
        "relative",
        "w-full",
        "flex",
        "flex-row",
        "items-center",
        "justify-start",
        "gap-[6px]",
        "font-varela",
        `text-text-inverted`,
        `border-text-inverted`,
        `hover:border-text-primary`,
      ].join(" ")}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className={"relative leading-[14px] hidden xl:visible"}>Network</div>
      <div
        className={[
          "cursor-pointer",
          "w-full relative rounded-[54px]",
          "box-border",
          "h-10",
          "flex flex-row items-center justify-between",
          "py-2.5 px-4",
          "text-left",
          "font-gluten",
          "border-t-[1px]",
          "border-solid",
          "border-r-[1px]",
          "border-b-[3px]",
          "border-l-[1px]",
          `hover:text-text-primary`,
          `hover:border-text-primary`,
          "transition-all",
        ].join(" ")}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
          <div className="w-[25px] relative h-[25px] overflow-hidden shrink-0">
            {props.activeNetwork.icon}
          </div>
          <b className="relative tracking-[-0.04em] leading-[16px]">
            {props.activeNetwork.name}
          </b>
        </div>
        <div className="flex flex-row w-3 h-relative ml-2 items-center">
          {isOpen && <IconCaretUp size={4} />}
          {!isOpen && <IconCaretDown size={4} />}
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="w-full">{largeTrigger}</div>
      <div className="w-full" ref={networkSelectorRef}>
        {isOpen && <DropdownContent>{dropdownItems}</DropdownContent>}
      </div>
    </div>
  );
};
