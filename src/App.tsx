import { useState } from "react"
import  Cart  from "./Cart/Cart"
import  Nav  from "./Nav/Nav"
import Like from "./Like/Like"
import Form from "./Form/Form"
import Component from "./Component/Component"

const App = () => {

  const [cartItems, setCartItems] = useState(['coffee mug', 'jersey', 'camera'])

  const handleClick = () => {
    setCartItems([])
  } 



  return (
    <>
      <Nav cartItemsLength={cartItems.length} />
      <Cart cartItems={cartItems} handleClick={handleClick}/>

      <Like />
    <Component />


      <Form />
    </>
  )
}
export default App