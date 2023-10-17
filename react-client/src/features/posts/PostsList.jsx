import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants.js';
import { Link } from 'react-router-dom';

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
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
          <p>{post.body}</p>
        </div>
      ))}    
    </div>
  );
}

export default PostsList;
