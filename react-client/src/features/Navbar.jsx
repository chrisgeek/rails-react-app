import { Link } from 'react-router-dom'

function NavBar(){
  return(
    <nav>
      <Link to='/'>View Posts</Link> 
      {' | '}
      <Link to='/new'>New Post</Link> 
    </nav>
  )
}

export default NavBar;
