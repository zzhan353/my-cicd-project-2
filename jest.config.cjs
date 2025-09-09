// jest.config.cjs

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  
  // 告诉 Jest，你的所有测试都在 tests/ 目录下
  roots: [
    '<rootDir>/tests'
  ],

  // 告诉 Jest，只匹配 tests/ 目录下的 .test.js 文件
  testMatch: [
    '**/tests/**/*.test.js'
  ],

  // 告诉 Jest，去 src/ 目录下收集覆盖率
  collectCoverageFrom: [
    'src/**/*.js',
  ],
};

module.exports = config;