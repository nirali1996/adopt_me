import { useState } from "react"

function Page(){

    const[firstname,setFirstName] = useState("None");
    const[display,setDisplay] = useState(false);
       // console.log(firstname);

    return(
        <div>
            <form className="page">
                <label>First Name
                    <input value={firstname}
                    onChange = {(e) => setFirstName(e.target.value)}></input>
                </label>
                {display ? (<p>{firstname}</p>):(null)}
               
                <p>
                <label>Last Name
                    <input></input>
                </label>
                </p>
                <p>
                <label>Address
                    <input></input>
                </label>
                </p>
                <p>
                <label>Province
                    <input></input>
                </label>
                </p>
                <p>
                <label>City
                    <input></input>
                </label>
                </p>
                <p>
                <label>Postal Code
                    <input></input>
                </label>
                </p>
                <label>
                    <button onClick={(e)  =>{e.preventDefault(); setDisplay(!display)}} >Submit</button>
                </label>

            </form>
        </div>
   

    )
}

export default Page