// index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module a 環境下獲取 __dirname 的標準方法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// 設置一個中間件，來提供 public 文件夾下的靜態文件
app.use(express.static(path.join(__dirname, 'public')));

// 讀取環境變量來判斷當前環境，如果沒有就默認為 'Development'
const ENVIRONMENT = process.env.NODE_ENV || 'Development';

// 根據環境決定 badge 的樣式和文本
const getEnvDetails = () => {
  if (ENVIRONMENT.toLowerCase().startsWith('prod')) {
    return { class: 'env-prod', text: 'Production' };
  }
  if (ENVIRONMENT.toLowerCase().startsWith('uat')) {
    return { class: 'env-uat', text: 'UAT' };
  }
  return { class: 'env-dev', text: 'Development' };
};

// 根路由，現在會渲染一個完整的 HTML 頁面
app.get('/', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running in ${ENVIRONMENT} mode on http://localhost:${PORT}`);
});


//... (你现有的 express 服务器代码) ...

app.listen(PORT, () => {
  console.log(`Server is running in ${ENVIRONMENT} mode on http://localhost:${PORT}`);
});

// 使用 export default 导出 app
export default app;