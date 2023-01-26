import { useEffect, useState } from "react";
import useBodyList from "./useBodyList";

const Posts = () => {
    const [userid, setUserId] = useState([]);
    const [bodys, setBody] = useState([]);
    const[selecteduserid, setSelectedUserId] = useState("");

    const BODYS = useBodyList(selecteduserid);

  
useEffect(() => {
    requestPosts()
},[])



    async function requestPosts(){
        const req = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await req.json();
        console.log(json);
        //setPost(json);
        const userIdArr = json.map(data => data.userId);
        console.log("userIdArr", userIdArr);
        const userIdSet = new Set([...userIdArr]);
        console.log("userIdSet", userIdSet);
        const newUserIdArr = [...userIdSet]
        setUserId(newUserIdArr);
        setBody(json);
        
    }
    console.log("selecteduserid",selecteduserid);
    return(
        <div>
           <table>
              <thead>
                 <tr style = {{backgroundColor: "lightblue"}}>
                 <select value={selecteduserid} onChange={(e) => setSelectedUserId(e.target.value) }>
                  <th>User Id</th>{userid.map(userid =>(<option value={userid}>{userid}</option>) )}</select>
                <select value={bodys.body}  onChange={(e) => setBody(e.target.value)}>
                      <th>Description</th>{BODYS.map(bodys =>(<option value={bodys.body}>{bodys.body}</option>) )}</select>
                 </tr>
              </thead>
              <tbody>
                {/* {posts.map(post =>(
                     <tr key={post.id}>
               <option value={posts}>{post.userId}</option> 
                         <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td> 
                    </tr>
                ) )} */}
              </tbody>
           </table>
        </div>
    )
}

export default Posts