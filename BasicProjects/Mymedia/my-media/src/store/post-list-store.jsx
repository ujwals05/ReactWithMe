import { createContext, useReducer } from "react";

export const Posting = createContext({
  postList:[],
  addPost: ()=>{},
  deletePost: ()=>{}
});

let DEFAULT = [
  {
    id: "1",
    title: "Visit to MUMBAI",
    body: "Hello buddies I recenlty visited to mumabai had to good time here, Hope to visit again",
    reactions: 8,
    tags: ["#vaction", "#enjoy", "#happy"],
  },
  {
    id: "2",
    title: "Nkn pass anko",
    body: "Pass agbitte guru after 3 attempts",
    reactions: 10,
    tags: ["pass", "3years", "happy"],
  },
];

const postListReducer = (currListPosition,action) => {
  let newList = currListPosition;
  if(action.type ==="DELETE_POST"){
    newList = currListPosition.filter((post)=>post.id!==action.payload.postId);
  }
  return newList;
}

const PostListProvider = ({children}) => {

  const [postList,dispatch]=useReducer(postListReducer,DEFAULT);

  const addPost = () => {

  }

  const deletePost = (postId) => {
    dispatch({
      type:"DELETE_POST",
      payload : {
        postId
      }
    })
  }
  return <Posting.Provider value={{
    postList,
    addPost,
    deletePost
  }}>
    {children}
  </Posting.Provider>
}

export default PostListProvider;

