// import type { Config } from 'jest'
// import nextJest from 'next/jest.js'

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: './',
// })

// // Add any custom config to be passed to Jest
// const config: Config = {
//   coverageProvider: 'v8',
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     //primeira opção é opcional
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '^@/components/(.*)$': '<rootDir>/components/$1',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// }

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config)

import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Adicione estas linhas para reconhecer a pasta __tests__
  roots: ['<rootDir>/__tests__', '<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.test.(ts|tsx)',
    '**/?(*.)+(spec|test).(ts|tsx)',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mantenha isso para os aliases do TypeScript
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}

export default createJestConfig(config)
