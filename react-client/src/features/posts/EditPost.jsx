import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../constants.js';

function EditPost(){
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [, setError] = useState(null);
  const [, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
    });

    if(res.ok){
      const { id } = await res.json();
      navigate(`/posts/${id}`);
    }
    else{ console.log(res) }
  }

  useEffect(() => {
     const fetchCurrentPost = async () => {
       try {
         const res = await fetch(`${API_URL}/${id}`);
         if (res.ok){
            const json = await res.json();
            setPost(json);
         }
         else {
           throw res;
         }
       }
       catch(e){
         setError(e);
       }
       finally{
         setLoading(false);
       }
  };
     fetchCurrentPost();
   }, [id]);

  if (!post) return <h2>Loading...</h2>
  return(
    <div>
       <h2>New Post</h2>
        <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="titleInput">Title</label>
          <input
            id="titleInput"
            type="text"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value })}
            required
          /><br/>
          <label htmlFor="bodyInput">Body</label>
          <textarea
            id="bodyInput"
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
            required
          /><br/>
        </div>
          <div>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default EditPost;
