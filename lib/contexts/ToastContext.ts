import { createContext, useContext } from "react";
import { ToastProps } from "../components";

export const ToastContext = createContext<
  | {
      openToast: (data: ToastProps, timeout?: number | undefined) => void;
      closeToast: (id: string) => void;
    }
  | undefined
>(undefined);

export const useToast = () => useContext(ToastContext);
