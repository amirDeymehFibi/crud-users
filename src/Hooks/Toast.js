import { toast } from "react-toastify";

export const Error = (message) =>
  toast.error(message, {
    position: "top-right",
    theme: "light",
  });

export const Success = (message) =>
  toast.success(message, {
    position: "top-right",
    theme: "light",
  });

export const Warning = (message) =>
  toast.warning(message, {
    position: "top-right",
    theme: "light",
  });

export const Toast = (message, type = "success") =>
  toast[type](message, {
    position: "top-right",
    theme: "light",
  });
