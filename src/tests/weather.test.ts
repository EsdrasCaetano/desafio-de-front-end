import { getWeather } from '@/services/weather';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

// Mock global.fetch e console
global.fetch = jest.fn();
jest.spyOn(console, 'error').mockImplementation(() => {});
jest.spyOn(console, 'warn').mockImplementation(() => {});

const mockWeatherData = {
  location: { name: 'London', country: 'UK' },
  current: {
    temp_c: 20,
    condition: { text: 'Sunny' },
    wind_kph: 15,
    humidity: 65
  },
  forecast: {
    forecastday: [{
      hour: [{ time: '2023-01-01 12:00', temp_c: 20 }]
    }]
  }
};

describe('Weather Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('deve retornar dados do clima quando a API for bem-sucedida', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockWeatherData),
    });

    const result = await getWeather('london');
    expect(result).toEqual(mockWeatherData);
  });

  it('deve retornar null quando a API retornar 404', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    const result = await getWeather('invalid-city');
    expect(result).toBeNull();
  });

  it('deve retornar null quando os dados estiverem incompletos', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    });

    const result = await getWeather('london');
    expect(result).toBeNull();
  });

  it('deve retornar null quando houver erro de rede', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const result = await getWeather('london');
    expect(result).toBeNull();
  });
});