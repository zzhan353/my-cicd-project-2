// index.test.js
// 注意：因为 index.js 现在在 src/ 目录下，所以测试需要引入它
// import app from '../src/index.js'; // (这是一个简化的例子，实际取决于 index.js 如何导出)

describe('Basic test', () => {
  it('should pass', () => {
    // 这个测试确保我们的测试设置是正常的
    expect(true).toBe(true);
  });

  it('should have a main application file', () => {
    // 这个测试虽然简单，但它会促使 Jest 去分析 index.js
    const app = require('../src/index.js');
    expect(app).toBeDefined();
  });
});