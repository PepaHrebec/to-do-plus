function Card({ title, date, value }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{value}</p>
    </>
  );
}

export { Card };
