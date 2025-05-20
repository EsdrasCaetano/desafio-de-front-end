const path = require('path');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // <-- isso aqui mapeia o alias @/
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
