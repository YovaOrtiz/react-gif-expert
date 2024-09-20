import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGrid } from "../../hooks/useFetchGrid";


describe('Pruebas en el hook useFetchGrind', () => { 

    test('debe de regresar el estado inicial', () => {
       const {result} = renderHook(()=> useFetchGrid('One Punch'));
       const {images, isLoading} = result.current;

       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy();
    });
    

    test('debe de retornar un arreglo de iamgenes y isLoading en false', async() => {
        const {result} = renderHook(()=> useFetchGrid('One Punch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );


        const {images, isLoading} = result.current;
 
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     });
});