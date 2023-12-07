const Message = () => {
    const name = 'kevin'

    if (name) {
        return (
            <>
                <h1>{name}</h1>
            </> 
        )
    }
  return (
    <>
        <h1>Hello, Thieves</h1>
    </>
  )
}
export default Message