import Post from "./posts";
import WelcomeMessage from "./welcomeMessage";
import LoadingState from "./Loading";
import { useContext, useEffect } from "react";
import { Posting } from "../store/post-list-store";
import { useState } from "react";
 
const PostList = () => {
  const {postList,firstState} = useContext(Posting);


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