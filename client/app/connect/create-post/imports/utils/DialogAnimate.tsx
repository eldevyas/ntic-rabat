import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
// material
import { Dialog } from '@mui/material';
//

// ----------------------------------------------------------------------

DialogAnimate.propTypes = {
    open: PropTypes.bool.isRequired,
    animate: PropTypes.object,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired
};
const DISTANCE = 120;

const TRANSITION_ENTER = {
    duration: 0.64,
    ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT = {
    duration: 0.48,
    ease: [0.43, 0.13, 0.23, 0.96]
};
export const varFadeInUp = {
    initial: { y: DISTANCE, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
    exit: { y: DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
};


export default function DialogAnimate({ open = false, animate, onClose, children, ...other }: any) {
    return (
        <AnimatePresence>
            {open && (
                <Dialog
                    fullWidth
                    fullHeight
                    scroll="body"
                    maxWidth="xs"
                    open={open}
                    onClose={onClose}
                    PaperComponent={motion.div}
                    PaperProps={{
                        sx: {
                            borderRadius: 2,
                            bgcolor: 'background.paper',
                            height: '90%',
                            overflowY: 'scroll',
                            zIndex: 1000,
                        },
                        ...(animate || varFadeInUp)
                    }}
                    {...other}
                >
                    {children}
                </Dialog>
            )}
        </AnimatePresence>
    );
}
