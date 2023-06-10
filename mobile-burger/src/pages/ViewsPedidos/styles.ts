import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(157.44deg, 
    rgba(255, 22, 255, 0.6) 0.84%, 
    rgba(255, 22, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);

`

export const LogoCarrinhoPedidos = styled.img`
    align-self: center;
    width: 150px;
    

    margin-bottom: 25px;
`

export const ContainerPedidositens = styled.div`
   display: flex;
   flex-direction: column;
   padding: 44px 12px;
   border-radius: 7.5px;
   background-color: black;
`

export const TituloPedidos = styled.h1`
    font-style: normal;
    width: 300px;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    margin-bottom: 22px;
    padding: 5px;

    color: #000;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: white;
    border-radius: 7.5px;

`

export const CardPedidos = styled.div`
    margin-bottom: 18px;
    width: 300px;
    border-radius: 8.5px;
    padding: 7.5px;
    background: rgba(255, 255, 255, 0.25);

`


export const TextoPedidosCard = styled.h3`
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 100;
    margin-bottom: 10px;
    line-height: 28px;
    color: white;
`

export const ClientePedidos = styled.div`
    display: flex;
    justify-content: space-between;

`

export const ClienteName = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: white;
`

export const LinkVoltar = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    height: 34px;
    border-radius: 7.5px;
    border: 1px solid white;
    margin-top: 57px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    background: none;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    &:active{
        opacity: 0.5;
    }
`

export const Icon = styled.i`
    display: flex;
    color: #D93856;
    font-size: 18px;
`

export const IconStrash = styled.i`
    display: flex;
    color: white;
    font-size: 20px;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: #D93856;
        cursor: pointer;
    }

`