import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DefaultButton } from "../../../core/button";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Skeleton from "@mui/material/Skeleton";

export default function Gallery() {
    // State to wether display images or not
    const [display, setDisplay] = useState(false);
    const [show, setShow] = useState(false);

    // use effect
    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setShow(true);
            }, 700);
        } else {
            setShow(false);
        }
    }, [display]);

    return (
        <>
            <div className="ViewImages">
                <DefaultButton
                    color="Black"
                    startIcon={<PhotoSizeSelectActualOutlinedIcon />}
                    onClick={() => setDisplay(!display)}
                >
                    Voir les photos de l&apos;institut
                </DefaultButton>
            </div>

            {display ? (
                <div className="Gallery">
                    <div className="D1">
                        {show ? (
                            <Image src="/assets/img/N1.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <div className="D2">
                        {show ? (
                            <Image src="/assets/img/N2.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <div className="D3">
                        {show ? (
                            <Image src="/assets/img/N3.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <div className="D4">
                        {show ? (
                            <Image src="/assets/img/N4.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <div className="D5">
                        {show ? (
                            <Image src="/assets/img/N5.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <div className="D6">
                        {show ? (
                            <Image src="/assets/img/N6.png" alt="" fill />
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                className="Skeleton"
                            />
                        )}
                    </div>
                </div>
            ) : null}
        </>
    );
}
