import React from "react";
import { IconButton } from "../../core/button";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import { DefaultButton } from "../../core/button";
import Gallery from "./utils/gallery";
//
//
const Cards: {
    title: String;
    description: String;
    icon: Any;
}[] = [
    {
        title: "Se détendre et apprendre",
        description:
            "Nous offrons à nos stagiaires un espace relaxant pour se concentrer et apprendre, en veillant à ce qu'ils se sentent à l'aise pendant leur période de formation.",
        icon: <ThumbUpOutlinedIcon className="Icon" />,
    },
    {
        title: "La pensée créative",
        description:
            "Tous nos stagiaires font de bonnes notes, en raison de leur discipline d'apprentissage et de leur créativité de travail. Ils ont fait de notre institut une bonne communauté.",
        icon: <EmojiObjectsOutlinedIcon className="Icon" />,
    },
    {
        title: "Certificat puissant",
        description:
            "Ce qui rend notre institut si puissant, c'est le fait que nous avons la main sur de nombreuses entreprises et que nous avons des niveaux élevés d'insertions sur le marché du travail.",
        icon: <WorkspacePremiumOutlinedIcon className="Icon" />,
    },
    {
        title: "Des bons formateurs",
        description:
            "Nous amenons les meilleurs formateurs dans nos salles de classe, ils établissent une bonne relation avec les stagiaires et ils leur envoient les informations de manière cool.",
        icon: <SentimentVerySatisfiedOutlinedIcon className="Icon" />,
    },
];

const Service = () => {
    return (
        <div className="Service">
            <div className="Qualities">
                <h3>COMMENT ÇA MARCH</h3>
                <h2>Comment est notre service?</h2>
            </div>
            <div className="Cards">
                {Cards.map((card, index) => {
                    return (
                        <div className="Card" key={index}>
                            <IconButton bgColor="Blue">{card.icon}</IconButton>
                            <h3 className="CardTitle">{card.title}</h3>
                            <p className="CardText">{card.description}</p>
                            <div className="ReadMore">
                                <p>Lire Plus</p>
                                <ReadMoreOutlinedIcon className="Icon" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <Gallery />
        </div>
    );
};

export default Service;
