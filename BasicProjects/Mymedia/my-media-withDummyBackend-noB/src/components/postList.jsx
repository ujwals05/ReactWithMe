import Post from "./posts";
import WelcomeMessage from "./welcomeMessage";
import { useContext } from "react";
import { Posting } from "../store/post-list-store";
import { useState } from "react";

const PostList = () => {
  const {postList,addInitalPosts} = useContext(Posting);

  const [firstState,nextState] = useState(false);

   
    if(!firstState){
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          addInitalPosts(data.posts);
        });
        nextState(true);
    }
  return (
    <>
      <div>
        {postList.length === 0 ? (
          <WelcomeMessage/>
        ) : null}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;