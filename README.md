# challenge-01-homepage

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
