import React from "react";

import Header from '../components/Header';
import MainBanner from "../components/MainBanner";
import FormularioContacto from "../components/FormularioContacto";
import FormularioCtr from "../components/FormularioCtr";
import Footer from "../components/Footer";

import bannerImg from "../assets/contacto/main-banner-contacto.png"

export default function Contacto()
{
    return (
        <div className="pagina-contacto">
            <Header />
            <MainBanner title={'Contacto'} image={bannerImg}/>
            <h2 className="titulos-banners"><span style={{ color: 'var(--color-neutral-white)' }}>A UN SOLO PASO DE </span>ESCALAR TU NEGOCIO</h2>
            <FormularioContacto />
            <h2 className="titulos-banners"><span style={{ color: 'var(--color-neutral-white)' }}>Y SI ESTÁS </span>MUY OCUPADO...</h2>
            <FormularioCtr />
            <Footer />
        </div>
    )
}