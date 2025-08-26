// index.js
import express from 'express';

// 创建一个 Express 应用
const app = express();
const PORT = 3000;

// 定义一个根路由 (/) 的处理器
app.get('/', (req, res) => {
  res.send('<h1>Hello, CI/CD World!</h1><p>My application is running successfully inside a Docker container!</p>');
});

// 启动服务器，并开始监听 3000 端口
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});