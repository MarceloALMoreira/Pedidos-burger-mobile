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

    background: 
    linear-gradient(157.44deg, 
    rgba(255, 22, 255, 0.6) 0.84%, 
    rgba(255, 22, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);
`

export const Logotipo = styled.img`
    align-self: center;
    width: 150px;

    margin-bottom: 22px;
`

export const ContainerItens = styled.div`
   display: flex;
   flex-direction: column;
   padding: 44px 12px;
   margin-bottom: 20px;
   border-radius: 7.5px;
   background-color: black;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Adicionar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
    width: 140px;
    height: 34px;

    border-radius: 7.5px;
    border: none;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    background: #D93856;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    &:active{
        opacity: 0.5;
    }
`

export const VerPedidos = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    gap: 10px;
    margin-top: 57px;
    width: 140px;
    height: 34px;

    border-radius: 7.5px;
    border: 1px solid white;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    background: none;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    &:active{
        opacity: 0.5;
    }
    i{
        display: flex;
        color: #D93856;
        font-size: 18px;

    }
`

export const Titulo = styled.h1`

    font-style: normal;
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

export const TextoLabel = styled.label`
    margin-bottom: 5px;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding-left: 7.5px;
    line-height: 22px;
    align-items: center;
    letter-spacing: -0.408px;
    color: #fff;
`

export const ContainerInput = styled.input`
    width: 300px;
    height: 32.5px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 7.5px;
    border: none;
    outline: none;
    padding-left: 7.5px;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 28px;
    color: #FFF;
    margin-bottom: 22px;
   
`


