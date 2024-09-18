import React from 'react';
import { render, screen } from "@testing-library/react";
import { GitItem } from "../../components/GitItem";

describe('Pruebas en <GitItem/>', () => {  

    const title ='Saitana';
    const url = 'https://one-punch.com/saitana.jpg';

    test('debe de hacer match con el snapshot', () => {
        
        const {container} =  render(<GitItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GitItem title={test} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt)

        
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GitItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });


});