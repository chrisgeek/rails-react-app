import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants.js'

function PostsList(){
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(()=>{
    async function loadPosts(){
      try{
        const res = await fetch(API_URL);
        if(res.ok) {
          const data = await res.json() // convert to json
          setPosts(data)
          console.log(data)
        }
        else {
          throw res;
        }
      }
      catch(e){
        setError('An error occurred' );
        console.log('An error occured', e);
      }
      finally{
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return(
    <div>
      {posts.map((post)=>(
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}    
    </div>
  );
}

export default PostsList;
