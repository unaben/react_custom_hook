import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container text-center d-flex gap-2">
      <Form />
      <UserList />
    </div>
  );
}
export default App;
