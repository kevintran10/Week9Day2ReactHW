import { useEffect, useState } from "react"

interface IRenderAPI {
    activity: string,
    type: string,
    participants: number
}

const RenderAPI = () => {
    const [activity, setActivity] = useState<IRenderAPI>({
        activity: '',
        type: '',
        participants: 0
    })


    useEffect((): void => {
        getActivity()
        // eslint-disable-next-line
    }, [activity]);

    const getActivity = async () => {
        const response = await fetch(`https://www.boredapi.com/api/activity`);
        if (response.ok) {
            const data = await response.json()
            setActivity({
                activity: data.activity,
                type: data.type,
                participants: data.participants
            })
        }
    };


    return (
        <>
            <h1 className="text-center">Bored? Find something to do...</h1>
            <div className="w-25 mx-auto">
                <input onChange={(event) => { setActivity({ ...activity, activity: event.target.value }) }} placeholder="click the button" type="text" />
                <button onClick={(event) => { setActivity({ ...activity, activity: event.target.value}) }} type="submit">Random activity</button>
            </div>
            <div>
                
            </div>
        </>
    )
}
export default RenderAPI