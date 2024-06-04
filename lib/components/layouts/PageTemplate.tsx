import { twMerge } from "tailwind-merge";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { useState } from "react";
import { IconMooseHorn } from "../icons";
import { Toast, ToastProps } from "../toast";
import { ToastContext } from "../../contexts/ToastContext";
export const PageTemplate = ({
  menu,
  networkSelector,
  footerContent,
  children,
}: {
  menu: React.ReactNode;
  networkSelector: React.ReactNode;
  footerContent: string;
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const openToast = (data: ToastProps, timeout = 5000) => {
    setToasts([...toasts, data]);
    setTimeout(() => {
      closeToast(data.id);
    }, timeout);
  };

  const closeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      <div
        className={twMerge(
          "relative h-full min-h-screen min-w-screen w-screen",
          "flex w-full flex-col justify-between gap-12 self-stretch",
          "bg-base-colors/neutral-600",
          "box-border",
          "px-4 pb-6 pt-2",
          "overflow-x-hidden",
        )}
      >
        <PageHeader
          menu={menu}
          networkSelector={networkSelector}
          callbacks={{
            onMenuTrigger: (status: boolean) => {
              setIsMenuOpen(status);
            },
          }}
        />
        {!isMenuOpen && (
          <div
            id="content-container"
            className="grid-col-3 xl:grid-col-2 grid items-center justify-center gap-[16px] xl:grid xl:divide-y"
          >
            {children}
          </div>
        )}
        {isMenuOpen && <div className="h-full w-full">{menu}</div>}
        <div className="flex flex-col items-center justify-between font-varela text-text-inverted text-sm gap-4">
          {!isMenuOpen && <PageFooter content={footerContent} />}
          <div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="relative leading-[14px]">{`Crafted with `}</div>
              <div className="h-full self-stretch">
                <IconMooseHorn size={4} />
              </div>
              <div className="relative leading-[14px]">by the Ralph team</div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-50 ml-4 flex flex-col gap-3">
          {toasts.map((toast, index) => (
            <Toast
              id={toast.id}
              key={index}
              status={toast.status}
              title={toast.title}
              message={toast.message}
            />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
};
