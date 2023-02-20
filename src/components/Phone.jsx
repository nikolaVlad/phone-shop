import styled from "styled-components"

export default function Phone({ onExit, device }) {
  return (
    <Wrapper>
      <Exit onClick={() => onExit()}>x</Exit>
      <Name>
        {device.name}
      </Name>
      <Body>
        <Image>
          <img src={device.image} />
        </Image>
        <Info>
          <Row><div>batery</div> <Data>{device.batery}</Data></Row>
          <Row><div>display</div> <Data>{device.display}%</Data></Row>
          <Row><div>dimensions</div> <Data>{device.dimensions}</Data></Row>
          <Row><div>memory</div> <Data>{device.memory}</Data></Row>
          <Row><div>processor</div> <Data>{device.processor}</Data></Row>
          <Row><div>camera</div> <Data>{device.camera}</Data></Row>
          <Row><div>os</div> <Data>{device.os}</Data></Row>
          <Row><div>price</div> <Data>{device.price}</Data></Row>
        </Info>
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Exit = styled.div`
  width: 100%;
  text-align: right;
  font-size: 27px;
  font-weight: bolder;
  margin-bottom: 20px;
  cursor: pointer;
`

const Name = styled.div`
  width: 100%;
  background-color: #80808031;
  text-align: center;
  padding: 15px 0px;
  border-radius: 5px;
  font-weight: bold;
`
const Body = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  height: 400px;
`
const Image = styled.div`
  width: 300px;
  height: 300px;


  img
  {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`

const Row = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  text-transform: capitalize;
  color: gray;

`

const Data = styled.div`
  font-weight: bold;
  color: #2596be;
`