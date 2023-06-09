import styled from 'styled-components'


export const Container = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 44px;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(157.44deg, rgba(255, 22, 255, 0.6) 0.84%, rgba(255, 22, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    /* background-color: black; */



`

export const Logotipo = styled.img`
    align-self: center;
    width: 200px;
    padding: 10px;
`

export const ContainerItens = styled.div`
   display: flex;
   flex-direction: column;
   padding: 44px 12px;
   width: 320px;
   margin-bottom: 20px;
   border-radius: 7.5px;
   background-color: black;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
`

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;  

    margin-top: 57px;
    width: 290px;
    height: 44px;

    border-radius: 7.5px;
    border: none;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    background: #D93856;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`

export const Titulo = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    color: #fff;

    margin: 25px 0px 35px 0px;
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
    height: 40.5px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 7.5px;
    border: none;
    outline: none;
    width: 290px;
    padding-left: 7.5px;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 28px;
    color: #FFF;
    margin-bottom: 22px;
   
`


