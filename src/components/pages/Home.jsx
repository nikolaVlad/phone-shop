import { useEffect, useState } from "react";
import styled from "styled-components"
import Card from "../Card";
import Modal from "../Modal";

export default function Home()
{
  const api = 'http://localhost:4000/devices';
  const [devices , setDevices] = useState([]);
  const [openedModal, setOpenedModal] = useState(false)
  const mainImage = 'https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'

  const setData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setDevices(data);
};

  useEffect(() =>
  {
    setData()
  },[])



  return (
    <Wrapper>
      {openedModal && <Modal />}

      <Navbar>
        <h3>Phone Store</h3>
        <Items>
          <div>Pocetna</div> |
          <div>Svi telefoni</div> |
          <div className="cart">Korpa</div> 
        </Items>
      </Navbar>
      <MainImage>
        <img 
          src={mainImage}/>
        <Title>
          <h2>Najprodavaniji telefoni</h2>
        </Title>
      </MainImage>
      <Phones>
        {
        devices.length &&
        <BestPhones>
          <Card     name={devices[1].name} image={devices[1].image} />
          <Card lg  name={devices[0].name} image={devices[0].image} />
          <Card     name={devices[2].name} image={devices[2].image}/>
        </BestPhones>}
      </Phones>
      <Footer> Phone Store App 2023 </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Navbar = styled.div`
  height: 50px;
  background-color: #2596be;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;

  .cart
  {
    font-weight: bold;
  }

  h3
  {
    color: white;
    border: 3px solid white;
    padding: 5px;
  }
`
const Items = styled.div`
    display: flex;
    gap: 30px;
    color: #ffffff;


    *
    {
      cursor: pointer;
    }
`



const MainImage = styled.div`
  height: 450px;

  img
  {
    width: 100%;
    /* height: 400px; */
    height: 100%;
    object-fit: cover;
    object-position: center left;
  }
  position: relative;
`
const Phones = styled.div`
`
const Title = styled.div`
  text-align: center;
  color: #ffffff;
  font-weight: 300;

  position: absolute;
  top: 382px;
  background-color: #00000070;
  width: 100%;
`
const BestPhones = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
`

const Footer = styled.div`
  background-color: #00659fde;
  width: 100%;
  height: 40px;
  margin-top: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`