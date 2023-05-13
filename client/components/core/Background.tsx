import { motion } from "framer-motion";

function VectorSVG(props: any) {
    // Ovale random svg shape that can be animated with motion
    return (
        <>
            {props.Variant == 1 && (
                <svg
                    width="535"
                    height="466"
                    viewBox="0 0 535 466"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Background__Vectors__Vector"
                >
                    <path
                        opacity="0.5"
                        d="M386.666 1.19218C262.26 -15.1815 77.5696 303.621 0.77514 465.069C154.362 444.811 471.271 398.131 510.208 373.474C558.88 342.653 542.173 21.6593 386.666 1.19218Z"
                        fill="white"
                    />
                </svg>
            )}
            {props.Variant == 2 && (
                <svg
                    width="474"
                    height="544"
                    viewBox="0 0 474 544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Background__Vectors__Vector"
                >
                    <path
                        opacity="0.5"
                        d="M411.234 2.23469C286.828 -14.139 96.809 85.9598 20.0145 247.408C-91.2303 481.282 301.026 564.326 339.964 539.669C388.636 508.848 566.742 22.7018 411.234 2.23469Z"
                        fill="white"
                    />
                </svg>
            )}
            {props.Variant == 3 && (
                <svg
                    width="584"
                    height="284"
                    viewBox="0 0 584 284"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Background__Vectors__Vector"
                >
                    <path
                        opacity="0.5"
                        d="M564.881 15.7265C478.632 4.3749 67.5703 -34.2266 14.3301 77.7024C-62.7939 239.843 209.15 297.416 236.145 280.322C269.888 258.954 672.691 29.9159 564.881 15.7265Z"
                        fill="white"
                    />
                </svg>
            )}
        </>
    );
}

import { useState, useEffect } from "react";

export default function Background() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const opacity = Math.max(
                0,
                Math.min(1, scrollPosition / (windowHeight - 100))
            );
            setOpacity(opacity);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="Background">
                <div className="Background__Elipses">
                    <div className="Background__Elipses__Elipse"></div>
                    <div className="Background__Elipses__Elipse"></div>
                    <div className="Background__Elipses__Elipse"></div>
                    <div className="Background__Elipses__Elipse"></div>
                </div>
                <div className="Background__Vectors">
                    <VectorSVG Variant={1} />
                    <VectorSVG Variant={2} />
                    <VectorSVG Variant={3} />
                </div>

                <div
                    className={"Background__Overlay"}
                    style={{
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white",
                        top: 0,
                        left: 0,
                        opacity: opacity,
                        pointerEvents: opacity > 0 ? "auto" : "none",
                    }}
                ></div>
            </div>
        </>
    );
}
