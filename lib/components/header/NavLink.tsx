import { Link } from "../link";
import { IconExternalLinkSmall } from "../icons";
import { twMerge } from "tailwind-merge";

export interface NavLinkProps {
    label : string;
    link : string;
    isExternal : boolean;
    // icon: React.SVGProps<SVGSVGElement>;
    icon: React.ReactNode;
    leftIcon: boolean;
};

const navLinkStyle = twMerge(
    'flex', 'flex-row', 'items-center',
    // 'text-white',
    );

export const NavLink = ({label, icon, leftIcon, isExternal, link}: NavLinkProps) => {
    return (
        
    <div>
      {isExternal ? (
        <a className={navLinkStyle} href={link} target="_blank" rel="noopener noreferrer"> 
            {leftIcon ? (
                <div className="relative bottom-1 mr-1 ">{icon}</div>
            ): null}
            <Link variant="medium" label={label} onDark={true}/> 
            <IconExternalLinkSmall fill="base-colors/brand-400"/> 
        </a>
      ) : (
        <a className={navLinkStyle} href={link}> 
            <Link variant="medium" label={label} onDark={true}/> 
        </a>
      )}
    </div>        
    );
};