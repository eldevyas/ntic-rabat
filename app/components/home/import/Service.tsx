import React from "react";
import { IconButton } from "../../core/button";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
const Service = () => {
    return (
        <div className="Service">
            <div className="Qualities">
                <h3>COMMENT ÇA MARCH</h3>
                <h2>Comment est notre service?</h2>
            </div>
            <div className="Cards">
                <div className="Card">
                    <IconButton bgColor="Blue">
                        <ThumbUpOutlinedIcon className="Icon" />
                    </IconButton>
                    <h3 className="CardTitle">Se détendre et apprendre</h3>
                    <p className="CardText">
                        Nous offrons à nos stagiaires un espace relaxant pour se
                        concentrer et apprendre, en veillant à ce qu&apos;ils se
                        sentent à l&apos;aise pendant leur période de formation.
                    </p>
                    <div className="ReadMore">
                        <p>Lire Plus</p>
                        <ReadMoreOutlinedIcon className="Icon" />
                    </div>
                </div>
                <div className="Card">
                    <IconButton bgColor="Blue">
                        <EmojiObjectsOutlinedIcon className="Icon" />
                    </IconButton>
                    <h3 className="CardTitle">La pensée créative</h3>
                    <p className="CardText">
                        Tous nos stagiaires font de bonnes notes, en raison de
                        leur discipline d&apos;apprentissage et de leur
                        créativité de travail. Ils ont fait de notre institut
                        une bonne communauté.
                    </p>
                    <div className="ReadMore">
                        <p>Lire Plus</p>
                        <ReadMoreOutlinedIcon className="Icon" />
                    </div>
                </div>
                <div className="Card">
                    <IconButton bgColor="Blue">
                        <WorkspacePremiumOutlinedIcon className="Icon" />
                    </IconButton>
                    <h3 className="CardTitle">Certificat puissant</h3>
                    <p className="CardText">
                        Ce qui rend notre institut si puissant, c&apos;est le
                        fait que nous avons la main sur de nombreuses
                        entreprises et que nous avons des niveaux élevés
                        d&apos;insertions sur le marché du travail.
                    </p>
                    <div className="ReadMore">
                        <p>Lire Plus</p>
                        <ReadMoreOutlinedIcon className="Icon" />
                    </div>
                </div>
                <div className="Card">
                    <IconButton bgColor="Blue">
                        <SentimentVerySatisfiedOutlinedIcon className="Icon" />
                    </IconButton>
                    <h3 className="CardTitle">Des bons formateurs</h3>
                    <p className="CardText">
                        Nous amenons les meilleurs formateurs dans nos salles de
                        classe, ils établissent une bonne relation avec les
                        stagiaires et ils leur envoient les informations de
                        manière cool.
                    </p>
                    <div className="ReadMore">
                        <p>Lire Plus</p>
                        <ReadMoreOutlinedIcon className="Icon" />
                    </div>
                </div>
            </div>
            <div className="ViewImages"></div>
        </div>
    );
};

export default Service;
