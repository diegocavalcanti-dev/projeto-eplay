import { useParams } from 'react-router-dom'

export const Product = () => {
  const { id } = useParams()

  return <div>produto {id}</div>
}

export default Product
