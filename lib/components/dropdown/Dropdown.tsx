import { useSignal } from "@preact/signals-react";
import { DropdownContent } from "./DropdownContent";
import { DropdownItem, DropdownItemProps } from "./DropdownItem";
import { DropdownTrigger } from "./DropdownTrigger";
import { useSignals } from "@preact/signals-react/runtime";

export interface DropdownProps {
  title: string;
  variant: "small" | "large";
  items: DropdownItemProps[];
  defaultItem: DropdownItemProps;
  onChange?: (oldItem: DropdownItemProps, newItem: DropdownItemProps) => void;
  isPrimaryAction?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  useSignals();
  const selectedOption = useSignal<DropdownItemProps>(props.defaultItem);
  const isOpen = useSignal(false);
  const optionNodes = props.items.map((item) => (
    <div
      key={item.title}
      onClick={() => {
        const oldItem = selectedOption.value;
        selectedOption.value = item;
        isOpen.value = false;
        if (props.onChange) {
          props.onChange(oldItem, item);
        }
      }}
      className="w-full"
    >
      <DropdownItem
        {...item}
        selected={item.title === selectedOption.value.title}
      />
    </div>
  ));
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <div
        id="dropdown-trigger"
        className="w-full"
        onClick={() => {
          isOpen.value = !isOpen.value;
        }}
      >
        <DropdownTrigger
          title={props.title}
          expanded={isOpen.value}
          selectedOption={selectedOption.value.title}
        />
      </div>
      <div className="w-full">
        {isOpen.value && <DropdownContent>{optionNodes}</DropdownContent>}
      </div>
    </div>
  );
};
