# GenshinResinWebQuery
## 原神树脂网页查询
一个没有什么用的项目。
# 环境配置
## 1.安装node.js

1. 下载安装  [下载地址](https://nodejs.org/en/download/)
2. 打开控制台 （window键 + R 输入cmd 回车）
3. 输入node -v （若安装成功获取版本号 失败则报错）

## 2.安装@genshin-kit/core

本代码基于[@genshin-kit/core](https://github.com/genshin-kit/genshin-kit-node)项目实现，故需要安装此包
安装代码  （打开控制台运行）

```cmd
npm install @genshin-kit/core
```

# 数据配置

## 1.获取米游社cookie

1.浏览器访问[米游社](https://bbs.mihoyo.com/ys/)并登陆
2.按F12打开开发者模式
3.选择控制台 粘贴下面代码获取Cookie
⚠️请妥善保存您的cookies，绝对不要交给任何人！任何人！！任何人！！！

```javascript
var cookie = document.cookie;
var ask = confirm('Cookie:' + cookie + '\n\n是否复制内容到剪切板？');
if (ask == true) {
    copy(cookie);
    msg = cookie;
} else {
    msg = 'Cancel';
}
```

## 2.配置AccountData.json

需要填写三个数据 放入对应字符:""里，需要保证被”“包裹

1. 米游社cookie ([获取cookie](#1获取米游社cookie))
2. 原神uid（游戏uid）
3. 服务器种类ServerType  可填写值 cn或os （表示账号所在服务器，cn是官服和B 服  os 国际服）

# 免责声明

本程序并不会获取泄露您的cookie，但配置文件cookie并未加密，请妥善保管。若因此造成损失恕不负责。

## 来源

核心：[Dragon-Fish](https://github.com/genshin-kit/genshin-kit-node)
icon来源：[OctoberCK](https://github.com/OctoberCK/genshinhelper)
