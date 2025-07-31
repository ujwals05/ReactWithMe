import Post from "./posts";
import { useContext } from "react";
import { Posting } from "../store/post-list-store";

const PostList = () => {
  const {postList} = useContext(Posting);
  return (
    <>
      <div>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;