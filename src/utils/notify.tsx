import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const setPosition = (position: string): ToastPosition => {
    switch (position) {
        case "topCenter":
            return toast.POSITION.TOP_CENTER;
        case "topLeft":
            return toast.POSITION.TOP_CENTER;
        case "bottomLeft":
            return toast.POSITION.BOTTOM_LEFT;
        case "bottomCenter":
            return toast.POSITION.BOTTOM_CENTER;
        case "bottomRight":
            return toast.POSITION.BOTTOM_RIGHT;
        default:
            return toast.POSITION.TOP_RIGHT;
    }
};

export const notify = (
    message: string,
    type: string,
    position: string
): void => {
    switch (type) {
        case "success":
            toast.success(message, { position: setPosition(position) });
            return;
        case "error":
            toast.error(message, { position: setPosition(position) });
            return;
        case "warn":
            toast.warn(message, { position: setPosition(position) });
            return;
        case "info":
            toast.info(message, { position: setPosition(position) });
            return;
        default:
            toast(message, { position: setPosition(position) });
            return;
    }
};

export const confirmBox = (
    confirmMessage: string,
    confirmProcess: () => void,
    dismissProcess?: () => void
) => {
    Swal.fire({
        title: confirmMessage,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "네",
        cancelButtonText: "아니오",
    }).then((result) => {
        if (result.isConfirmed) {
            confirmProcess();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            if (dismissProcess) dismissProcess();
        }
    });
};
