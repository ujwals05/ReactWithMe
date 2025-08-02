import Post from "./posts";
import WelcomeMessage from "./welcomeMessage";
import Loader from "./LoadingState";
import { useContext } from "react";
import { Posting } from "../store/post-list-store";
import { useEffect } from "react";
import { useState } from "react";

const PostList = () => {
  const {postList,addInitalPosts} = useContext(Posting);
  const [fetchData,setfetch] = useState(false)

  useEffect(()=>{

    let controller = new AbortController;
    let signal = controller.signal;
    setfetch(true);
    fetch(`https://dummyjson.com/posts`,{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
        setfetch(false);
      });
      return () => {
        console.log("Cleaning up the information")
        controller.abort();
      }
  }, [] )


  return (
    <>
      <div>
        {fetchData && <Loader />}
        {!fetchData && postList.length === 0 ? <WelcomeMessage /> : null}
        {!fetchData && postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default PostList;