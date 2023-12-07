import { useState } from "react"

// interface User {
//     name: string,
//     company: string,
//     age: number,
//     favColor: string,
//     favFood: string
// }
const Games = () => {
    // const [user, setUser] = useState<User> ({
    //     name: 'Kevin',
    //     company: 'Resideo',
    //     age: 100,
    //     favColor: 'green',
    //     favFood: 'pizza'
    // })

    // const handleClick = () => {
    //     setUser({...user, favFood: 'steak'})  
    // }

    const [gamesList, setGamesList] = useState(['World of Warcraft', 'Exteel', 'LoL', 'Runescape'])

    const handleClick = () => {
        // setGamesList([...gamesList,  'RE4'])      adding games

        // setGamesList(gamesList.filter((game) => {     removing a game
        //     return game !== 'LoL'
        // }))

        //updating a game
        setGamesList(gamesList.map((game) => {     
            return game === 'LoL' ? 'WoW': game
        }))

    }
    return (
        <>
            <h1>Managing State Cont.</h1>
            {gamesList.map((game, idx) => {
                return <li key={idx}>{game}</li>
            })}

            {/* <button onClick={handleClick}>Add Game</button>   add games */}
            {/* <button onClick={handleClick}>Remove Game</button>  removing a game */}
 
            {/* // update game */}
            <button onClick={handleClick}>Update Game</button>  

            {/* <p>Hello, my name is {user.name}, I work at {user.company}, I am {user.age} years of age, and my fav food is {user.favFood}</p>
            <button onClick={handleClick}>Change User</button> */}
        </>
    )
}
export default Games