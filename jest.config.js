module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@util/(.*)': '<rootDir>/src/util/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@main/(.*)': '<rootDir>/src/main/$1',
    '@app/(.*)': '<rootDir>/src/app/$1'
  },
  testMatch: ['**/**.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
