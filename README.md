## ThinkPHP Ant Design Pro Vue
ThinkPHP 5.1 与 Ant Design Pro Vue 基础权限系统  

后端: https://github.com/xiaodit/think-ant-admin  

预览地址: https://ant.xiaodim.com

文档: https://pro.loacg.com/docs/getting-started

### 账号
* 超级管理员 `admin, 1234` 
* 普通管理员 `test, 1234`

### 前端部署
刷新404问题
```nginx
try_files $uri $uri/ /index.html last;
```