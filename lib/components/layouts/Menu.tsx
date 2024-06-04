import React from "react";

export const Menu = (props: { children?: React.ReactNode }) => {
  return (
    <div>
      <div className="xl:hidden w-full flex flex-col  items-center justify-center mb-8 gap-4 xl:shrink z-50">
        {props.children}
      </div>
      <div className="hidden xl:flex flex-row items-center justify-center mb-8 gap-4 xl:shrink z-50">
        {props.children}
      </div>
    </div>
  );
};
