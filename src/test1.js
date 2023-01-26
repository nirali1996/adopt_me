import Test2 from "./test2";

function Test1(prop){
    console.log(prop.lastName);
    return(
        <div>
            <h1>{prop.lastName}</h1>
            <Test2 city = "Toronto"/>
        </div>
    )
}

export default Test1