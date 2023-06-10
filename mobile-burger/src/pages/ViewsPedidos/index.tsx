import { CardPedidos, ClienteName, ClientePedidos, Container, ContainerPedidositens, Icon, IconStrash, LinkVoltar, LogoCarrinhoPedidos, TextoPedidosCard, TituloPedidos } from "./styles"

import logoPedidos from '../../assets/logoBurger.png'
import { IoArrowUndoOutline, IoTrashBinSharp } from "react-icons/io5"




const ViewPedidos = () => {


  return (
    <Container>

      <ContainerPedidositens>

        <LogoCarrinhoPedidos src={logoPedidos} />

        <TituloPedidos>Pedidos</TituloPedidos>
        <CardPedidos>
          <TextoPedidosCard >1 Coca-Cola, 1 X-Salada</TextoPedidosCard>

          <ClientePedidos>
            <ClienteName>Steve Jobs</ClienteName>
            <IconStrash>
              <IoTrashBinSharp />
            </IconStrash>
          </ClientePedidos>
        </CardPedidos>

        <CardPedidos>
          <TextoPedidosCard>1 Coca-Cola, 1 X-Salada</TextoPedidosCard>

          <ClientePedidos>
            <ClienteName>Steve Jobs</ClienteName>
            <IconStrash>
              <IoTrashBinSharp />
            </IconStrash>
          </ClientePedidos>
        </CardPedidos>

        <LinkVoltar to={'/'}>
          <Icon>
            <IoArrowUndoOutline />
          </Icon>
          Voltar
        </LinkVoltar>

      </ContainerPedidositens>
    </Container>


  )
}

export default ViewPedidos