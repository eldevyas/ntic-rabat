import { toast } from 'react-toastify';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ConstructionIcon from '@mui/icons-material/Construction';


let MAX_MESSAGE_LENGTH = 100;

function CheckLength(message: string) {
    if (message.length > MAX_MESSAGE_LENGTH) {
        // Make the message length equals to the maximum allowed.
        message = message.substring(0, MAX_MESSAGE_LENGTH);
        message = message + '...';
    }

    return message;
}


function pushDev(message: string) {
    message = CheckLength(message);

    return toast(`${message}`, {
        icon: "🚀",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


function pushInfo(message: string) {
    message = CheckLength(message);

    return toast.info(`${message}`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'default'
    });
}



function pushSuccess(message: string) {
    message = CheckLength(message);

    return toast.success(`${message}`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: CheckCircleIcon,
        // toastId: 'Success'
    });
}

function pushFailure(message: string) {
    message = CheckLength(message);

    return toast.error(message, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'Error'
    });
}

function pushWarning(message: string) {
    message = CheckLength(message);

    return toast.warning(message, {
        icon: WarningIcon,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'warning'
    });
}

export { pushDev, pushInfo, pushSuccess, pushFailure, pushWarning }; { { } }

export function push(arg0: string) {
    throw new Error("Function not implemented.");
}
