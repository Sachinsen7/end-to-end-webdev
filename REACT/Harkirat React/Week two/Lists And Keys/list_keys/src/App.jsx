import "./App.css";

function App() {
  const todos = [
    {
      title: "go to the gym",
      done: false,
    },
    {
      title: "eat food",
      done: true,
    },
  ];

  return (
    <>
      <Todo todo={todos} />
    </>
  );
}

function Todo({ todo }) {
  return (
    <div>
      {todo.map((item, idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </div>
  );
}

export default App;
