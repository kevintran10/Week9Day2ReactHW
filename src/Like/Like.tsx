
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Like = () => {
  const[like, setLike] = useState(true)

  const handleClick = () => {
    if (like) {
      console.log('is liked')
    } else {
      console.log('is not liked')
    }
    setLike(!like)
  }
  return (
    <>
        <h3><FaRegHeart /> Like</h3>
        <button onClick={handleClick}><FaRegHeart /> Like</button>
    </>
  )
}
export default Like