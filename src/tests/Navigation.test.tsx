import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import {CityCard} from '@/components/CityCard';
import {CityList} from '@/components/CityList';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Navigation', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    pushMock.mockClear();
  });

  it('navega para página da cidade ao clicar no CityCard', () => {
    render(<CityCard name="London" />);
    fireEvent.click(screen.getByText('London'));
    expect(pushMock).toHaveBeenCalledWith('/london');
  });

  it('navega para página correta ao selecionar cidade no CityList', async () => {
    jest.useFakeTimers();
    render(<CityList />);
    jest.runAllTimers();
    
    await screen.findByText('London');
    fireEvent.click(screen.getByText('London'));
    
    expect(pushMock).toHaveBeenCalledWith('/london');
    jest.useRealTimers();
  });

  it('não navega quando o nome da cidade está vazio', () => {
    render(<CityCard name="" />);
    expect(pushMock).not.toHaveBeenCalled();
  });

  it('converte nome da cidade para lowercase na navegação', () => {
    render(<CityCard name="New York" />);
    fireEvent.click(screen.getByText('New York'));
    expect(pushMock).toHaveBeenCalledWith('/new york');
  });
});