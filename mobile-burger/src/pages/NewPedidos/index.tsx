import { Button, Container, ContainerButtons, ContainerInput, ContainerItens,  Logotipo, TextoLabel, Titulo } from "./styles"

import LogoBurger from '../../assets/LogoBurger.svg'




const NewPedidos = () => {
  return (


    <Container>

      <ContainerItens>

        <Logotipo src={LogoBurger} alt="Logo" />

        <Titulo>Faça seu pedido!</Titulo>

        <TextoLabel>Pedido</TextoLabel>
        <ContainerInput placeholder="1 Coca-Cola, 1-X Salada" />

        <TextoLabel>Nome do Cliente</TextoLabel>
        <ContainerInput placeholder="Steve Jobs" />

    <ContainerButtons>

        <Button>Novo Pedido</Button>

    </ContainerButtons>
      </ContainerItens>

    </Container>
  )
}

export default NewPedidos