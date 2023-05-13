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
import { useRouter } from "next/router";
import Link from "next/link";
//
//
const Cards: {
    title: string;
    description: string;
    icon: any;
    href?: string;
}[] = [
    {
        title: "Se détendre et apprendre",
        description:
            "Nous offrons à nos stagiaires un espace relaxant pour se concentrer et apprendre, en veillant à ce qu'ils se sentent à l'aise pendant leur période de formation.",
        icon: <ThumbUpOutlinedIcon className="Icon" />,
        href: "#EspaceEquippe",
    },
    {
        title: "La pensée créative",
        description:
            "Tous nos stagiaires font de bonnes notes, en raison de leur discipline d'apprentissage et de leur créativité de travail. Ils ont fait de notre institut une bonne communauté.",
        icon: <EmojiObjectsOutlinedIcon className="Icon" />,
        href: "#LaPenseCreative",
    },
    {
        title: "Certificat puissant",
        description:
            "Ce qui rend notre institut si puissant, c'est le fait que nous avons la main sur de nombreuses entreprises et que nous avons des niveaux élevés d'insertions sur le marché du travail.",
        icon: <WorkspacePremiumOutlinedIcon className="Icon" />,
        href: "#CertificatPuissant",
    },
    {
        title: "Des bons formateurs",
        description:
            "Nous amenons les meilleurs formateurs dans nos salles de classe, ils établissent une bonne relation avec les stagiaires et ils leur envoient les informations de manière cool.",
        icon: <SentimentVerySatisfiedOutlinedIcon className="Icon" />,
        href: "#FormateursProfessionnels",
    },
];

const Card = (Props: {
    title: string;
    description: string;
    icon: any;
    href?: string;
}) => {
    const Router = useRouter();

    // 4adi ydeer scroll bla maykhelli l ID fel'URL
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="Card">
            <IconButton color="Blue">{Props.icon}</IconButton>
            <h3 className="CardTitle">{Props.title}</h3>
            <p className="CardText">{Props.description}</p>
            <Link
                className="ReadMore"
                href={Props.href as string}
                onClick={handleScroll}
            >
                <p>Lire Plus</p>
                <ReadMoreOutlinedIcon className="Icon" />
            </Link>
        </div>
    );
};

const Service = () => {
    return (
        <div className="Service">
            <div className="Qualities">
                <h3>COMMENT ÇA MARCH</h3>
                <h2>Comment est notre service?</h2>
            </div>
            <div className="Cards">
                {Cards.map((card, index) => {
                    return <Card {...card} key={index} />;
                })}
            </div>
            <Gallery />
        </div>
    );
};

export default Service;
