// tests/index.test.js
import app from '../src/app.js'; // 引入 app.js 而不是 index.js
import request from 'supertest'; // 我们将使用 supertest 来做接口测试

describe('GET /', () => {
  it('should respond with the hello world html page', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

    expect(response.text).toContain('CI/CD Pipeline Executed Successfully');
  });
});


// VVVV --- 把这段代码粘贴到 describe('GET /', ...) 后面 --- VVVV

describe('GET /about', () => {
  it('should respond with the about page', async () => {
    const response = await request(app)
      .get('/about')
      .expect(200);
    
    expect(response.text).toContain('About Our Awesome Company');
  });
});

// ^^^^ --- 粘贴到这里 --- ^^^^