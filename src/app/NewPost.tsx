"use client";

import { PostCreate } from "@/types";
import React from "react";
import { newPost } from "./actions";
import { usePosts } from "./usePosts";

export const NewPost = () => {
  const { refresh } = usePosts();
  const [postData, setPostData] = React.useState<PostCreate>({
    content: "",
  });
  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await newPost(postData);
      refresh();
    },
    [refresh, postData]
  );

  return (
    <form onSubmit={onSubmit}>
      <h1 className="title is-5">New Post</h1>
      <div className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            name="content"
            className="textarea"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  );
};
