import { motion } from "framer-motion";

function VectorSVG(props: any) {
    // Ovale random svg shape that can be animated with motion
    return (
        <motion.div
            className="VectorSVG"
            animate={{
                scale: [1, 1.2, 1],
                borderRadius: ["20%", "50%", "20%"],
                // translations
                translateX: [0, 20, 0],
            }}
            transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                {...props}
            >
                <path d="M0 0 L100 0 L100 100 L0 100 Z" />
            </svg>
        </motion.div>
    );
}

export default function Background() {
    return (
        <>
            <div className="Background">
                <div className="Elipses">
                    <div className="Elipse Elipse1"></div>
                    <div className="Elipse Elipse2"></div>
                    <div className="Elipse Elipse3"></div>
                    <div className="Elipse Elipse4"></div>
                </div>
                <div className="Vectors">
                    <VectorSVG />
                    <VectorSVG />
                    <VectorSVG />
                </div>
            </div>
        </>
    );
}
