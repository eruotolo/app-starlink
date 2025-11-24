// DECLARE UNA VARIABLE DE TIPO CONST PARA CONSUMIR LA URL DE STRAPI
// const strapiUrl = 'http://localhost:1337/api/'
const strapiUrl = import.meta.env.STRAPI_API_URL || 'http://localhost:1337/api/';

// La vamos usar para las images
export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');

export const STRAPI_URL_IMAGES = STRAPI_BASE_URL;

export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slug: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/${slug}?populate=*`);
        const json = await response.json();

        if(!response.ok) {
            throw new Error('El error', json.message);
        }
        // Si tiene results, es una lista, si no, es un objeto individual
        return json.data;
    } catch (error) {
        console.error(error);
    }
};


