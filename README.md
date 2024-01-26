# 沖縄居酒屋あーすん




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



