import Post from "./posts";
import WelcomeMessage from "../../../my-media-withBackend/src/components/welcomeMessage";
import { useContext } from "react";
import { Posting } from "../store/post-list-store";

const PostList = () => {
  const {postList} = useContext(Posting);
  return (
    <>
      <div>
        {postList.length() === 0?<WelcomeMessage/>:null}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;