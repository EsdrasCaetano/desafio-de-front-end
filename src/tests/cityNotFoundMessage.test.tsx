import { render, screen } from '@testing-library/react';
import { CityNotFoundMessage } from '@/components/CityNotFoundMessage';
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('renderiza mensagem de cidade não encontrada', () => {
  render(<CityNotFoundMessage />);
  expect(screen.getByText(/cidade não encontrada/i)).toBeInTheDocument();
});
