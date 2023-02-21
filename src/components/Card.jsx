function Card({ title, date, value, id, deleteTodo }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{value}</p>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </>
  );
}

export { Card };
