import { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import PostForm from "./Components/PostForm";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/Button/MyButton";
import MyInput from "./Components/UI/Input/MyInput";
import MySelect from "./Components/UI/Select/MySelect";
//import Counter from "./Components/Counter";
import "./styles/style.css";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'Huuuki', body: 'AA'},
    {id: 3, title: 'AA', body: 'SS'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('отработала ф-ия')
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPost = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id ))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style = {{margin: '15px'}}/>
      <div>
        <MyInput
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder = 'Поиск'        
        />
        <MySelect 
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue = 'Сортировка'
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}

        ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove = {removePost} posts = {sortedPost} title = "Список постов 1"/>
        : <h1 style = {{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
