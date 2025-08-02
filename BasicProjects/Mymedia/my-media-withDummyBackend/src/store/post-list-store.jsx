import { createContext, useReducer } from "react";

export const Posting = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitalPosts:() => {}
});

let DEFAULT = [
  {
    id: "1",
    names:"John",
    title: "Visit to MUMBAI",
    body: "Hello buddies I recenlty visited to mumabai had to good time here, Hope to visit again",
    reactions: 8,
    tags: ["#vaction", "#enjoy", "#happy"],
  },
  {
    id: "2",
    names:"Golu",
    title: "Finally passed.!!",
    body: "I am happy that i am passed ",
    reactions: 10,
    tags: ["#pass", "#3years", "#happy"],
  },
];


const postListReducer = (currListPosition,action) => {
  let newList = currListPosition;
  if(action.type ==="DELETE_POST"){
    newList = currListPosition.filter((post)=>post.id!==action.payload.postId);
  }else if(action.type ==="ADD_INITIAL_POST"){
    newList = action.payload.posts;
  }else if (action.type === "ADD_POST"){
    newList = [action.payload,...currListPosition]
  }
  return newList;
}

const PostListProvider = ({children}) => {

  

  const [postList,dispatch]=useReducer(postListReducer,[]);

    const addInitalPosts = (posts) => {
      console.log(`posts`);
      dispatch({
        type: "ADD_INITIAL_POST",
        payload: {
          posts
        },
      });
    };

  const addPost = (name, title, body, hash) => {
    console.log(`${name} ${title} ${body} ${hash}`)
    dispatch({
      type:"ADD_POST",
      payload: {
        id:Date.now(),
        names:name,
        title:title,
        body:body,
        tags:hash
      }
    })
  };

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
    addInitalPosts,
    addPost,
    deletePost
  }}>
    {children}
  </Posting.Provider>
}

export default PostListProvider;

