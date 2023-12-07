import { FormEvent, useState } from "react";

interface User {
    email: string,
    password: string
}

const Form = () => {
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })

        const handleSubmit= (event: FormEvent) => {
            event.preventDefault()
            console.log(user)
        }
    return (
        <>
            {/* <h1 className="text-center">Login Page</h1>
            <form className="w-25 mx-auto" onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(event) => {setUser({...user, email: event.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={(event) => {setUser({...user, password: event.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
               
                <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
            </form> */}
              <h1 className="text-center">Create a Post Page</h1>
            <form className="w-25 mx-auto" onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={(event) => {setUser({...user, email: event.target.value})}} type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="caption" className="form-label">Caption</label>
                    <input onChange={(event) => {setUser({...user, password: event.target.value})}} type="text" className="form-control" id="caption" />
                </div>
               
                <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
            </form>
        </>
    )
}
export default Form