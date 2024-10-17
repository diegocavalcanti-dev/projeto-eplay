import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <div className="container">
      <img src="https://via.placeholder.com/222x250" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi
        magnam possimus autem consequatur tempore expedita, quibusdam totam
        doloremque quaerat et porro quo quam architecto? Accusantium tempora
        dolor voluptate odio?
      </Descricao>
    </div>
  </Card>
)

export default Product
