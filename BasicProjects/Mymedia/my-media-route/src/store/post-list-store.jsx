import { createContext, useEffect, useReducer,useState } from "react";

export const Posting = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  firstState: false
});

let DEFAULT = [
  {
    id: "1",
    names: "John",
    title: "Visit to MUMBAI",
    body: "Hello buddies I recenlty visited to mumabai had to good time here, Hope to visit again",
    reactions: 8,
    tags: ["#vaction", "#enjoy", "#happy"],
  },
  {
    id: "2",
    names: "Golu",
    title: "Finally passed.!!",
    body: "I am happy that i am passed ",
    reactions: 10,
    tags: ["#pass", "#3years", "#happy"],
  },
];

const postListReducer = (currListPosition, action) => {
  let newList = currListPosition;
  if (action.type === "DELETE_POST") {
    newList = currListPosition.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newList = [action.payload, ...currListPosition];
  }
  return newList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);

  const [firstState, nextState] = useState(false);

  const addInitalPosts = (posts) => {
    console.log(`posts`);
    dispatch({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const addPost = (post) => {
    console.log(`addPost called`);
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    nextState(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
        nextState(false);
      });
  }, []);

  return (
    <Posting.Provider
      value={{
        postList,
        firstState,
        addPost,
        deletePost,
      }}
    >
      {children}
    </Posting.Provider>
  );
};

export default PostListProvider;
