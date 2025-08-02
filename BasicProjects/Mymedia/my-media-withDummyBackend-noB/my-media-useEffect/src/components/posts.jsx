  import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Posting } from "../store/post-list-store";

  const Post = ({ post }) => {
    let Tags = post.tags;

    const {deletePost} = useContext(Posting)
    return (
      <>
        <div className="card" style={{ marginBottom: "20px" }}>
          <div className="card-body">
          
            <h5 className="card-title"> 
              {post.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                <MdDeleteForever />
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            <div>
              <div className="mt-2">
                {Tags.map((t, index) => (
                  <span
                    key={index}
                    className="badge text-bg-primary"
                    style={{ marginRight: "5px" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Post;
