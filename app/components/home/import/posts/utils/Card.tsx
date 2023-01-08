import { DefaultButton } from "./../../../../core/button";
import InfoIcon from '@mui/icons-material/Info';

export default function Card(props: any) {
    return (
        <>
            <div className="AnnounceCard">
                <div className="CardHeader">
                    <div className="Title">
                        <div className="Icon">
                            <InfoIcon />
                        </div>
                        <h4>{props.title}</h4>
                    </div>
                    <div className="Date">
                        <p>
                            {
                                String(new Date().toLocaleDateString('fr-FR', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })).replace(/\b\w/g, (l) => l.toUpperCase())
                            }
                        </p>
                    </div>
                </div>
                <div className="Content">
                    <div className="Text">
                        <p>{props.description}</p>
                    </div>
                    <DefaultButton href={props.url} bgColor="White">Procéder</DefaultButton>
                </div>
            </div>
        </>
    );
}