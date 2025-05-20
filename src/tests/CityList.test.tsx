import { render, screen, waitFor } from '@testing-library/react';
import { CityList } from '@/components/CityList';
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

jest.useFakeTimers();

describe('CityList', () => {
  it('exibe mensagem de loading inicialmente', () => {
    render(<CityList />);
    expect(screen.getByText(/loading cities/i)).toBeInTheDocument();
  });

  it('renderiza todas as cidades após o loading', async () => {
    render(<CityList />);

    jest.runAllTimers();
    await waitFor(() => {
      expect(screen.getByText('London')).toBeInTheDocument();
    });

    const cities = ['Madrid', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk'];
    cities.forEach(city => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it('exibe erro se a simulação falhar', async () => {
    render(<CityList simulateError={true} />);
    jest.runAllTimers();

    await waitFor(() => {
      expect(screen.getByText(/error loading cities/i)).toBeInTheDocument();
    });
  });
});
