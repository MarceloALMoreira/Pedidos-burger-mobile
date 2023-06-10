import { Adicionar, Container, ContainerButtons, ContainerInput, ContainerItens, Logotipo, TextoLabel, Titulo, VerPedidos } from "./styles"

import LogoBurger1 from '../../assets/logoBurger.png'
import { IoArrowRedoOutline } from 'react-icons/io5'

import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"


interface Pedido {
  id: number
  pedido: string
  name: string
}


const NewPedidos = () => {

  // Fazendo o gerenciamento do estado de pedidos

  const [pedidos, setPedidos] = useState<Pedido[]>([])

  // Pegando os valores atraz da ref: 
  const inputPedidos = useRef<HTMLInputElement>(null)
  const inputName = useRef<HTMLInputElement>(null)


  // Função para o button
  const AdicionarPedido = () => {

    const pedido = inputPedidos.current?.value
    const name = inputName.current?.value

    try {
      // passando para nosso objeto Pedidos os valores do input
      if (pedido && name) {
        const newPedido: Pedido = {
          id: pedido.length + 1,
          pedido,
          name
        }

        // Limpando os input
        setPedidos([...pedidos, newPedido])
        inputPedidos.current.value = ''
        inputName.current.value = ''
      }

      //Chamando a função da Mensagem Sucesso
      // showToastMessage()
    } catch (error) {
      console.log(error)
    }

  //   useEffect(() => {
  //     console.log('Fui chamado]')
  //   },[pedidos])
  
  }

  const showToastMessage = () => {
    toast.success('Pedido Adicionado com sucesso!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

 
  return (
    <Container>

      <ContainerItens>
        <Logotipo src={LogoBurger1} alt="Logo" />


        <Titulo>Faça seu pedido!</Titulo>

        <TextoLabel>Pedido</TextoLabel>
        <ContainerInput placeholder="1 Coca-Cola, 1-X Salada" ref={inputPedidos} />

        <TextoLabel>Nome do Cliente</TextoLabel>
        <ContainerInput placeholder="Steve Jobs" ref={inputName} />

        <ContainerButtons>

          <Adicionar onClick={AdicionarPedido}>
            Adicionar
            {/* <ToastContainer /> */}
          </Adicionar>


          <VerPedidos to={"/pedidos"}>
            Ver Pedidos
            <i>
              <IoArrowRedoOutline />
            </i>
          </VerPedidos>

        </ContainerButtons>
        {/* <div>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Pedidos:</h2>
          <ul>
            {pedidos.map((pedido) => (
              <li key={pedido.id} style={{ color: 'white' }}>{`Pedido: ${pedido.pedido}, Cliente: ${pedido.name}`}</li>
            ))}
          </ul>
        </div>  */}
      </ContainerItens>

    </Container>
  )
}

export default NewPedidos