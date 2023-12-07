import { useState } from 'react';

const Component = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
    })

    const handleClick = () => {
        setGame({
            ...game, player: {
                ...game.player, name: 'Kevin'
            }
        })
    }

    return (
        <>
            <p>Current Player-name: {game.player.name}</p>
            <button onClick={handleClick}>Update Player</button>
        </>
    )
}
export default Component