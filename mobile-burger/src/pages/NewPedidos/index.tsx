import { Button, Container, ContainerInput, ContainerItens, Logotipo, TextoLabel, Titulo } from "./styles"

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
        <Button>Novo Pedido</Button>
      </ContainerItens>

    </Container>
  )
}

export default NewPedidos