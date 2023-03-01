import styled from "styled-components";
import { Tag } from "./Tag";

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: solid 2px black;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

const StyledTitle = styled.div`
  width: 50%;
`;

const StyledButton = styled.button`
  background-color: #f7ede2;
  border-radius: 8px;
  padding: 4px;
`;

function Card({ title, date, id, deleteTodo }) {
  const formatDate = (date) => {
    return `${date.slice(-2)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
  };

  return (
    <StyledCard>
      <StyledTitle>
        {title}
        <Tag date={date} />
      </StyledTitle>
      <div>{formatDate(date)}</div>
      <StyledButton
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Finish
      </StyledButton>
    </StyledCard>
  );
}

export { Card };
