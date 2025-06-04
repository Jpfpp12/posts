import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPostDetail } from '../features/posts/postsSlice';
import Spinner from '../components/Spinner';
import ErrorBox from '../components/ErrorBox';
import './Detail.css';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.posts.selectedPost);
  const detailStatus = useSelector((state) => state.posts.detailStatus);
  const detailError = useSelector((state) => state.posts.detailError);

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [dispatch, id]);

  let content;
  if (detailStatus === 'loading') {
    content = <Spinner />;
  } else if (detailStatus === 'failed') {
    content = <ErrorBox message={detailError} />;
  } else if (detailStatus === 'succeeded' && post) {
    content = (
      <div className="detail‐card">
        <div className="detail‐image‐container">
          <img
            src={`https://picsum.photos/600/350?random=${post.id}`}
            alt="Post Detail"
            className="detail‐image"
          />
        </div>
        <div className="detail‐content">
          <h2 className="detail‐title">{post.title}</h2>
          <p className="detail‐body">{post.body}</p>
          <p className="detail‐userId">User ID: {post.userId}</p>
          <Link className="detail‐backLink" to="/">
            ← Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return <main className="detail‐page">{content}</main>;
}