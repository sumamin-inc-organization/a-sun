# 沖縄居酒屋あーすん

#　流れ
 1. [レスポンシブ / デザイン](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96--%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3)
 2. [デザイン](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96--%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3)
 3.


## レスポンシブ 
デスクトップ、タブレット、モバイルの3つのデザインがあります。フルードなタイポグラフィが使用されているため、フォントは画面サイズに応じて調整されます。

## デザイン

## NPM スクリプト

このプロジェクトで使用されているnpmスクリプ


- srcフォルダー内のコードをdistフォルダーにビルドする。
```bash
npm run build
```


- ビルドされたコードをGitHub Pagesにデプロイする。
```bash
npm run deploy
```

- ローカルでライブサーバーを起動する。
```bash
npm run dev
```

## Class

クラスネーミングシステムはBEMに基づいています。

- メインのブロックは、それ自体で意味のある単語で書かれています。

```html
    <div class="contact"></div>
```

- 複数の単語がある場合、文字は1つのダッシュ（-）で区切られます。

```html
    <ul class="primary-nav"></ul>
```

- ブロックの下にある要素は、**二重のアンダースコア**（__）で書かれます。

```html
    <ul class="primary-nav">
     <li class="primary-nav__item">HOME</li>
    </ul>
```

- モディファイアがある場合、**二重のダッシュライン**（--）で書かれます。

```html
    <ul class="primary-nav">
     <li class="primary-nav__item  primary-nav__item--home">HOME</li>
    <li class="primary-nav__item  primary-nav__item--about">ABOUT</li>
    </ul>
```


## Gitコミット

各コミットで行った作業を記述してください。変更または作業を行うたびにコミットを行ってください。

ex:

```css
    .test{
        /* 前  */
        background-color:red;   before
    }

    /* 後  */

    .test{
        background-color:blue; 
    }

```
変更を加えた後、変更内容を記述してコミットしてください。

```bash
    git commit -m "".test の背景色を青に変更しました。"
```

