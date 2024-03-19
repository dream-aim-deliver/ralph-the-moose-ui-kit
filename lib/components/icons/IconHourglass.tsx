import icon from "@/assets/icons/hourglass.svg";

export const IconHourglass = ({ size = 40 }: { size?: number }) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-6";
  return <img src={icon} alt="hourglass.svg" className={finalSize} />;
};
