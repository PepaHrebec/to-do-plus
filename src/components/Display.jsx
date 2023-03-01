import styled from "styled-components";
import { Card } from "./Card";

const StyledDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

function Display({ todoArr, deleteTodo }) {
  return (
    <StyledDisplay>
      {todoArr.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.name}
            date={todo.date}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </StyledDisplay>
  );
}

export { Display };
