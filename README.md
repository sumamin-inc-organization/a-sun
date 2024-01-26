# 沖縄居酒屋あーすん

# レスポンシブ / デザイン
デスクトップ、タブレット、モバイルの3つのデザインがあります。フルードなタイポグラフィが使用されているため、フォントは画面サイズに応じて調整されます。

# NPM スクリプト

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

# Class

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



