import Image from "next/image";
import { NewPost } from "./NewPost";
import styles from "./page.module.css";
import { Posts } from "./Posts";
import { PostsProvider } from "./usePosts";

export default function Home() {
  return (
    <PostsProvider>
      <main className="section" style={{ maxWidth: 800 }}>
        <h1 className="title">Read some posts</h1>
        <div className="container">
          <div className="block">
            <Posts />
          </div>
          <div className="block">
            <NewPost />
          </div>
        </div>
      </main>
    </PostsProvider>
  );
}
