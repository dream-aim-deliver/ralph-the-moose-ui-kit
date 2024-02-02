import icon from "@/assets/icons/error.svg";

/**
 * IconError
 * @description Component for displaying error icon.
 * @return {JSX.Element} - Rendered IconError component.
 * @usage <IconError />
 * @status Complete
 */
export const IconError = () => {
  return <img src={icon} alt="error.svg" className="h-10 w-10" />;
};
