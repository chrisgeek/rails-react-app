import React from 'react';
import PostsList from './features/posts/PostsList.jsx'
import PostDetails from './features/posts/PostDetails.jsx'
import NewPost from './features/posts/NewPost.jsx'
import EditPost from './features/posts/EditPost.jsx'
import DeletePost from './features/posts/DeletePost.jsx'
import { Route, Routes } from 'react-router-dom'

function AppRoutes(){
  return(
    <Routes>
      <Route path = '/' element={<PostsList />} />  
      <Route path = 'posts/:id' element={<PostDetails />} /> 
      <Route path = '/new' element={< NewPost />} />
      <Route path = '/posts/:id/edit' element={< EditPost />} />
      <Route path = '/posts/:id/delete' element={< DeletePost />} />
    </Routes>
  );
}

export default AppRoutes;
