import React from 'react';  // Importar React
import { render, screen } from "@testing-library/react";
import { GitGrind } from "../../components/GitGrind";
import { useFetchGrid } from '../../hooks/useFetchGrid';

jest.mock('../../hooks/useFetchGrid');


describe('Pruebas en <GitGrind />', () => {

  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => { 

    useFetchGrid.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GitGrind category={category} />);
    // Verificamos que aparezca el texto 'cargando...' (en minúsculas)
    expect(screen.getByText('cargando...')).toBeTruthy();
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGrind', () => { 
     
    const grind = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Rex',
        url: 'https://localhost/Rex.jpg'
      }
    ]

    useFetchGrid.mockReturnValue({
      images: grind,
      isLoading: false
    });
    render(<GitGrind category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);




  });

});
