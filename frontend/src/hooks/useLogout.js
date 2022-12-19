import { useAuthContext } from './useAuthContext'
import { useProductsContext } from './useProductsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchProducts } = useProductsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchProducts({ type: 'SET_Products', payload: null })
  }

  return { logout }
}