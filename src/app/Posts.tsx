"use client";

import { usePosts } from "./usePosts";

export const Posts = () => {
  const { posts } = usePosts();
  return (
    <div>
      <h1 className="title is-5">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="box">
          <h2 className="title is-6">{post.author}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
