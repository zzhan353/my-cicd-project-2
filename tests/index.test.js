// tests/index.test.js

// 从 tests/ 目录出发，先回到上一级 (根目录)，再进入 src/ 目录
const app = require('../src/index.js');

describe('Basic test', () => {
  it('should have a defined app', () => {
    expect(app).toBeDefined();
  });
});