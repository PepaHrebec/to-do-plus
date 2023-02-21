import { Card } from "./Card";

function Display({ todoArr, deleteTodo }) {
  return (
    <>
      {todoArr.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.name}
            date={todo.date}
            value={todo.value}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </>
  );
}

export { Display };
