import { getGrid } from "../../helpers/getGrind";

describe('Pruebas en getGrid', () => {

    test('debe de retornar un arreglo de grid', async() => {
        const grid = await getGrid();  // Llamada a la función para obtener los datos

        expect(grid.length).toBeGreaterThan(0);  // Aseguramos que el arreglo no está vacío
        expect(grid[0]).toEqual({
            id: expect.any(String),   // Comprobamos que el objeto tiene las propiedades esperadas
            title: expect.any(String),
            url: expect.any(String),
        });
    });

});
