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
        const response = await fetch(`https://www.boredapi.com/api/${activity.activity}`)
        const data = await response.json()
        console.log(data)
    }


    return (
        <>
            <h1 className="text-center">Bored? Find something to do...</h1>
            <div className="w-25 mx-auto">
                <input onChange={(event) => { setActivity({ ...activity, activity: event.target.value }) }} type="text" />
                <button>Random activity</button>
            </div>
            <div>
                
            </div>
        </>
    )
}
export default RenderAPI