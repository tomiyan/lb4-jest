module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    // Ignore compiled output, we want to run original TypeScript files
    'dist',
  ],
};
