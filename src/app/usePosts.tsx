"use client";
import React from "react";

import { PostData } from "@/types";
import { listPosts } from "./actions";

const postsContext = React.createContext({
  posts: [] as PostData[],
  refresh: () => {},
});

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState([] as PostData[]);

  const refresh = React.useCallback(async () => {
    listPosts().then(setPosts);
  }, []);

  React.useEffect(() => {
    refresh();
    return;
  }, [refresh]);

  return (
    <postsContext.Provider
      value={{
        posts,
        refresh,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};

export const usePosts = () => React.useContext(postsContext);
