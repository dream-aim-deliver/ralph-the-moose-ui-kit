import React from "react";
import { IconError, IconSuccess, IconWarning, Card } from "..";

/**
 * Props for the Toast component.
 */
export interface ToastProps {
  /**
   * The status of the toast.
   * Can be one of: "success", "error", or "warning".
   */
  status: "success" | "error" | "warning";
  /**
   * The id of the toast.
   */
  id: string;
  /**
   * The title of the toast.
   */
  title: string;

  /**
   * The message of the toast.
   */
  message: string;

  /**
   * The children of the toast.
   */
  children?: React.ReactNode;
}

export const Toast = ({ status, title, message, children }: ToastProps) => {
  return (
    <div className={``}>
      <Card>
        <div className="flex h-10 w-full flex-row items-center justify-start gap-4">
          <div>
            {status === "success" && <IconSuccess size={12} />}
            {status === "error" && <IconError size={12} />}
            {status === "warning" && <IconWarning size={12} />}
          </div>
          <div className="relative flex w-full flex-1 flex-row items-center justify-start gap-[16px] text-left">
            <div className="flex flex-1 flex-col items-start justify-start gap-[4px] font-varela text-text-secondary">
              <div className="font-gluten font-bold text-text-primary">
                {title}
              </div>
              <div className="flex flex-row items-start justify-start self-stretch text-clip">
                {message}
              </div>
            </div>
            {children && (
              <div className="ml-auto flex flex-row items-start justify-start">
                {children}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
