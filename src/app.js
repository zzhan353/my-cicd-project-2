// src/app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const ENVIRONMENT = process.env.NODE_ENV || 'Development';

const getEnvDetails = () => {
  if (ENVIRONMENT.toLowerCase().startsWith('prod')) {
    return { class: 'env-prod', text: 'Production' };
  }
  if (ENVIRONMENT.toLowerCase().startsWith('uat')) {
    return { class: 'env-uat', text: 'UAT' };
  }
  return { class: 'env-dev', text: 'Development' };
};

app.get('/', (req, res) => {
  // 在这里调用，确保每次请求都能获取正确的环境详情
  const envDetails = getEnvDetails(); 
  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CI/CD Deployment Successful!</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div class="container">
            <div class="env-badge ${envDetails.class}">${envDetails.text}</div>
            <h1 class="title">DEPLOYED</h1>
            <p class="subtitle">CI/CD Pipeline Executed Successfully</p>
        </div>
    </body>
    </html>
  `);
});

// VVVV --- 把这段代码粘贴到 app.get('/') 后面 --- VVVV

app.get('/about', (req, res) => {
  res.send('<h1>About Our Awesome Company</h1>');
});

// ^^^^ --- 粘贴到这里 --- ^^^^

export default app;