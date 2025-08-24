import React from "react";

export default function Herramientas({ title, images })
{
    return (
        <div className="herramientas">
            <h2 className="herramientas-title titulos-banners">
                <div 
                    className="herramientas-title-content"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </h2>
            <div className="herramientas-contenedor-imagenes">
                {
                    images.map((image, index) => {
                        return (
                            <img 
                                src={image}
                                alt={`IMAGEN HERRAMIENTA ${index}`}
                                id={`herramienta-${index}`}
                            />
                        )  
                    })
                }
            </div>
        </div>
    )
}