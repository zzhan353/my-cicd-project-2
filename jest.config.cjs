// jest.config.cjs

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  
  // 告诉 Jest 主动去收集这些文件的覆盖率信息
  // 我们指向所有在 src/ 目录下的 .js 文件
  // 注意：你需要先把你的 index.js 移动到 src/ 目录下
  collectCoverageFrom: [
    'src/**/*.js',
    // 如果有其他目录，也加进来
  ],
};

module.exports = config;