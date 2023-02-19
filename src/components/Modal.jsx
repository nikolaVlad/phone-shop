import styled from "styled-components"

export default function Modal()
{
  return(
    <Wrapper>
      <Body>
       <Content> Content</Content>
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #0000007b;
  display: flex;
  justify-content: center;
  z-index: 10;
  
`

const Body = styled.div`
  padding: 50px;
`

const Content = styled.div`
  background-color: white;
  min-width: 1200px;
  min-height: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`