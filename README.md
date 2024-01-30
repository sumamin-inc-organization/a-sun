# 沖縄居酒屋あーすん

#　流れ
 1. [レスポンシブ](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96)
    - [Clamp](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#clamp)
 2. [デザイン](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96)
 3. [Class](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#class)
 4. [Git コミット](https://github.com/sumamin-inc-organization/a-sun?tab=readme-ov-file#git%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88)


## レスポンシブ 
---
デスクトップ、タブレット、モバイルの3つのデザインがあります。フルードなタイポグラフィが使用されているため、フォントは画面サイズに応じて調整されます。

### Clamp()
**`clamp()`** は、CSSの関数で、定義された最小値と最大値の範囲内で中間値をクランプします。

この関数には3つのパラメータがあります：

- 最小値。  // 左側の値
- 好ましい値。 // 中間の値
- 最大値。   // 右側の値

**`clamp()`** は、タイポグラフィ、幅、パディング、およびマージンなど、さまざまなプロパティに使用できます。

例 1: 幅

```css
.test {
  width: clamp(375px, 41.67vw, 600px);
}
```

この例では、`.test` 要素は最大幅が `600px` に成長し、最小幅が `375px` に縮小します。最小値または最大値に達するまで、`41.67vw` の幅を維持します。

例 2: フォントサイズ

```css
.fs-pc-20 {
  font-size: clamp(12.5px, 1.39vw, 20px);
}
```

この例では、`.fs-pc-20` クラスのフォントサイズは最大で `20px` まで成長し、最小で `12.5px` まで縮小します。最小値または最大値に達するまで、`1.39vw` のフォントサイズを維持します。


### min()

min() CSS 関数は、カンマで区切られた式のリストから最小の値（最も負の値）を CSS プロパティの値として設定することができます。

これはどこでも使用できます
- 長さ
- 周波数
- 角度
- パーセンテージ
など

例：

```css
.class {
  width: min(50vw, 200px);
}
```

上記の例では、幅は最大で200pxになりますが、ビューポートが400px未満の場合はそれより小さくなります（この場合、1vwは4pxになるため、50vwは200pxになります）。この技術は、プロパティのための固定された最大値を指定するために絶対単位を使用し、相対単位を使用. 

## デザイン
---
## NPM スクリプト
---
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
---
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
---
各コミットで行った作業を記述してください。変更または作業を行うたびにコミットを行ってください。

ex:

```css

    /* 前 */
    .test{
        background-color:red;  
    }

    /* 後  */

    .test{
        background-color:blue; 
    }

```
変更を加えた後、変更内容を記述してコミットしてください。

```bash
    git commit -m ".test の背景色を青に変更しました。"
```

