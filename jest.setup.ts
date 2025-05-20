// jest.setup.ts

import '@testing-library/jest-dom';
// import nextRouterMock from 'next-router-mock';

// Mock do useRouter do Next.js para os testes
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    pathname: '/test-path',  // você pode personalizar se quiser
    query: {},
    asPath: '/test-path',
  }),
}));
