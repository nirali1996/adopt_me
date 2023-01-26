import Test1 from "./test1";

function Test(prop){
    console.log(prop.name);
    return(
       <div>
            <h1>Hi</h1>
            <h1>{prop.name}</h1>
            <Test1 lastName ="Patel"/>
        </div> 
    )
}

export default Test;