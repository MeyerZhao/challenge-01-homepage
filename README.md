# challenge-01-homepage

- [github](https://github.com/MeyerZhao/challenge-01-homepage)
- [frontendmentor](https://www.frontendmentor.io/challenges)

challenge-01-homepage

## 总结目前为止使用的的 命令

### npm 初始换项目

```bash
npm init
```

### git 初始化项目

```bash
git init
```

### 添加 origin 仓库

```bash
git remote add origin git@github3.com:MeyerZhao/challenge-01-homepage.git
```

> 正常直接使用 github 里面的 SSH 地址就可以了， 因为我本地做了额外的设置 所以地址是 git@github3.com；

### 修改 remote url

```bash
git remote set-url origin <new_url>  # 设置仓库地址为 new_url
```

### 修改 remote name

```bash
git remote rename origin upstream # 设置仓库名字为 upstream
```

### git 删除本地 fetch 的 分支

要删除已经通过 git fetch 获取但不存在于远程仓库的分支，你可以使用以下命令：

```bash

git fetch --prune
```

如果你只想删除特定的分支，你可以先删除远程分支，然后同步这个更改到你的本地仓库：

```bash
git push origin --delete <branch_name>
git fetch origin
```

### 设置上游分支

```bash
git push origin master -u

git branch -u origin/master
```

> `git branch --help -w` 获取帮助文档

### 从远端仓库检出分支

```bash
git checkout -b new_branch_name origin/remote_branch_name
```

## 如何清理未使用的 css

我找到的最佳方案是使用[tailwindcss](https://tailwindcss.com/)
首先安装

```bash
npm install -D tailwindcss postcss postcss-import autoprefixer

npx tailwindcss init

npx tailwindcss init -p
```

### Configure your template paths

**tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## bootstrap => tailwindcss

position-absolute => absolute

## css 原生 breakpoint 写法

```css
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
```

## css breakpoint 在 tailwindcss 的写法

```css
@layer components {
  .container {
    --bs-gutter-x: 2.5rem;
    --bs-gutter-y: 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    width: 100%;

    @media screen(sm) {
      max-width: 540px;
    }

    @media screen(md) {
      max-width: 720px;
    }

    @media screen(lg) {
      max-width: 960px;
    }

    @media screen(xl) {
      max-width: 1140px;
    }

    @media screen(2xl) {
      max-width: 1320px;
    }
  }
}
```
> 这里写 的  .container 会与 tailwind.config.js 重复部分css 代码， 所以需要禁用  tailwind.config.js 的 container class

## 在特定断点处配置 .container 最大宽度 - Tailwindcss
Configure .container max-width at specific breakpoints - Tailwindcss
https://stackoverflow.com/questions/65903737/configure-container-max-width-at-specific-breakpoints-tailwindcss
```js
module.exports = {
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ]
}
```

