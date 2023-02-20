import { Button } from "@material-ui/core"
import styled from "styled-components"
import Card from "./Card"

export default function Cart({ onExit, items, onEmpty }) {
  return (
    <Wrapper>
      <Exit onClick={() => onExit()}>
        x
      </Exit>
      {items.length > 0 && <Button onClick={() => onEmpty()} style={{ width: '100%' }} color="secondary" variant="text" >
        Isprazni korpu
      </Button>}
      <Body>
        {items.length > 0 ?
          items.map((i) => {
            return (<Card inCart {...i} />)
          }) : <NoItems>Korpa je prazna</NoItems>}
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      max-height: 700px;
      text-align: center;
      justify-content: ce;
      align-items: center;
      `

const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  overflow: scroll;
  height: 100%;
  width: 100%;
  padding: 20px;
  max-width: 900px;
`

const NoItems = styled.div`
  text-align: center;
  color: gray;
  font-weight: bolder;
  width: 100%;
`

const Exit = styled.div`
      width: 100%;
      text-align: right;
      font-size: 27px;
      font-weight: bolder;
      margin-bottom: 20px;
      cursor: pointer;
`