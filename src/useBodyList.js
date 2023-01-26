import { useEffect, useState } from "react";

function useBodyList(userid){
    const [bodylist, setBodyList] = useState([]);

    useEffect(() => {
        if (!userid){
            setBodyList([]);
        }else{
            getBodyList();
        }
    },[userid]);

    async function getBodyList(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
        const json = await res.json();
        console.log(json);
        setBodyList(json);
    }
    return bodylist;
}
export default useBodyList