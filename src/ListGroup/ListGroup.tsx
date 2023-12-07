// import { MouseEvent } from "react";

import { useState } from "react";
import './ListGroup.css'


// Life Cycle
// 1. Construct
// 2. Render
// 3. Mount
// 4. Re-Render (caused by changing of a state)
// 5. Un-Mounting (when components get taken away from the app)
interface Props {
    cities: string[]
    cohortNum: number
}
const ListGroup = ({ cities, cohortNum }: Props) => {
    

    // let selectedIdx = -1
    const [selectedIdx, setSelectedIdx] = useState(-1)

    // const handleClick = (event: MouseEvent) => {
    //     console.log(event)
    // }

    return (
        <>
            {/* {cities.length === 5 && <h1>This is true</h1>}   */}
            <div>
                {/* <h1 style={{backgroundColor: 'royalblue'}}>Thieves-{cohortNum}</h1> */}
                <h1 className="cohort">Thieves-{cohortNum}</h1>
                <ul className="list-group">
                    {/* {<h1>{selectedIdx}</h1>} */}
                    {cities.map((city, idx) => {
                        return <li onClick={() => { console.log(setSelectedIdx(idx)) }} key={idx} className={selectedIdx === idx ? 'list-group-item active' : 'list-group-item'}>{city}</li>
                    })}
                </ul> 
            </div>
        </>
    );
};
export default ListGroup