import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function Card({ title, date, value, id, deleteTodo }) {
  return (
    <StyledCard>
      <div>{title}</div>
      <div>{date}</div>
      <div>{value}</div>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </StyledCard>
  );
}

export { Card };
