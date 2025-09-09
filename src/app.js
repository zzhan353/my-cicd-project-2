// src/app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); // 注意路径变化

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
  const envDetails = getEnvDetails();
  res.send(`...`); // (HTML 内容保持不变)
});

// 将 app 对象导出，但不在这里启动它！
export default app;