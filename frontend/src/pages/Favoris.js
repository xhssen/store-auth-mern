import { useEffect }from 'react'
import { useProductsContext } from "../hooks/useProductsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import ProductDetails from '../components/ProductDetails'
import ProductForm from '../components/ProductForm'

const Home = () => {
  const {products, dispatch} = useProductsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'GET_FAVORIS', payload: json})
      }
    }

    if (user) {
      fetchProducts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="products">
        {products && products.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div>
      <ProductForm />
    </div>
  )
}

export default Home