import { Icon } from "@/components/icons/Icon";
import menuIcon from "@/assets/icons/menu.svg";

export interface IconMenuProps {
  className?: string;
}

export const IconMenu: React.FC<IconMenuProps> = ({ className }) => {
  return <Icon src={menuIcon} alt="menu" className={className} />;
};
