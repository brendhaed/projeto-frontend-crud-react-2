module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
