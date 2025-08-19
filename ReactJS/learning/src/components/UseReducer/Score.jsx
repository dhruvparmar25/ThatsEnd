import React, { useReducer } from 'react'
const initialScore = [
    {
        id: 1,
        name: "Dhruv",
        score: 0
    },
    {
        id: 2,
        name: "Jay",
        score: 0
    }
]
const reducer = (State, action) => {
    console.log("state",State);
    console.log("Action",action);
    switch (action.type) {
        case 'inc':
            return State.map((player) => {
                console.log("player",player);
                if (player.id === action.id) {
                    return { ...player, score: player.score + 1 };
                } else {
                    return player;
                }
            })
        default:
            return State;
    }
}
function Score() {
    const [score, dispatch] = useReducer(reducer, initialScore);
    const hadelInc = (player) => {
        dispatch({ type: 'inc', id: player.id })
    }
    return (
        <div>
            {score.map((player) => (
                <div key={player.id}>
                    <label>
                        <input type="button" value={player.name} onClick={() => hadelInc(player)} />
                        {player.score}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Score