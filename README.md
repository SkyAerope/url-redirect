# url redirect
 自动检测可用url来重定向，Node.js的后端用于识别并重定向路径
## 使用方法
### 1.克隆本仓库
```bash
git clone https://github.com/SkyAerope/url-redirect.git
```
### 2.安装依赖
```bash
npm install
```
### 3.配置
在`url.txt`中添加url，每行一个，例如：
```
https://www.baidu.com
https://www.google.com/
```
（无需在意末尾是否有`/`，程序会自动处理）
### 4.运行
```bash
npm run start
```
