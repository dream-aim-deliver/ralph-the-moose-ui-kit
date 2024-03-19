import React, { useEffect, useState } from "react";
import { IconError, IconSuccess, IconWarning, Modal } from "..";

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
   * The title of the toast.
   */
  title: string;

  /**
   * The message of the toast.
   */
  message: string;

  /**
   * Indicate whether the element auto hides or stays permanetly on screen.
   */
  isPermanent?: boolean;

  /**
   * The children of the toast.
   */
  children?: React.ReactNode;
}

enum ToastViewStatus {
  Show,
  Hide,
  Fading,
}

export const Toast = ({
  status,
  title,
  message,
  isPermanent = false,
  children,
}: ToastProps) => {
  const [viewStatus, setViewStatus] = useState<ToastViewStatus>(
    ToastViewStatus.Show,
  );
  useEffect(() => {
    setTimeout(() => {
      if (isPermanent) return;
      setViewStatus(ToastViewStatus.Fading);
    }, 3000);
  });

  useEffect(() => {
    if (viewStatus === ToastViewStatus.Fading) {
      setTimeout(() => {
        setViewStatus(ToastViewStatus.Hide);
      }, 3000);
    }
  });

  const classList = () => {
    switch (viewStatus) {
      case ToastViewStatus.Show:
        return "opacity-100 delay-300";
      case ToastViewStatus.Fading:
        return "animate-fadeout delay-[3000ms]";
      case ToastViewStatus.Hide:
        return "hidden";
    }
  };

  return (
    <div className={classList()}>
      <Modal>
        <div className="w-full h-10 flex flex-row items-center justify-start gap-4">
          <div>
            {status === "success" && <IconSuccess size={12} />}
            {status === "error" && <IconError size={12} />}
            {status === "warning" && <IconWarning size={12} />}
          </div>
          <div className="flex-1 w-full relative flex flex-row items-center justify-start gap-[16px] text-left">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] font-varela text-text-secondary">
              <div className="font-gluten font-bold text-text-primary">
                {title}
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-clip">
                {message}
              </div>
            </div>
            {children && (
              <div className="flex flex-row items-start justify-start ml-auto">
                {children}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
