import React from 'react';
// MUI Skeleton
import Skeleton from '@mui/material/Skeleton';

const ScheduleSkeleton = () => {
    const Days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];


    return (
        <>
            {
                Days.map((Day, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <div>
                                    <span>{Day}</span>
                                    <span>18° C</span>
                                </div>
                            </td>

                            <td style={{ background: "transparent" }}>
                                <Skeleton variant="rectangular" sx={{ width: '100%', height: "100%", minHeight: "70px", borderRadius: "10px", animationDelay: "0.3s" }} />
                            </td>

                            <td style={{ background: "transparent" }}>
                                <Skeleton variant="rectangular" sx={{ width: '100%', height: "100%", minHeight: "70px", borderRadius: "10px", animationDelay: "0.6s" }} />
                            </td>

                            <td style={{ background: "transparent" }}>
                                <Skeleton variant="rectangular" sx={{ width: '100%', height: "100%", minHeight: "70px", borderRadius: "10px", animationDelay: "0.9s" }} />
                            </td>

                            <td style={{ background: "transparent" }}>
                                <Skeleton variant="rectangular" sx={{ width: '100%', height: "100%", minHeight: "70px", borderRadius: "10px", animationDelay: "1.2s" }} />
                            </td>
                        </tr>
                    );
                })
            }
        </>
    )
}

export default ScheduleSkeleton