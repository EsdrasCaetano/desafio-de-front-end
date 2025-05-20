// import { render, screen } from '@testing-library/react';
// import Page from '@/app/[city]/page';

// // Mock do serviço weather
// jest.mock('@/services/weather', () => ({
//   getWeather: jest.fn(),
// }));

// describe('City Page', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   // Teste 1 - Loading
//    it('renderiza loading inicialmente', async () => {
//     require('@/services/weather').getWeather.mockImplementation(
//       () => new Promise(() => {})
//     );
    
//     const jsx = await Page({ params: { city: 'london' } });
//     const { unmount } = render(jsx);
    
//     expect(screen.getByText('Carregando...')).toBeInTheDocument();
//     unmount(); // Limpa o componente para evitar warnings
//   }, 15000); // Aumente o timeout se necessário

//   // Teste 2 - Erro na API
//   it('renderiza mensagem de erro quando a API falha', async () => {
//     require('@/services/weather').getWeather.mockRejectedValue(new Error('API Error'));
    
//     const jsx = await Page({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(await screen.findByText(/Erro ao carregar dados/i)).toBeInTheDocument();
//   });

//   // Outros testes da página...
//   it('renderiza informações do clima quando a API retorna dados', async () => {
//     // Implementação do teste de sucesso
//   });

//   it('renderiza mensagem quando cidade não é encontrada', async () => {
//     // Implementação do teste para cidade não encontrada
//   });
// });
// src/tests/page.test.tsx



////////


// import { render, screen } from '@testing-library/react';
// import Page from '@/app/[city]/page';
// import { getWeather } from '@/services/weather';

// beforeAll(() => {
//   jest.spyOn(console, 'error').mockImplementation(() => {});
//   jest.spyOn(console, 'warn').mockImplementation(() => {});
//   jest.spyOn(console, 'log').mockImplementation(() => {});
// });

// jest.mock('@/services/weather', () => ({
//   getWeather: jest.fn(),
// }));

// const completeMockWeather = {
//   // ... dados completos como mostrado acima
// };

// describe('City Page', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renderiza loading inicialmente', async () => {
//     const promise = new Promise<never>(() => {});
//     (getWeather as jest.Mock).mockReturnValue(promise);
    
//     const jsx = await Page({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(screen.getByText('Carregando...')).toBeInTheDocument();
//     (getWeather as jest.Mock).mockClear();
//   }, 10000);

//   it('renderiza informações do clima quando a API retorna dados', async () => {
//     (getWeather as jest.Mock).mockResolvedValue(completeMockWeather);
    
//     const jsx = await Page({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(await screen.findByText('London')).toBeInTheDocument();
//     expect(screen.getByTestId('current-temp')).toHaveTextContent('20');
//     expect(screen.getByText('Sunny')).toBeInTheDocument();
//   });

//   it('renderiza mensagem de erro quando a API falha', async () => {
//     (getWeather as jest.Mock).mockRejectedValue(new Error('API Error'));
    
//     const jsx = await Page({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(await screen.findByText(/Erro ao carregar dados/i)).toBeInTheDocument();
//   });
// });

// tests/CityPage.test.tsx
// import { render, screen } from '@testing-library/react';
// import CityPage from '@/app/[city]/page';
// import { getWeather } from '@/services/weather';

// jest.mock('@/services/weather', () => ({
//   getWeather: jest.fn(),
// }));

// describe('City Page', () => {
  
//   beforeAll(() => {
  
//     jest.spyOn(console, 'error').mockImplementation(() => {})
//     jest.spyOn(console, 'warn').mockImplementation(() => {})
//     jest.spyOn(console, 'log').mockImplementation(() => {})
//   })

// jest.setTimeout(10000); // Aumenta o tempo limite para 10 segundos

// const mockWeather = {
//   location: { name: 'Madrid', country: 'Spain' },
//   current: {
//     temp_c: 20,
//     condition: { code: 1000, text: 'Sunny', icon: '//cdn.weatherapi.com/weather/64x64/day/113.png' },
//     wind_kph: 5,
//     wind_mph: 3.1,
//     humidity: 40,
//   },
//   forecast: {
//     forecastday: [
//       {
//         astro: {
//           sunrise: '06:30 AM',
//           sunset: '09:00 PM',
//           moonrise: '10:00 PM',
//           moonset: '06:00 AM',
//           moon_phase: 'Lua Nova',
//           moon_illumination: '0',
//           is_sun_up: 1,
//           is_moon_up: 0,
//         },
//         day: {
//           mintemp_c: 15,
//           maxtemp_c: 25,
//         },
//         hour: [
//           {
//             time: '2025-05-19 12:00',
//             temp_c: 22,
//             condition: {
//               code: 1000,
//               text: 'Sunny',
//               icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// describe('CityPage', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renderiza loading inicialmente', async () => {
//     (getWeather as jest.Mock).mockImplementation(() => new Promise(() => {}));
    
//     const jsx = await CityPage({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(screen.getByText('Carregando...')).toBeInTheDocument();
//     jest.advanceTimersByTime(1000);
//   });

//   it('renderiza informações do clima quando a API retorna dados', async () => {
//     (getWeather as jest.Mock).mockResolvedValue(mockWeather);
    
//     const jsx = await CityPage({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(await screen.findByText('London')).toBeInTheDocument();
//     expect(screen.getByTestId('current-temp')).toHaveTextContent('20');
//     expect(screen.getByText('Sunny')).toBeInTheDocument();
//   });

//   it('renderiza mensagem de erro quando a API falha', async () => {

//     (getWeather as jest.Mock).mockRejectedValue(new Error('API Error'));
    
//     const jsx = await CityPage({ params: { city: 'london' } });
//     render(jsx);
    
//     expect(await screen.findByText(/Erro ao carregar dados/i)).toBeInTheDocument();
//   })
//   });
// });