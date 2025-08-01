import { useContext, useRef } from "react";
import { Posting } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(Posting);
  const nameElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const hashElement = useRef();

  const handleSubmit = () => {
    event.preventDefault(); 
    const name = nameElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const hash = hashElement.current.value.split(' ');
    addPost(name,title,body,hash);

    nameElement.current.value=" ";
    titleElement.current.value=" ";
    bodyElement.current.value=" ";
    hashElement.current.value=" ";
    
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Your name :
          </label>
          <input
            type="text"
            ref={nameElement}
            className="form-control"
            placeholder="Name"
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
