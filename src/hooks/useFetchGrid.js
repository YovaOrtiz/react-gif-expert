import { useState, useEffect } from "react"; // Asegúrate de importar useEffect
import { getGrid } from '../helpers/getGrind';

export const useFetchGrid = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para el indicador de carga

    const getImages = async() => {
        const newImages = await getGrid(category);
        setImages(newImages);
        setIsLoading(false); // Cambiamos isLoading a false una vez que las imágenes están cargadas
    }

    useEffect(() => {
        getImages();
    }, []); // Ejecuta el efecto cuando cambie la categoría

    return {
        images,
        isLoading
    };
};
