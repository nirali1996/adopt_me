import { useEffect, useState } from "react"

const Albums = () => {
   const [abc,setabc] = useState([]);

    useEffect(() =>{
        requestAlbums()
    },[])

async function requestAlbums(){
    const req = await fetch("https://jsonplaceholder.typicode.com/albums");
    const json =  await req.json();
    console.log(json);
    setabc(json);
}


return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                <tbody>
                    {abc?.map(ef => (
                    <tr key={ef.id}>
                        <td>{ef.userId}</td>
                        <td>{ef.id}</td>
                        <td>{ef.title}</td>
                    </tr>
                    ))}
                </tbody>
            </thead>
        </table>
    </div>
)
}
export default Albums