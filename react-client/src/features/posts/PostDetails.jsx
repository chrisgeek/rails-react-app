import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../constants.js';

function PostDetails(){
  const [post, setPost] = useState('');
  const { id } = useParams();
  const navigate = useNavigate('');

  const deleteCurrentPost = async () => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json",
    },
    });
    if(res.ok) {
      navigate('/')
    }
    else{ console.log(res); }
  };

   useEffect(() => {
     const fetchCurrentPost = async () => {
       try {
         const res = await fetch(`${API_URL}/${id}`);
         if (res.ok){
            const json = await res.json();
            setPost(json);
           console.log(post);
         }
         else {
           throw res;
         }
       }
       catch(e){
          console.log(e);
       }
  };
     fetchCurrentPost();
   }, [id]);

  if(!post) return <h2>Loading...</h2>;
  return(
      <div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
        <Link to='/'>Back to Posts</Link>
        {' | '}
        <button onClick={ ()=> deleteCurrentPost() }>
          Delete
        </button>
      </div>
      )
}

export default PostDetails;
