import { Icon } from "@/components/icons/Icon";
import menuIcon from "@/assets/icons/menu.svg";

/**
 * IconMenuProps
 */
export interface IconMenuProps {
  /**
   * Additional tailwind classes
   */
  className?: string;
}

/**
 * IconMenu component
 * @usage <IconMenu className="<additional tailwind classes>"/>
 */
export const IconMenu: React.FC<IconMenuProps> = ({ className }) => {
  return <Icon src={menuIcon} alt="menu" className={className} />;
};
