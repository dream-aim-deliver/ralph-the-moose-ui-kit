import icon from "@/assets/icons/error.svg";

/**
 * IconError
 * @description Component for displaying error icon.
 * @return {JSX.Element} - Rendered IconError component.
 * @usage <IconError />
 * @status Complete
 */
export const IconError = ({ size = 40 }: { size?: number }) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-6";
  return <img src={icon} alt="error.svg" className={finalSize} />;
};
