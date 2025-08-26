// jest.config.cjs

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  roots: [
    '.'
  ],
  // 使用 Jest 最基础、最不可能出错的默认匹配规则
  // 它会匹配所有目录下以 .test.js 或 .spec.js 结尾的文件
  testMatch: [
    "**/__tests__/**/*.?(m)[jt]s?(x)",
    "**/?(*.)+(spec|test).?(m)[jt]s?(x)"
  ],
};

// 使用 CommonJS 的导出方式
module.exports = config;