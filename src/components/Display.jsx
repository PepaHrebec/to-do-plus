import { Card } from "./Card";

function Display({ todoArr }) {
  return (
    <>
      {todoArr.map((todo) => {
        return (
          <Card
            key={todo.id}
            title={todo.name}
            date={todo.date}
            value={todo.value}
          />
        );
      })}
    </>
  );
}

export { Display };
