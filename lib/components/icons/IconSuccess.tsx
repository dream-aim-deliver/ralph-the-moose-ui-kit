import icon from "@/assets/icons/success.svg";

/**
 * IconSuccess
 * @usage <IconSuccess />
 */
export const IconSuccess = ({ size }: { size?: number }) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-40 w-40";
  return <img src={icon} alt="success" className={finalSize} />;
};
