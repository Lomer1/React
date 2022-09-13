import { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
//import Counter from "./Components/Counter";
import "./styles/style.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'Huuuki', body: 'Description'},
    {id: 3, title: 'Steam', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Sanek', body: 'Description'},
    {id: 2, title: 'Meshok', body: 'Description'},
    {id: 3, title: 'Vitok', body: 'Description'},
  ])


  return (
    <div className="App">
      <PostList posts = {posts} title = "Список постов 1"/>
      <PostList posts = {posts2} title = "Room 61"/>
    </div>
  );
}

export default App;
