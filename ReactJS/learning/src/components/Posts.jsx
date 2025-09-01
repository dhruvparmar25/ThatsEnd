import React, { useEffect, useState } from 'react';
import { deletePost, getPost } from '../pages/API CRUD/PostApi';
import '../pages/API CRUD/posts.css';
import  {Form}  from './Form'


function Posts() {
  const [data, setData] = useState([]);

  const getPostDayta = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostDayta();
  }, []);

  const handelDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatePosts = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatePosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-form">
     <Form />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElem) => (
            <li key={curElem.id}>
              <p>Title: {curElem.title}</p>
              <p>Body: {curElem.body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handelDeletePost(curElem.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default Posts;
