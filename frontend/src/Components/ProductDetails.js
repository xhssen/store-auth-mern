import { useProductsContext } from '../hooks/useProductsContext'
import { useAuthContext } from '../hooks/useAuthContext'


const ProductDetails = ({ product }) => {
  const { dispatch } = useProductsContext()
  const { user } = useAuthContext()

 

    const response = fetch('/api/proudcts/' + product._id, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = response.json()

    if (response.ok) {
      dispatch({type: 'ADD_FAVORIS', payload: json})
    }
  

  return (
    <div className="Product-details">
      <h4>{product.name}</h4>
      <p><strong>price: </strong>{product.price}</p>
      <p><strong>category: </strong>{product.category}</p>
    </div>
  )
}
export default ProductDetails