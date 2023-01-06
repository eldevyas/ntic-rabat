import * as WeatherIcon from "./WeatherIcons";
import Image from "next/image";

export default function WeatherCell(props: any) {
    const Day = props.dataDay;
    const Temperature = props.dataTemperature;

    // Switch function
    function SwitchIcon(Icon: string) {
        switch (Icon) {
            case "Sun":
                return <WeatherIcon.Sunny />;
            case "Fog":
                // pick randomly either Cloudy or cloudy sun
                // random boolean
                const randomBoolean = Math.random() >= 0.5;

                if (randomBoolean) {
                    return <WeatherIcon.CloudySun />;
                } else {
                    return <WeatherIcon.Cloudy />;
                }
            case "Rain":
                return <WeatherIcon.Rainy />;
            case "Thunder":
                return <WeatherIcon.Thunder />;
            case "Cloudy":
                return <WeatherIcon.Cloudy />;
            case "Sun Cloudy":
                return <WeatherIcon.CloudySun />;
            default:
                return <WeatherIcon.Sunny />;
        }
    }

    const FinalWeatherIcon = SwitchIcon(props.dataIcon);

    return (
        <>
            <div className="WeatherCell">
                <span>{Day}</span>
                <span>{Temperature}° C</span>
                <div className="Icon">{FinalWeatherIcon}</div>
            </div>
        </>
    );
}
