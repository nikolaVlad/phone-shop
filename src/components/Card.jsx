import { Button } from "@material-ui/core"
import styled from "styled-components"

export default function Card({lg, image, name})
{
  return(
    <Wrapper lg={lg}>
      <ImagePlace>
        <img alt="phone" src={image} />
      </ImagePlace>
      <Hr />
      <Name>
        {name}
      </Name>
      <Buttons>
        <Button color="primary" variant="outlined" >Vidi</Button>
        <Button color="secondary" variant="contained">Dodaj u korpu</Button>
      </Buttons>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  width: 280px;
  height: 350px;
  margin-top: ${({lg}) => lg ? '-20px' : ''};

  /* background-color: #80808057; */
  border-radius: 10px ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`
const ImagePlace = styled.div`
  width: 100%;
  height: 55%;
  background: white;
  border-radius: 10px ;
  padding: 5px 0px;

  img
  {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

`

const Hr = styled.div`
  height: 1px;
  width: 200px;
  margin-top: 5px;
  margin-left: 35px;
  background-color: gray;
`

const Name = styled.div`
  text-align: center;
  margin: 10px 0px;
  height: 100%;
  display: flex;
  justify-content: center;
`
const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  padding-bottom: 20px;
`