import { useSignal, useSignals } from "@preact/signals-react/runtime";
import { TChainViewModelWithIcon } from "../../core";
import { DropdownContent, DropdownItem } from "../dropdown";
import { IconCaretUp, IconCaretDown } from "../icons";

export interface NetworkSelectorProps {
  supportedNetworks: TChainViewModelWithIcon[];
  activeNetwork: TChainViewModelWithIcon;
  onNetworkChange: (network: TChainViewModelWithIcon) => void;
}

export const NetworkSelector = (props: NetworkSelectorProps) => {
  useSignals();
  const selectedOption = useSignal<TChainViewModelWithIcon>(
    props.activeNetwork,
  );
  const isOpen = useSignal(false);
  const dropdownItems = props.supportedNetworks.map((network) => (
    <div
      key={network.name}
      onClick={() => {
        selectedOption.value = network;
        isOpen.value = false;
        props.onNetworkChange(network);
      }}
      className="w-full"
    >
      <DropdownItem
        title={network.name}
        icon={network.icon}
        selected={network.name === selectedOption.value.name}
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
        isOpen.value = !isOpen.value;
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
          {isOpen.value && <IconCaretUp size={4} />}
          {!isOpen.value && <IconCaretDown size={4} />}
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="w-full">{largeTrigger}</div>
      <div className="w-full">
        {isOpen.value && <DropdownContent>{dropdownItems}</DropdownContent>}
      </div>
    </div>
  );
};
