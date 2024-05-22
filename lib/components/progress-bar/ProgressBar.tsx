export interface ProgressBarProps {
  /**
   * The progress of the bar.
   */
  progress: number;
  /**
   * The width of the bar.
   */
  width: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div
      className={`flex w-full h-1.5 bg-base-colors/neutral-200 rounded-full overflow-hidden`}
      role="progressbar"
      aria-valuenow={props.progress}
      aria-valuemin={0}
      aria-valuemax={100} // Change the type from string to number
    >
      <div
        style={{ width: `${props.progress}%` }}
        className="flex flex-col justify-center rounded-full overflow-hidden bg-base-colors/brand-600 text-xs text-center whitespace-nowrap transition duration-500"
      ></div>
    </div>
  );
};
