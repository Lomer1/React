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

  const [post, setPost] = useState({title: '', body: '',})


  const addNewPost = (e) => {

    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost('');
  }

// исправить добавление постов (не появляется title, body  вновом посте)
  return (
    <div className="App">
      <form>
        <MyInput
        value = {post.title} 
        onChange = {e => setPost({...post, title: e.value})}
        text = "text" 
        placeholder = "Название поста">

        </MyInput>
        <MyInput
        value = {post.body} 
        onChange = {e => setPost({...post, body: e.value})}
        text = "text" 
        placeholder = "Описание">

        </MyInput>
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = "Список постов 1"/>
    </div>
  );
}

export default App;
