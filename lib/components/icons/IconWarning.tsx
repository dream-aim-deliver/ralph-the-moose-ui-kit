import icon from "@/assets/icons/warning.svg";

/**
 * IconWarning
 * @usage <IconWarning />
 */
export const IconWarning = ({ size = 40 }: { size?: number }) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-10 w-10";
  return <img src={icon} alt="warning" className={finalSize} />;
};
