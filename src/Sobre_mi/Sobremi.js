import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import { faHome, faBars, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sobremi.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo
import miFoto from './imagen/fotoperfil/mi_foto.png';   // ← tu foto
//import fondo from '/imagenes/fondo.png';
import fondo from './imagen/fotoperfil/fondo1.jpg';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaCopy } from 'react-icons/fa';
import facebookIcon from './imagen/iconos/facebook.png';
import instagramIcon from './imagen/iconos/instagram.png';
import linkedinIcon from './imagen/iconos/linkedin.png';
import githubIcon from './imagen/iconos/github.png';
import whatsappIcon from './imagen/iconos/whatsapp.png';
import emailIcon from './imagen/iconos/email.png';
import copyIcon from './imagen/iconos/copy.png';

const Inicio = () => {     
    const alternarOpcionesCorreo = () => {
        setMostrarOpcionesCorreo(!mostrarOpcionesCorreo);
    };
    
    const inputRef = useRef(null);
    const [mostrarOpcionesCorreo, setMostrarOpcionesCorreo] = useState(false);

    const copiarAlPortapapeles = () => {
        const input = inputRef.current;
            if (input) {
              navigator.clipboard.writeText(input.value)
                .then(() => {
                  console.log("¡Número copiado!");
                })
                .catch(err => {
                  console.error("Error al copiar", err);
                });
            }
        };
    
    // Efecto para el fondo
    useEffect(() => {
        document.body.style.backgroundImage = `url(${fondo})`; // Usa la variable renombrada        
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        return () => {
            document.body.style.backgroundImage = '';
          };
        }, 
        []); // ← Cierre correcto de useEffect
    
    return (
        <div>
            <div>               
                <div className="titulo">
                    <a href="/" className='titulo1'><h1>Portafolio</h1></a>
                </div>
            </div>         
            
            <div className='contenedor'>
                
                <div className='presentacion'> {/* div contenedor de la presentación */}                
                    {/* Columna izquierda: Foto + Redes Sociales */}
                    <div className='flex flex-col items-center gap-4'></div>

                    {/* Foto de perfil */}
                    <div className='imagenperfil'>
                        <img src={miFoto} alt="mi_foto" width={150} height={150} className="rounded-full" />
                    </div>  

                    {/* Redes sociales */}
                    <div className='redes'>
                        <a href="https://www.facebook.com/share/1CN2nqyTFp/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" width={30} /></a>
                        <a href="https://www.instagram.com/harrys.tierra/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" width={30} /></a>
                        <a href="https://www.linkedin.com/in/jhonhtr" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" width={30} /></a>
                        <a href="https://github.com/jhonhtr" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" width={30} /></a>
                    </div>
                </div>

                {/* Columna derecha: Textos y datos */}
                <div className='nombre_descripcion'>                    
                    {/* Encabezado */}
                    <div>
                        <h3 className='nombre-perfil'>Jhon Tierradentro</h3>
                        <p className='texto-perfil'>Bienvenid@ a mi portafolio como Desarrollador de Software</p>
                    </div>
                
                    {/* Información de contacto */}
                    <div className='contact'></div>

                    <div className="info-contacto">
                        {/* Celular */}
                        <div className='movil'>
                            <a href="https://wa.me/+573205119854" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappIcon} alt="WhatsApp" width={20} /></a>
                            <span>Celular:</span>
                            <input type="text" value="+57 320 511 9854" readOnly className='movil1' ref={inputRef} />
                            <button className='movil2' onClick={copiarAlPortapapeles}>
                            <img src={copyIcon} alt="Copiar" width={10} />
                            </button>
                        </div>

                        {/* Correo */}
                        <div className='correo'>
                            <img src={emailIcon} 
                            alt="Correo" 
                            width={20} 
                            onClick={alternarOpcionesCorreo} 
                            style={{ cursor: 'pointer' }}
                            />
                            <span>Email:</span>
                            <input type="text" value="jhonhtr@gmail.com" readOnly className='correo1' ref={inputRef} />
                            <button className='correo2' onClick={copiarAlPortapapeles}>
                            <img src={copyIcon} alt="Copiar" width={10} />
                            </button>
                            
                            
                            {mostrarOpcionesCorreo && (
                            <div className="menu-opciones-correo" >
                                <ul>
                                    <li><a href="mailto:jhonhtr@gmail.com?subject=Hola desde tu portafolio">Enviar desde tu app de correo</a></li>
                                    <li><a href="https://mail.google.com/mail/?view=cm&to=jhonhtr@gmail.com" target="_blank" rel="noopener noreferrer">Abrir en Gmail</a></li>
                                    <li><a href="https://outlook.live.com/owa/?path=/mail/action/compose&to=jhonhtr@gmail.com" target="_blank" rel="noopener noreferrer">Abrir en Outlook</a></li>
                                </ul>
                            </div>
                        )}
                        </div>

                        {/* Botón de CV */}
                        <button className='boton-cv'>
                            <a href="/certificados/CV-JHONTIERRA.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="descargarcv"
                            >
                            Descargar CV
                            </a>
                        </button>
                        </div>

                    </div>                    

                    {/* Menú */}
                    <Menu />
            </div>

            {/* Sobre mí */}
            <div className="sobre-mi">
                    <p className="titulo-sobre-mi">Sobre mí</p>
                    <p className="descripcion-sobre-mi">Soy tecnólogo en Análisis y Desarrollo de Software, 
                        egresado del SENA, actualmente me desempeño como <br /> desarrollador independiente, creando 
                        sitios web y proyectos backend personalizados adaptados a las necesidades <br /> de cada cliente.<br />
                        Desarrollo habilidades prácticas en programación, diseño web y desarrollo de aplicaciones 
                        a medida. <br />
                        Además, tengo conocimientos en analítica de datos, redes de telecomunicaciones (CCNA), 
                        seguridad de red, <br /> administración de sistemas Linux y diagnóstico remoto, lo que complementa 
                        mi perfil técnico y me permite <br /> entender los sistemas desde una perspectiva integral.<br />
                        Mi pasión por la tecnología y el desarrollo de software me impulsa a seguir aprendiendo 
                        constantemente y a <br /> enfrentar nuevos desafíos con compromiso y responsabilidad.</p>
                </div>
        </div>        
    );
};
            

export default Inicio;