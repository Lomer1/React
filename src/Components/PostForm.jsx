import React, { useState } from 'react'
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {

        e.preventDefault();
        const newPost = {
            ...post, id : Date.now(),
        }
        
        create(newPost);
        setPost({title: '', body: ''});
      }

    return (
        <form>
        <MyInput
        value = {post.title} 
        onChange = {e => setPost({...post, title: e.target.value})}
        text = "text" 
        placeholder = "Название поста">
        
        </MyInput>
        <MyInput
        value = {post.body} 
        onChange = {e => setPost({...post, body: e.target.value})}
        text = "text" 
        placeholder = "Описание">

        </MyInput>
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;