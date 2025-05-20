import { render, screen } from '@testing-library/react';
import {CityList} from '@/components/CityList';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

const setWindowWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('CityList - Responsividade', () => {
  it('renderiza layout mobile (375px)', () => {
    setWindowWidth(375);
    render(<CityList />);
    
    const weatherText = screen.getByText('Weather');
    expect(weatherText).toHaveClass('text-3xl');
  });

  it('renderiza layout desktop (1024px)', () => {
    setWindowWidth(1024);
    render(<CityList />);
    
    const weatherText = screen.getByText('Weather');
    expect(weatherText).toHaveClass('md:text-4xl');
  });

  it('atualiza o layout quando a janela é redimensionada', () => {
    setWindowWidth(375);
    const { rerender } = render(<CityList />);
    
    setWindowWidth(1024);
    window.dispatchEvent(new Event('resize'));
    rerender(<CityList />);
    
    const weatherText = screen.getByText('Weather');
    expect(weatherText).toHaveClass('md:text-4xl');
  });
});