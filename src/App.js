import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* auth認証クラス */}
      <AmplifySignOut />
    </div>
  );
}

// auth認証を利用
// ユーザー認証フロー全体(サインアップ、サインイン、パスワードリセット、多様素認証の確認を行えるようにする)
export default withAuthenticator(App);
