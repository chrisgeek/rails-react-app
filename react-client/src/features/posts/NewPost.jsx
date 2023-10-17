import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';

function NewPost(){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, body };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if(res.ok){
      const { id } = await res.json();
      navigate(`/posts/${id}`);
    }
    else{ console.log(res) }
  }

  return(
      <div>
        <h2>New Post</h2>
        <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="titleInput">Title</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br/>
          <label htmlFor="bodyInput">Body</label>
          <textarea
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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

export default NewPost;
