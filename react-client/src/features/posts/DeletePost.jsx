import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';

function DeletePost(){
  const { id } = useParams();
  const navigate = useNavigate('');

  useEffect(()=>{
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
    deleteCurrentPost();
  }, [id, navigate]);
}

export default DeletePost;
