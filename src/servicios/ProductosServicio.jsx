import React from "react";

export function getAllProductos(){

    let id= "MLA1051";

    return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${id}`).then(res=>res.json());
}

export default getAllProductos;

/* info de codigos https://developers.mercadolibre.com.ar/es_ar/categorias-y-atributos */