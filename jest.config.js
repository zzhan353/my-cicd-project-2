// jest.config.js
/** @type {import('jest').Config} */
const config = {
  // 指定测试环境为 node
  testEnvironment: 'node',

  // 明确指定 Jest 应该从哪个目录开始寻找
  // '.' 表示项目的根目录
  roots: [
    '.'
  ],

  // 明确指定测试文件应该匹配的模式
  testMatch: [
    '**/index.test.js' // 我们先精确匹配这一个文件
  ],
};

export default config;