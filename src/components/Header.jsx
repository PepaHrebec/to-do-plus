import styled from "styled-components";

const Hdr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid gray 2px;
  padding: 1em;
  background-color: #f7b801;
  height: 4rem;
`;

const Name = styled.div`
  font-family: "Gloock", serif;
  font-size: xx-large;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  width: 3rem;
`;

const StyledButton = styled.button`
  background-color: #f7ede2;
  border-radius: 8px;
  padding: 4px;
`;

function Header({ user, signin, signout }) {
  return (
    <Hdr>
      <Name>To-Do Plus</Name>
      {user.set ? (
        <>
          <div>{user.name}</div>
          <StyledImg src={user.pic} alt="User image" />
          <StyledButton onClick={signout}>Sign-out</StyledButton>
        </>
      ) : (
        <StyledButton onClick={signin}>Sign-in</StyledButton>
      )}
    </Hdr>
  );
}

export { Header };
