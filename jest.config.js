module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  testMatch: ['**/**.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
