import { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
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
    {id: 3, title: 'Steam', body: 'Description'},
  ])


  return (
    <div className="App">
      <form>
        <MyInput text = "text" placeholder = "Название поста"></MyInput>
        <MyInput text = "text" placeholder = "Название поста"></MyInput>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = "Список постов 1"/>
    </div>
  );
}

export default App;
