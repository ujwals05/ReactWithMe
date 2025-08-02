import Post from "./posts";
import WelcomeMessage from "./welcomeMessage";
import { useContext } from "react";
import { Posting } from "../store/post-list-store";

const PostList = () => {
  const {postList,addInitalPosts} = useContext(Posting);
    const handleOnclick = () => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(data => {
          addInitalPosts(data.posts)
        });
    };
  return (
    <>
      <div>
        {postList.length === 0 ? (
          <WelcomeMessage handleOnclick={handleOnclick} />
        ) : null}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;