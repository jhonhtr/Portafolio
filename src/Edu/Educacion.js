import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import { faHome, faBars, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Educacion.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo
import miFoto from './imagen/fotoperfil/mi_foto.png';   // ← tu foto
//import fondo from './imagen/fondo.png';
import fondo from './imagen/fotoperfil/fondo1.jpg';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaCopy } from 'react-icons/fa';
import facebookIcon from './imagen/iconos/facebook.png';
import instagramIcon from './imagen/iconos/instagram.png';
import linkedinIcon from './imagen/iconos/linkedin.png';
import githubIcon from './imagen/iconos/github.png';
import whatsappIcon from './imagen/iconos/whatsapp.png';
import emailIcon from './imagen/iconos/email.png';
import copyIcon from './imagen/iconos/copy.png';

const Educacion = () => {     
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

            {/* Perfil de Educación */}
            <div className="educacion">
                    <p className="titulo-educacion">Educación</p>
                    <ul className="lista-educacion">
                    <li><strong>Construcción de Bases de Datos MySql</strong> - SENA
                        <a href="/certificados/SQL.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Introducción a la Programación con Python</strong> - COLSUBSIDIO
                        <a href="/certificados/PYTHON.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>LINUX</strong> - NDG LINUX
                        <a href="/certificados/LINUX.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Diplomado en Redes CCNA</strong> - ISES
                        <a href="/certificados/CCNA.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Seguridad de Redes Cisco</strong> - NETWORKING CISCO ACADEMY
                        <a href="/certificados/RED-CISCO.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Dashboard en Excel</strong> - G-TALENT LATAM
                        <a href="/certificados/EXCEL-DASHBOARD.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Excel office 2016</strong> - SENA
                        <a href="/certificados/EXCEL2016.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Blockchain en Criptomonedas</strong> - SENA
                        <a href="/certificados/BLOCKCHAIN.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    <li>
                        <strong>Diseño y Planos en AutoCad 2D</strong> - SENA
                        <a href="/certificados/AUTOCAD2D.pdf" target="_blank" rel="noopener noreferrer" className="enlace-certificado">
                            Certificado
                        </a>
                    </li>
                    </ul>
                </div>
        </div>        
    );
};
            

export default Educacion;