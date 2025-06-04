import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import ErrorBox from '../components/ErrorBox';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <Spinner />;
  } else if (status === 'failed') {
    content = <ErrorBox message={error} />;
  } else if (status === 'succeeded') {
    content = (
      <div className="home‐grid">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <main className="home‐container">
      <h1 className="home‐heading">Posts</h1>
      {content}
    </main>
  );
}