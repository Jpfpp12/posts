import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ post }) {
  const MAX_TITLE_LENGTH = 20;
  const MAX_BODY_LENGTH = 60;

  const slicedTitle =
    post.title.length > MAX_TITLE_LENGTH
      ? post.title.slice(0, MAX_TITLE_LENGTH) + '...'
      : post.title;

  const slicedBody =
    post.body.length > MAX_BODY_LENGTH
      ? post.body.slice(0, MAX_BODY_LENGTH) + '...'
      : post.body;

  const placeholderImg = 'https://picsum.photos/400/250?random=' + post.id;

  return (
    <div className="card‐wrapper">
      <div className="card‐image‐container">
        <img
          className="card‐image"
          src={placeholderImg}
          alt="Post Preview"
        />
      </div>
      <div className="card‐content">
        <p className="card‐userId">User ID: {post.userId}</p>
        <p className="card‐title">Title: {slicedTitle}</p>
        <p className="card‐body">Body: {slicedBody}</p>
        {post.body.length > MAX_BODY_LENGTH && (
          <Link className="card‐readMore" to={`/post/${post.id}`}>
            Read More…
          </Link>
        )}
      </div>
    </div>
  );
}