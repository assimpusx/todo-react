import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import TodoItems from "./components/todoItems/TodoItems";

function App() {
  const tasks = [
    {
      taskName: 'Task #1',
      taskDescription: 'Do Task #1',
      taskStatus: 1
    },
    {
      taskName: 'Task #2',
      taskDescription: 'Do Task #2',
      taskStatus: 0
    },
    {
      taskName: 'Task #3',
      taskDescription: 'Do Task #3',
      taskStatus: 1
    }
  ]

  return (
    <div className="main">
      <Header></Header>
      <Buttons></Buttons>
      <TodoItems></TodoItems>
    </div>
  );
}

export default App;
