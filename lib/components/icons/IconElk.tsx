import icon from "@/assets/icons/elk.svg";

/**
 * IconElk
 * @usage <IconElk />
 */
export const IconElk = ({ size }: { size: number }) => {
  const finalSize = size ? `h-${size} w-${size}` : "h-6 w-6";
  return (
    <img
      src={icon}
      alt="elk.svg"
      className={`w-full relative ${finalSize} overflow-hidden`}
    />
  );
};
