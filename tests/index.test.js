// tests/index.test.js

// 使用 import 语法
import app from '../src/index.js';

describe('Basic test', () => {
  it('should have a defined app', () => {
    expect(app).toBeDefined();
  });
});