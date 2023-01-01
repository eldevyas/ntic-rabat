import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import EmailIcon from "@mui/icons-material/Email";
import FaceIcon from "@mui/icons-material/Face";
import SendIcon from "@mui/icons-material/Send";
const ContactSection = () => {
    return (
        <div className="ContactSection">
            <div className="Title">
                <h3>Contactez nous pour plus d&apos;informations</h3>
                <p>
                    Besoin de plus d&apos;informations? Vous pouvez nous envoyer
                    un courrier en utilisant le formulaire ci-dessous, ou vous
                    pouvez nous rendre visite localement en utilisant notre
                    carte de localisation affichée.
                </p>
            </div>
            <div className="Contact">
                <div className="ContactForm">
                    <div className="ContactInput">
                        <IconButton bgColor="Green">
                            <EmailIcon />
                        </IconButton>
                        <input
                            type="text"
                            name="email"
                            placeholder="Entrez votre adresse e-mail"
                        />
                    </div>
                    <div className="ContactInput">
                        <IconButton bgColor="Green">
                            <FaceIcon />
                        </IconButton>
                        <input
                            type="text"
                            name="FullName"
                            placeholder="Entrez votre nom complet"
                        />
                    </div>
                    <div className="ContactInput">
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Saisissez votre message"
                        ></textarea>
                    </div>
                    <div className="ContactInput">
                        <DefaultButton bgColor="Green" startIcon={<SendIcon />}>
                            Envoyer
                        </DefaultButton>
                    </div>
                </div>

                <div className="ContactMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.7034584353145!2d-6.87005800789305!3d33.961491198885135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7132d2a3728ab%3A0x22a9ca17b33c74ae!2sIsta%20Ntic!5e1!3m2!1sen!2sma!4v1672534338599!5m2!1sen!2sma"
                        width="600"
                        height="450"
                        style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                        }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
