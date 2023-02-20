import styled from "styled-components"

export default function Modal({ children }) {
  return (
    <Wrapper>
      <Body>
        <Content>
          {children}
        </Content>
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 120vh;
  height: 100%;
  position: fixed;
  background-color: #0000007b;
  display: flex;
  justify-content: center;
  z-index: 30;

  
`

const Body = styled.div`
  padding: 60px;
`

const Content = styled.div`
  background-color: white;
  min-width: 1200px;
  min-height: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 120px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`