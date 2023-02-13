import styled from "styled-components";

const Hdr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid gray 2px;
  padding: 1em;
`;

const Name = styled.h1`
  font-size: large;
`;

function Header({ user, signin, signout }) {
  return (
    <Hdr>
      <Name>To-Do Plus</Name>
      {user.set ? (
        <>
          <div>{user.name}</div>
          <button onClick={signout}>Sign-out</button>
        </>
      ) : (
        <button onClick={signin}>Sign-in</button>
      )}
    </Hdr>
  );
}

export { Header };
