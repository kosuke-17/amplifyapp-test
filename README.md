# AWS での構築を学習する

[AWS 公式](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro)

## モジュール 1 : React アプリをホストする

### 1.React アプリの作成

```
npx create-react-app アプリ名
cd アプリ名
npm start
```

### 2.Github のリポジトリと React アプリを接続

- リポジトリ作成
- first-commit

### 3.ASW マネジメントコンソールにログイン

- Amplify を選択してサービスコンソールを開く
- Amplify Hosting の使用開始ボタンをクリック
- リポジトリサービスとして GitHub を選択して認証

- リポジトリ選択
  - `Githubアカウント名`/`リポジトリ名`
- ブランチ選択
  - main
- ビルド設定を行う(ここに環境変数を設定できる項目が詳細設定にある)

  - デフォルトのまま

- 保存してデプロイする(GitHub に SSHKey が発行される)

### 4.コードの変更を自動的にデプロイ

- コードを書き換える
- main ブランチに push
  - プッシュすると自動でデプロイされる

### AWS Amplify を使用して Github と結合することによるデプロイが完了した

## モジュール 2 :ローカル Amplify アプリを初期化する

- Amplify cli をグローバルインストールして設定
  `npm install -g @aws-amplify/cli`
- Cli の設定
  `amplify configure`
  → コンソールに移動する

- プロジェクトのバックエンド環境を設定(ローカル設定手順に記載あり)

`amplify pull --appId **\*\*\*\*** --envName **\*\***`
→ ターミナルで聞かれることに答える
→ 回答後、プロジェクト内のコードに amplify のディレクトリが生成

## モジュール 3 : 認証を追加する

### Amplify ライブラリをインストールする

npm install aws-amplify @aws-amplify/ui-react

amplify add auth

? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.

### 認証サービスをデプロイする

amplify push --y

### Amplify リソースを使用して React プロジェクトを設定する(認証コンポーネントの設置)

### App.js に認証フローを追加する

npm start
→ エラーの発生
export 'AmplifySignOut' (imported as 'AmplifySignOut') was not found in '@aws-amplify/ui-react'

- 解決策：バージョンを上げる
  npm remove @aws-amplify/ui-react
  npm install @aws-amplify/ui-react@1.2.25

npm list --depth=0
