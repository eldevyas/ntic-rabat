import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import NextNProgress from "nextjs-progressbar";

const ProgressIndicator = () => {
    return (
        <>
            <NextNProgress
                color="#39b54a"
                startPosition={0.3}
                stopDelayMs={500}
                height={5}
                showOnShallow={true}
                options={{ showSpinner: false, easing: "ease", speed: 500 }}
                transformCSS={(css) => {
                    // css is the default css string. You can modify it and return it or return your own css.
                    return <style>{css}</style>;
                }}
            />
        </>
    );
};

const CustomToastContainer = () => {
    return (
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={true}
            pauseOnHover
            transition={Flip}
            limit={3}
        />
    );
};

export {
    ProgressIndicator,
    CustomToastContainer,
    toast,
    motion,
    AnimatePresence,
};
