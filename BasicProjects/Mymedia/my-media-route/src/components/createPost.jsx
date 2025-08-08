import { useContext, useRef } from "react";
import { Posting } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const {addPost} = useContext(Posting);

  const navigate = useNavigate();

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const hashElement = useRef();

  const handleSubmit = () => {
    event.preventDefault(); 
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const hash = hashElement.current.value.split(' ');

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId :userId,
        title: title,
        body: body,
        tags: hash,
      }),
    })
      .then((res) => res.json())
      .then(post => {
        addPost(post);
      navigate("/")}
      );

    userIdElement.current.value=" ";
    titleElement.current.value=" ";
    bodyElement.current.value=" ";
    hashElement.current.value=" ";
    
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Enter your id:
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            placeholder="ID"
            id="userID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title :
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            placeholder="Tell us about your day..!!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Content :
          </label>
          <textarea
            type="text"
            ref={bodyElement}
            className="form-control"
            rows={7}
            placeholder="Share your experience"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Hastags?
          </label>
          <input
            type="text"
            ref={hashElement}
            className="form-control"
            placeholder="#"
          />
        </div>

        <button type="submit" className="btn btn-success">
          post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
