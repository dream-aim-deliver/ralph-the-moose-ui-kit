import { DropdownContent } from "./DropdownContent";
import { DropdownItem, DropdownItemProps } from "./DropdownItem";
import { DropdownTrigger } from "./DropdownTrigger";
import { useState, useRef, useEffect } from "react";

export interface DropdownProps {
  title: string;
  variant: "small" | "large";
  items: DropdownItemProps[];
  defaultItem: DropdownItemProps;
  onChange?: (oldItem: DropdownItemProps, newItem: DropdownItemProps) => void;
  isPrimaryAction?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<DropdownItemProps>(
    props.defaultItem,
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(
          dropdownRef.current as unknown as {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            contains: (arg0: any) => any;
          }
        ).contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isOpen, setOpen] = useState(false);
  const optionNodes = props.items.map((item) => (
    <div
      key={item.title}
      onClick={() => {
        const oldItem = selectedOption;
        setSelectedOption(item);
        setOpen(false);
        if (props.onChange) {
          props.onChange(oldItem, item);
        }
      }}
      className="w-full"
    >
      <DropdownItem {...item} selected={item.title === selectedOption.title} />
    </div>
  ));
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <div
        id="dropdown-trigger"
        className="w-full"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <DropdownTrigger
          title={props.title}
          expanded={isOpen}
          selectedOption={selectedOption.title}
        />
      </div>
      <div className="w-full" ref={dropdownRef}>
        {isOpen && <DropdownContent>{optionNodes}</DropdownContent>}
      </div>
    </div>
  );
};
