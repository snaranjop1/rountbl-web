import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";

const notifyError = (message) => {
  toast.error(message, {
    icon: <ExclamationCircleIcon className="text-red-600" />,
    className: "radius-lg",
    bodyClassName: "text-sm",
  });
};

const ToastService = { notifyError };

export default ToastService;
