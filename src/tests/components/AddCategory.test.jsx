import React from 'react';  // Importación de React
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => { 

    test('debe de cambiar el valor de la caja de texto', () => {
        // Renderizamos el componente AddCategory
        render(<AddCategory onNewCategory={() => {}} />);
        
        // Obtenemos el input por su rol
        const imput = screen.getByRole('textbox');
        
        // Simulamos el cambio de valor en el input
        fireEvent.input(imput, { target: { value: 'Saitama' } }); 

        // Verificamos que el valor del input sea 'Saitama'
        expect(imput.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();  // Mock de la función onNewCategory

        // Renderizamos el componente AddCategory
        render(<AddCategory onNewCategory={onNewCategory} />);

        // Obtenemos el input y el formulario por su rol
        const imput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simulamos la entrada de texto en el input
        fireEvent.input(imput, { target: { value: inputValue } }); 
        // Simulamos el envío del formulario
        fireEvent.submit(form);

        // Verificamos que el valor del input esté vacío después de enviar el formulario
        expect(imput.value).toBe('');
        // Verificamos que la función onNewCategory haya sido llamada una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Verificamos que la función haya sido llamada con el valor del input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();  // Mock de la función onNewCategory

        // Renderizamos el componente AddCategory
        render(<AddCategory onNewCategory={onNewCategory} />);

        // Obtenemos el input y el formulario por su rol
        const imput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simulamos la entrada de texto vacío en el input
        fireEvent.input(imput, { target: { value: '' } });
        // Simulamos el envío del formulario
        fireEvent.submit(form);

        // Verificamos que la función onNewCategory no haya sido llamada
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});
