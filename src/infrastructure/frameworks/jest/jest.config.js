module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '/\\.(test|spec)\.(js|jsx|ts|tsx)$/',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^~/(.*)$": "<rootDir>/$1",
        "^config$": "<rootDir>/config/app-config.js",
    },
};