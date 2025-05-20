import { render, screen } from '@testing-library/react';
import { WeatherIcon } from '@/components/WeatherIcon';
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('WeatherIcon', () => {
  it('renderiza ícone de sol para clima ensolarado durante o dia', () => {
    render(<WeatherIcon condition="Sunny" timeOfDay="day" />);
    expect(screen.getByLabelText('sunny icon')).toBeInTheDocument();
  });

  it('renderiza ícone de chuva para clima chuvoso', () => {
    render(<WeatherIcon condition="Rain" timeOfDay="day" />);
    expect(screen.getByLabelText('rainy icon')).toBeInTheDocument();
  });

  it('renderiza ícone de nuvens para clima nublado', () => {
    render(<WeatherIcon condition="Cloudy" timeOfDay="day" />);
    expect(screen.getByLabelText('cloudy icon')).toBeInTheDocument();
  });

  it('renderiza ícone de lua para noite limpa', () => {
    render(<WeatherIcon condition="Clear" timeOfDay="night" />);
    expect(screen.getByLabelText('moon icon')).toBeInTheDocument();
  });

  it('renderiza ícone padrão para condição desconhecida', () => {
    render(<WeatherIcon condition="Unknown" timeOfDay="day" />);
    expect(screen.getByLabelText('default weather icon')).toBeInTheDocument();
  });
});