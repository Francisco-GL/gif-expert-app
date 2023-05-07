import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Probando <GifGrid/>', () => {
  
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
        // screen.debug();
        
    });
    
    
    test('debe de mostar items cuando se cargan las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'asd',
                title: 'sdasd',
                url: 'sdasdasdasd.com'
            },
            {
                id: 'asasdsadasdd',
                title: 'sdasdsadasdasdaasd',
                url: 'sdasdasdasdsaasdasd.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        
        expect( screen.getAllByRole('img').length ).toBe(2);

        
    })
    
    


});
