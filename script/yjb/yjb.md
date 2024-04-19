# 养基宝

## 配置 (QuanX)

```properties
[MITM]
*.yangjibao.com

[rewrite_local]
^https:\/\/app-api\.yangjibao\.com\/account url script-request-header yjb.cookie.js

[task_local]
14 30 * * * yjb.js
```