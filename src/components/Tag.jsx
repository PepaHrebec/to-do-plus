import styled from "styled-components";

const MarkMissed = styled.span`
  background-color: #ff6347;
  padding: 4px;
  border-radius: 8px;
  margin-left: 8px;
  border: solid black 2px;
`;

const MarkToEnd = styled.span`
  background-color: #ffc300;
  padding: 4px;
  border-radius: 8px;
  margin-left: 8px;
  border: solid black 2px;
`;

function Tag({ date }) {
  return (
    <>
      {new Date(date).getTime() < new Date().getTime() ? (
        <MarkMissed>Missed</MarkMissed>
      ) : null}
      {new Date(date).getTime() - new Date().getTime() <= 86400000 &&
      new Date(date).getTime() - new Date().getTime() > 0 ? (
        <MarkToEnd>1 Day left</MarkToEnd>
      ) : null}
    </>
  );
}

export { Tag };
