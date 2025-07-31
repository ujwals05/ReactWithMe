const CreatePost = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Your name :
          </label>
          <input
            type="text"
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
            className="form-control"
            rows={7}
            placeholder="Share your experience"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Hastags?
          </label>
          <input type="text" className="form-control" placeholder="#" />
        </div>

        <button type="submit" className="btn btn-success">
          post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
