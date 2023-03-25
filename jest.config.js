module.exports = {
  testEnvironment: "jsdom",
  verbose: false,
  testTimeout: 10000,
  testMatch: ["**/src/**/*.test.[jt]s?(x)"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 80,
      statements: 0,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};
