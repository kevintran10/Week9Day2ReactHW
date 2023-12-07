interface Props {
    cartItemsLength: number
}

const Nav = (props: Props) => {
  return (
    <>
        <h1>Number of Items: {props.cartItemsLength}</h1>
    </>
  )
}
export default Nav