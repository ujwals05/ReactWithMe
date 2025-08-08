import Post from "./posts";
import WelcomeMessage from "./welcomeMessage";
import LoadingState from "./Loading";
import { useContext, useEffect } from "react";
import { Posting } from "../store/post-list-store";
import { useState } from "react";
 
const PostList = () => {
  const {postList,addInitalPosts} = useContext(Posting);

  const [firstState,nextState] = useState(false);

   
    useEffect(()=>{
      nextState(true);
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          addInitalPosts(data.posts);
          nextState(false)
        });
    },[])

  return (
    <>
      <div>
        {firstState && <LoadingState/> }
        {!firstState && postList.length === 0 ? <WelcomeMessage /> : null}
        {!firstState && postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default PostList;