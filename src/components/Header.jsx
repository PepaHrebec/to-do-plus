import styled from "styled-components";

const Hdr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid gray 2px;
  padding: 1em;
  background-color: white;
`;

const Name = styled.div`
  font-family: "Gloock", serif;
  font-size: large;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  width: 3rem;
`;

function Header({ user, signin, signout }) {
  return (
    <Hdr>
      <Name>To-Do Plus</Name>
      {user.set ? (
        <>
          <div>{user.name}</div>
          <StyledImg src={user.pic} alt="User image" />
          <button onClick={signout}>Sign-out</button>
        </>
      ) : (
        <button onClick={signin}>Sign-in</button>
      )}
    </Hdr>
  );
}

export { Header };
