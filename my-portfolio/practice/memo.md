# React + TypeScriptで作る動的Portfolioサイト

---

### 技術構成
|分類|技術・ツール|役割・目的|
|---|---|---|
|言語|TypeScript|型安全なJS|
|ライブラリ|React|UI構築|
|ビルドツール|Vite|開発・ビルドの高速化|
|パッケージ管理|npm/yarn|ライブラリ管理|
|状態管理|ReactのuseState/useReducer|とりあえずReactの組み込みのみ|
|CSS|CSS|デザイン|
|ルーティング|React Router(発展)|複数ページ対応|
|API通信|fetch,axios|外部APIやバックエンドとの連携|
|バージョン管理|Git,GitHub|コード管理・共有|

---

###　新規プロジェクト作成方法

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev
```
- `npm`:Node.jsのパッケージ管理ツール(node package manager)．コマンドを実行する入口
- `create vite@latest`:Viteの最新バージョンでプロジェクトを作成するコマンド
- `my-portfolio`:任意のプロジェクト名
- `--`:ここから先のオプションはViteのオプションであることを示す記号
- `--template react-ts`:Viteで使うテンプレートの指定．`react-ts`は**React+TypeScript**の構成のテンプレート
- `npm run dev`:開発用サーバの起動コマンド

###　すでに存在するプロジェクトの開発サーバ起動方法

```bash
cd my-portfolio
npm run dev
```
*依存パッケージが未インストールならディレクトリに飛んでから`npm install`する

### 本番用サーバの起動方法

```bash
cd my-portfolio
npm run build
```

---

### ChakraUIの初期設定

1. パッケージとスニペットをいれる

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npx @chakra-ui/cli snippet add
```
- プロジェクト直下でいれる

1. ルートにChakraProviderを巻く
アプリ全体を`ChakraProvider`コンポーネントで囲んで，ChakraUIの機能やテーマを全コンポーネントで使えるようにする処理

```bash
import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
)
```

- src/main.tsxを編集
- なければ新規作成ではなく，既存を置き換え
- `<App />`を`ChakraProvider`でラップする
- `extendTheme`:テーマをカスタマイズ
- `ColorModeScript`:ダーク/ライトモードの初期化が正しく動くようになる


