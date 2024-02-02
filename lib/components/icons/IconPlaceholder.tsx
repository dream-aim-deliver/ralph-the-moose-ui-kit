import icon from "@/assets/icons/placeholder.svg";
import { Icon } from "./Icon";
export const IconPlaceholder = () => {
  return (
    <Icon
      src={icon}
      alt="placeholder"
      className="w-full relative h-6 overflow-hidden"
    />
  );
};
