// jest.config.js
/** @type {import('jest').Config} */
const config = {
  // 指定测试环境为 node
  testEnvironment: 'node',

  // 明确指定 Jest 应该寻找的测试文件匹配模式
  // 这个模式会匹配所有目录下，以 .test.js 或 .spec.js 结尾的文件
  testMatch: [
    '**/__tests__/**/*.?(m)[jt]s?(x)',
    '**/?(*.)+(spec|test).?(m)[jt]s?(x)'
  ],
};

export default config;