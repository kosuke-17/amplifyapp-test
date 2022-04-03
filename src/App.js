import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "./graphql/mutations";
import { useEffect, useState } from "react";

const initialFormState = { name: "", description: "" };

function App() {
  // Todoデータ
  const [todos, setTodos] = useState([]);
  // Todo作成用の箱
  const [formData, setFormData] = useState(initialFormState);

  // レンダリング時にTodoを取得する
  useEffect(() => {
    fetchTodos();
  }, []);

  // Todoを取得する処理
  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    setTodos(apiData.data.listNotes.items);
  }

  // Todoを作成する処理
  async function createTodo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData },
    });
    setTodos([...todos, formData]);
    setFormData(initialFormState);
  }

  // Todoを削除する処理
  async function deleteTodo({ id }) {
    const newTodosArray = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosArray);
    console.log(id);
    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <h1>My Todo 一覧一覧</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Todoの名前"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Todoの説明"
        value={formData.description}
      />
      {/* Todo作成 */}
      <button onClick={createTodo}>Todoを追加する</button>
      <div style={{ marginBottom: 30 }}>
        {/* Todo一覧表示 */}
        {todos.map((todo) => (
          <div key={todo.id || todo.name}>
            <h2>{todo.name}</h2>
            <p>{todo.description}</p>
            {/* Todo削除 */}
            <button onClick={() => deleteTodo(todo)}>削除</button>
          </div>
        ))}
      </div>
      {/* ログアウトボタン */}
      <AmplifySignOut />
    </div>
  );
}

// auth認証を利用
// ユーザー認証フロー全体(サインアップ、サインイン、パスワードリセット、多様素認証の確認を行えるようにする)
export default withAuthenticator(App);
