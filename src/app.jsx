import React, { useState, useEffect } from "react";

import Cards from "./components/Cards";
import QualitiesCards from "./components/QualitiesCards";
import HowToWorks from "./components/HowToWorks";
import Questions from "./components/Questions";
import FooterSocial from "./components/FooterSocial";
import Navbar from "./components/Navbar";
import WhatsappIcon from "./components/Whatsapp";
import Feedback from "./components/Feedback";
import { Reveal } from "./commons/Reveal";

import header from "./assets/images/tco.webp"
import circleText from "./assets/images/circle-text.png"
import tcook from "./assets/images/tco-ok.webp"
import tcomeet from "./assets/images/tco-meet.webp"

import facebook from "./assets/images/facebook.png"
import whatsapp from "./assets/images/whatsapp.png"
import instagram from "./assets/images/instagram.png"

import { CARDS_SERVICES } from "./constants";
import ContactForm from "./components/ContactForm";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            window.scrollTo(0, 0)
            setLoading(true)
        }, 2500);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [])
    return <>
        <div className={`loading ${loading ? "animate" : ""}`}>
            <h2>Retrotoons tees</h2>
        </div>
        <div className="icon-whatsapp">
            <WhatsappIcon />
        </div>
        <Navbar />
        <header>
            <div className="container">
                <div className="image">
                    <Reveal delay={2.85}>
                        <img src={header} alt=""></img>
                    </Reveal>
                </div>
                <Reveal delay={2.80}>
                    <div className="titles">
                        <h1>Remeras Únicas, Diseñadas Solo para Ti</h1>
                        <p>Descubre nuestra colección de remeras con estampados estilo Rubber Hose, diseñadas personalizadamente para cada cliente. No hay dos iguales</p>
                            <button className="call-to-action">
                                *Descubre*
                            </button>
                    </div>
                </Reveal>
            </div>
        </header>
        <section className="quelities" id="nosotros">
            <div className="container">
                <QualitiesCards />
            </div>
        </section>

        <section className="talent">
            <div className="container">

                <div className="image">
                    <img className="circle-text" src={ circleText } alt="Tu contador online" />
                    <Reveal delay={0.35}>
                        <img className="ok" src={ tcook } alt="tu contador online icon" />
                    </Reveal>
                </div>
                <div className="description">

                    <Reveal delay={0.55}>
                        <span>Acerca de nosotros</span>
                    </Reveal>
                    <Reveal delay={0.55}>
                        <h2>Nuestra Misión</h2>
                    </Reveal>
                    <Reveal delay={0.75}>
                        <p>En RetroToons Tees, nos apasiona la creatividad y la originalidad. Queremos que cada remera sea una obra de arte única, reflejando la personalidad y el estilo de cada cliente. Nuestro equipo de diseñadores y artistas trabaja arduamente para crear estampados exclusivos, inspirados en el estilo Rubber Hose, que te harán sentir como si estuvieras en una época diferente.</p>
                        <p>
                        Nuestra misión es ofrecer remeras que no solo sean cómodas y de alta calidad, sino que también cuenten una historia. Cada diseño es cuidadosamente creado para reflejar la esencia de nuestro estilo retro, con un toque moderno y personalizado. En Remeras Únicas, nos comprometemos a ofrecerte una experiencia de compra excepcional, con atención personalizada y un servicio de diseño que se adapta a tus necesidades. ¡Únete a nuestra comunidad y descubre la magia de las remeras únicas!
                        </p>
                    </Reveal>
                    <div className="contact">
                        <div>
                            <p>Seguinos </p>
                            <a href="">*Instagram*</a>
                        </div>
                        <div>
                            <p>o escribinos</p>
                            <a href="">*Whatsapp*</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="services" id="servicios">
            <div className="container">
                <Reveal delay={0.35}>
                    <span>nuestros servicios</span>
                    <h2>Lo Que Nos Diferencia</h2>
                </Reveal>
                <Cards />
            </div>
        </section>

        <section className="how-works" id="como-trabajamos">
            <div className="container">
                <Reveal delay={0.35}>
                    <div className="title">
                        <span>Como trabajamos</span>
                        <h2>Nuestra Metodología de Trabajo</h2>
                        <p>En Remeras Únicas, nos enfocamos en crear remeras que reflejen la personalidad y el estilo de cada cliente. Nuestro proceso de diseño y producción es cuidadoso y personalizado, para asegurarnos de que cada remera sea única y especial. Aquí te mostramos cómo trabajamos:
                        </p>
                    </div>
                </Reveal>
                <HowToWorks />
            </div>
        </section>

        <section className="contact-to-meet" id="hablemos">
            {/* <svg viewBox="0 0 1440 320"><path fill="#ae6522" fillOpacity="1" d="M0,64L1440,128L1440,0L0,0Z"></path></svg> */}
            <div className="container">
                <div className="image">
                    <Reveal delay={0.35}>
                        <img src={ tcomeet } alt="Agenda una reunion" />
                    </Reveal>
                </div>

                <Reveal delay={0.35}>
                    <div className="data">
                        <span>Hablemos</span>
                        <h2>¡Conecta con Nosotros en Redes Sociales y Únete a Nuestra Comunidad!</h2>
                        <div>
                            <button>*Visitar*</button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
        <section className="contact-form">
            <div className="container">
                <span>¿Algunas dudas?</span>
                <h2>Dejanos tu consulta</h2>
                <ContactForm />
            </div>
        </section>

        <section className="clients-feedback">
            <Reveal delay={0.35}>
                <div className="container">
                    <span>Lo que dicen de nosotros</span>
                    <h2>Feedback de nuestros clientes</h2>

                    <Feedback />
                </div>
            </Reveal>
        </section>

        <section className="frecuent-questions" id="preguntas-frecuentes">
            <div className="container">
                <h2>Preguntas frecuentes</h2>

                <div className="questions-cards">
                    <Questions />
                </div>
            </div>
        </section>



        <footer className="footer">
            <div className="container">
                <FooterSocial />
                <div className="about">
                    <div></div>
                    <div></div>
                    <div>
                        <ul>
                            <h3>Referencias</h3>
                            {
                                CARDS_SERVICES?.map((item, i) => (
                                    <li key={i}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3>Acerca de</h3>
                        <p>TuContadorOnline es un estudio contable especializado en brindar servicios de alta calidad a empresas y particulares. Nuestro equipo de expertos contadores se compromete a ofrecer soluciones personalizadas y efectivas para satisfacer tus necesidades financieras.</p>
                        <div className="social">
                            <a href="" target="_blank">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}


export default App;