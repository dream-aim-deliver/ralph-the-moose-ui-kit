import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import { IconMenu, IconTwitter, IconTelegram, IconNetworkBase, IconClose, IconMooseHorn} from "../icons";
import { NavLink, } from "../header";
import { RalphLogo } from "../ralph-logo";
import { DropdownTrigger } from "../dropdown";

export interface HeaderMobileProps {

}

const mobileHeaderStyle  = twMerge(
    "flex",
    "flex-row",
    "justify-between",
    "w-full",
    "box-border",
    "pb-8",
);

const mobileHeaderExpandedStyle  = twMerge(
    "w-screen",
    "h-screen",
    "flex",
    "flex-col",
    "items-center",
    "justify-between",
    "p-8",
    "text-text-inverted",
    "bg-base-colors/neutral-600",
    "z-20",
    "fixed",
    "top-0",
    "left-0",
);


export const HeaderMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <div className={`${ isOpen ? "hidden" : mobileHeaderStyle }`}>
            <RalphLogo variant="full-horizontal" />
            <div className="flex flex-row items-center gap-4">
                <DropdownTrigger title="" expanded={false} selectedOption="" variant="large" icon={<IconNetworkBase/>} defaultColor="text-text-inverted" />
                <div onClick={handleOpenMenu}><IconMenu/></div>
            </div>
        </div>

       <div className={`${ isOpen ? mobileHeaderExpandedStyle : "hidden" }`} >
            <div className="flex flex-row justify-between w-full">
                <RalphLogo variant="full-horizontal" />
                <div onClick={handleCloseMenu}><IconClose/></div>
            </div>
            <div  className="flex flex-col items-center justify-center gap-8">
                <NavLink label="Website" isExternal={false} link="https://ralphthemoose.com/" leftIcon={false} icon={<IconMenu />}/>
                <NavLink label="Swap" isExternal={true} link="https://app.elk.finance/swap/8453/ETH/ELK" leftIcon={false} icon={<IconMenu />}/>
                <NavLink label="Farm" isExternal={true} link="https://app.elk.finance/farms/all/" leftIcon={false} icon={<IconMenu />}/>
                <NavLink label="Twitter" isExternal={true} link="https://twitter.com/RalphTheMoose" leftIcon={true} icon={<IconTwitter />}/>
                <NavLink label="Telegram" isExternal={true} link="https://t.me/RalphTheMoose" leftIcon={true} icon={<IconTelegram />}/>
            </div>
            <div className="flex flex-row items-center gap-2 justify-center text-text-inverted">
                Crafted with {<IconMooseHorn />} by the Ralph team
            </div>
        </div>

    </div>


    // <div className="relative">
    //   {/* Hamburger menu icon */}
    //   <button
    //     className="md:hidden absolute top-0 right-0"
    //     onClick={handleOpenMenu}
    //   >
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
    //       <path className="block fill-current text-white" fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
    //     </svg>
    //   </button>

    //   {/* Full-size panel */}
    //   <div className={`md:hidden absolute inset-0 z-40 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
    //     {/* Panel content */}
    //     <div className="w-full max-w-5xl p-4 text-white">
    //       <h1 className="text-2xl">Mobile Menu</h1>
    //       <ul>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Contact</li>
    //       </ul>
    //     </div>

    //     {/* Close button */}
    //     <button className="absolute top-2 right-2" onClick={handleCloseMenu}>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24">
    //         <path className="block fill-current text-white" d="M14.348 14.348L10.91 9.918L7.472 14.348L4.396 11.404L1.65 14.348L7.472 17.291L4.396 20.196L1.65 17.291L7.472 14.348Z" />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
};

