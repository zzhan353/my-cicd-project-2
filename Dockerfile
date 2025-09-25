# 1. 选择一个轻量的 Node.js 官方镜像作为基础
FROM node:20-alpine

# 2. 在容器内创建一个工作目录
WORKDIR /usr/src/app

# 3. 复制 package.json 和 package-lock.json 到工作目录
COPY src/ ./src/
COPY package*.json ./

# VVVV --- 在这里添加新指令 --- VVVV
# 切换到淘宝 NPM 镜像源以解决速率限制问题
RUN npm config set registry https://registry.npmmirror.com/

# 只安装生产环境所需的依赖
RUN npm install --only=production --ignore-scripts

# 5. 将项目的所有代码复制到工作目录
COPY . .

# 6. 告诉 Docker，我们的应用会监听 3000 端口
EXPOSE 3000

# 7. 定义容器启动时要执行的命令
CMD [ "node", "src/index.js" ]