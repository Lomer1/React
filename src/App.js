import { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import PostItem from "./Components/PostItem";
//import Counter from "./Components/Counter";
import "./styles/style.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'Huuuki', body: 'Description'},
    {id: 3, title: 'Steam', body: 'Description'},
  ])

  return (
    <div className="App">
      {posts.map (post => 
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  );
}

export default App;
