import styled from "styled-components";

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const StyledTitle = styled.div`
  width: 50%;
`;

function Card({ title, date, id, deleteTodo }) {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <div>{date}</div>
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
