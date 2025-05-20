import { render, screen, fireEvent } from '@testing-library/react';
import { CityCard } from '@/components/CityCard';
import { useRouter } from 'next/navigation';

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

describe('CityCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza o nome da cidade', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    render(<CityCard name="London" />);
    expect(screen.getByText('London')).toBeInTheDocument();
  });

  it('chama router.push ao clicar', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<CityCard name="London" />);
    fireEvent.click(screen.getByText('London').parentElement!);

    expect(pushMock).toHaveBeenCalledWith('/london');
  });

  it('não renderiza nada se nome for vazio', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    const { container } = render(<CityCard name="" />);
    expect(container).toBeEmptyDOMElement();
  });
});
