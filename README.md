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

<!-- ## モジュール 2 :ローカル Amplify アプリを初期化する

Amplify cli をインストールして設定 -->
