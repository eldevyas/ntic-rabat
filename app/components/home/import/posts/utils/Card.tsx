import { DefaultButton } from "./../../../../core/button";
import InfoIcon from "@mui/icons-material/Info";

export default function Card(props: any) {
    // today date format to compare with deadline
    const today = new Date();
    // console log today
    const todayDate = today.toISOString().slice(0, 10);
    // compare today date with deadline
    const isExpired = todayDate > props.deadline;

    const Variant = props.variant;
    let className: string;
    switch (Variant) {
        case "Info":
            className = "Card Info";
            break;
        case "Urgent":
            className = "Card Danger";
            break;
        case "Primary":
            className = "Card Primary";
            break;
        case "Secondary":
            className = "Card Secondary";
            break;
        default:
            className = "Card Default";
            break;
    }
    const openUrl = () => {
        window.open(props.url);
    };
    return (
        <>
            {isExpired ? null : (
                <div className={className}>
                    <div className="CardHeader">
                        <div className="CardType">
                            <div className="Icon">
                                <InfoIcon />
                            </div>
                            <h3>{Variant}</h3>
                        </div>
                    </div>
                    <div className="CardTitle">
                        <h3>{props.title}</h3>
                        <p>
                            {String(
                                new Date().toLocaleDateString("fr-FR", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })
                            ).replace(/\b\w/g, (l) => l.toUpperCase())}
                        </p>
                    </div>
                    <div className="CardDescription">
                        <p>{props.description}</p>
                    </div>
                    <div className="CardButton">
                        {props.url != null && props.url != undefined ? (
                            <DefaultButton color="White" onClick={openUrl}>
                                Procéder
                            </DefaultButton>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
