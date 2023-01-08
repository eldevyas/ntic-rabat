import { DefaultButton } from "./../../../../core/button";
import InfoIcon from '@mui/icons-material/Info';

export default function Card() {
    return (
        <>
            <div className="AnnounceCard">
                <div className="CardHeader">
                    <div className="Title">
                        <div className="Icon">
                            <InfoIcon />
                        </div>
                        <h4>Procédure de Remplissage des Informations Personnelles.</h4>
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
                        <p>Les stagiaires de l’ista ntic sont invités à compléter leurs informations personnelles:  <span>Procédure à suivre</span>
                        </p>
                    </div>
                    <DefaultButton bgColor="White">Procéder</DefaultButton>
                </div>
            </div>
        </>
    );
}