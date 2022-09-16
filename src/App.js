import { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import PostForm from "./Components/PostForm";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/Button/MyButton";
import MyInput from "./Components/UI/Input/MyInput";
//import Counter from "./Components/Counter";
import "./styles/style.css";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'Huuuki', body: 'Description'},
    {id: 3, title: 'Steamm', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <PostList posts = {posts} title = "Список постов 1"/>
    </div>
  );
}

export default App;
