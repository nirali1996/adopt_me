import { useEffect, useState } from "react"

const Comments = () => {
    const[comments, setComment] = useState([]);

useEffect(() => {
    requestComments()
},[]) 
    async function requestComments(){
        const req = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json =  await req.json();
        console.log(json);
        setComment(json); 
    }

    return(
        <div>
           <table>
              <thead>
                 <tr>
                      <th>User Id</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Description</th>
                 </tr>
              </thead>
              <tbody>
              {comments.map(com =>(
                 <tr key={com.id}>
                      <td>{com.postId}</td>
                      <td>{com.id}</td>
                      <td>{com.name}</td>
                      <td>{com.email}</td>
                      <td>{com.body}</td>
                 </tr>
               ) )}
              </tbody>
            </table>
        </div>
    )
}
export default Comments