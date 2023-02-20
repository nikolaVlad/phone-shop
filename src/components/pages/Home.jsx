import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Card from "../Card";
import Cart from "../Cart";
import Modal from "../Modal";
import Phone from "../Phone";

export default function Home() {
  const api = 'http://localhost:4000/devices';
  const mainImage = 'https://pbs.twimg.com/media/EkUTsENXYAULd_p.jpg'

  const [showAll, setShowAll] = useState(false);
  const [devices, setDevices] = useState([]);
  const [openedModal, setOpenedModal] = useState(0)
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);

  const addInCart = (index) => {
    setAlert(true);
    setCart([...cart, devices[index]])

    setTimeout(() => {
      setAlert(false)
    }, [2000])
  }

  const setData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setDevices(data);
  };

  const [activeDevice, setActiveDevice] = useState(null);

  const openDevice = (index) => {
    setOpenedModal(1);
    setActiveDevice(devices[Number(index)]);
  }

  useEffect(() => {
    setData()
  }, [])



  return (
    <Wrapper>
      {alert && <Alert>
        <Button color="primary" variant="contained" >Artikal dodat u korpi</Button>
      </Alert>}
      {!!openedModal
        && <Modal>
          {openedModal === 1 && <Phone device={activeDevice} onExit={() => setOpenedModal(0)} />
            ||
            <Cart onEmpty={() => setCart([])} items={cart} onExit={() => setOpenedModal(0)} />
          }
        </Modal>}

      <Navbar>
        <h3>Phone Store</h3>
        <Items>
          <div>Pocetna</div> |
          <div onClick={async () => {
            await setShowAll(true)
            window.scrollTo({
              top: 420,
              behavior: 'smooth'
            })
          }
          }>
            Svi telefoni
          </div> |
          <div onClick={() => setOpenedModal(2)} className="cart">Korpa ({cart.length})</div>
        </Items>
      </Navbar>
      <MainImage>
        <img
          src={mainImage} />
        <Title>
          <h2>Najprodavaniji telefoni</h2>
        </Title>
      </MainImage>
      {
        devices.length &&
        <>
          <Phones>
            <BestPhones>
              <Card onAdd={() => { addInCart(1) }} onOpen={() => openDevice(1)} name={devices[1].name} image={devices[1].image} />
              <Card onAdd={() => { addInCart(0) }} onOpen={() => openDevice(0)} lg name={devices[0].name} image={devices[0].image} />
              <Card onAdd={() => { addInCart(2) }} onOpen={() => openDevice(2)} name={devices[2].name} image={devices[2].image} />
              {showAll && devices.slice(3).map((device) =>
              (
                <Card onAdd={() => { addInCart(device.id) }} onOpen={() => openDevice(device.id)} name={device.name} image={device.image} />
              ))}
            </BestPhones>
          </Phones>
          <SeeAll onClick={() => setShowAll(!showAll)}>
            {!showAll && <button> <span>{'↓'}</span>
              <span> Vidi sve </span>
              <span>{'↓'}</span> </button> || <span>
                <button>Vidi manje...
                </button>
              </span>}
          </SeeAll>

        </>}

      <Footer> Phone Store App 2023 </Footer>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 50px;
  position: relative;
`

const Alert = styled.div`
  position: fixed;
  top: calc(100% - 50px);
  background-color: reds;
  width: 240px;
  height: 300px;
  z-index: 10;
  left: calc(50% - 150px);

  button
  {
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 300px;
  }
`

const Navbar = styled.div`
  height: 50px;
  background-color: #2596be;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 30px; */
  border-top: 2px solid orange;
  position: fixed;
  top: 0;
  z-index: 10;
  /* width: 100%; */
  left: 0;
  overflow: hidden;
  width: 100%;
  .cart
  {
    font-weight: bold;
    margin-right: 30px;
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
  height: 380px;

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
const SeeAll = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #323232d2;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 20px;
  
  button
  {
    width: 300px;
    height: 40px;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   

  &:hover
  {
    background-color: #57575722;
  }
  }


`

const Title = styled.div`
  text-align: center;
  color: #ffffff;
  font-weight: 300;

  position: absolute;
  top: 312px;
  background-color: #00000070;
  width: 100%;
`
const BestPhones = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 50px 315px;
  flex-wrap: wrap;
`

const Footer = styled.div`
  /* background-color: #00659fde; */
  background-color: #2596be;
  width: 100%;
  height: 40px;
  margin-top: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`